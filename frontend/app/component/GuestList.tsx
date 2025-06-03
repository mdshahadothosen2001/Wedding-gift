'use client';

import { useEffect, useState } from 'react';
import { fetchGuests, Guest } from '@/ApiCall/GuestListAPI';

export default function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    async function loadGuests() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchGuests();
        setGuests(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load guests.');
      } finally {
        setLoading(false);
      }
    }
    loadGuests();
  }, []);

  if (loading) return <p>Loading guests...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (!guests || guests.length === 0) return <p>No guests found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Guest List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Relationship</th>
            <th className="border border-gray-300 p-2 text-left">Gender</th>
            <th className="border border-gray-300 p-2 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{guest.name}</td>
              <td className="border border-gray-300 p-2">{guest.email}</td>
              <td className="border border-gray-300 p-2">{guest.relationship}</td>
              <td className="border border-gray-300 p-2">{guest.gender}</td>
              <td className="border border-gray-300 p-2">{guest.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
