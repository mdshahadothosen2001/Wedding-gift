'use client';

import { useState } from 'react';
import { submitGift } from '@/ApiCall/GiftAddAPI';

export default function GiftAdd() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    otp: '',
    email: '',
    amount: '',
    item: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await submitGift({
        otp: formData.otp,
        email: formData.email,
        amount: Number(formData.amount),
        item: formData.item,
      });

      setSuccess('Gift received successfully!');
      setFormData({ otp: '', email: '', amount: '', item: '' });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      {!showForm ? (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Receive Gift
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-semibold">Gift Information</h2>

            <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
            <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
            <input
            type="text"
            name="item"
            placeholder="Gift Item (e.g., tk + dinner set)"
            value={formData.item}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            />
            <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded m-3"
            onClick={() => setShowForm(false)}
            >
            Close
            </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>

          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
