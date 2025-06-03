'use client';

import { useState } from 'react';
import { addGuest, GuestPayload } from '@/ApiCall/GuestAddAPI';



export default function GuestCreate() {
  const [formData, setFormData] = useState<GuestPayload>({
    name: '',
    email: '',
    relationship: '',
    gender: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formOpen, setFormOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await addGuest(formData);
      setMessage('✅ Guest created successfully!');
      setFormData({ name: '', email: '', relationship: '', gender: '', address: '' });
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">New Guest Add (Invite)</h1>

    <button
      onClick={() => setFormOpen((open) => !open)}
      className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-4 transition"
      type="button"
    >
      {formOpen ? 'Close Guest Form' : 'Add New Guest'}
    </button>

    {formOpen && (
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg border"
      >
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="relationship">
          Relationship
        </label>
        <input
          id="relationship"
          type="text"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          placeholder="Relationship"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        </div>
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>
        <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
        {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    )}

      {message && <p className="mt-4 text-center text-sm text-gray-800">{message}</p>}
    </div>
  );
}
