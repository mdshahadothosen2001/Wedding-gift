'use client';

import { useEffect, useState } from 'react';
import { fetchGifts, Gift } from '@/ApiCall/GiftListAPI';
import { updateGift } from '@/ApiCall/GiftUpdateAPI';
import { Pencil, Save } from 'lucide-react';

export default function GiftList() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editAmount, setEditAmount] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<string>('');

  useEffect(() => {
    async function loadGifts() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchGifts();
        setGifts(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load gifts.');
      } finally {
        setLoading(false);
      }
    }

    loadGifts();
  }, []);

  const handleEdit = (index: number, gift: Gift) => {
    setEditIndex(index);
    setEditAmount(gift.amount);
    setEditItem(gift.item);
  };

  const handleSave = async (gift: Gift, index: number) => {
    if (editAmount === null || editItem.trim() === '') return;

    try {
      await updateGift(gift.id, { amount: editAmount, item: editItem });
      const updated = [...gifts];
      updated[index] = { ...gift, amount: editAmount, item: editItem };
      setGifts(updated);
      setEditIndex(null);
    } catch (err) {
      alert('Failed to update gift.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Gift List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Guest Name</th>
              <th className="border border-gray-300 p-2 text-left">Amount</th>
              <th className="border border-gray-300 p-2 text-left">
                <span className="text-red-500 font-bold">+/.</span> Item
              </th>
              <th className="border border-gray-300 p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift, index) => (
              <tr key={gift.guest_id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{gift.guest}</td>
                <td className="border border-gray-300 p-2">
                  {editIndex === index ? (
                    <input
                      type="number"
                      value={editAmount ?? ''}
                      onChange={(e) => setEditAmount(parseInt(e.target.value))}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    gift.amount
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editItem}
                      onChange={(e) => setEditItem(e.target.value)}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    gift.item
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editIndex === index ? (
                    <button onClick={() => handleSave(gift, index)} className="text-green-600 hover:text-green-800">
                      <span className="inline-block w-5 h-5 align-middle">
                    
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 6.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0l-3.364-3.364a1 1 0 111.414-1.414l2.657 2.657 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      </span>
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(index, gift)} className="text-blue-600 hover:text-blue-800">
                      <Pencil size={20} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
