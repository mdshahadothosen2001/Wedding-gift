'use client';

import { useState, useEffect } from 'react';
import { fetchGuests, Guest } from '@/ApiCall/GuestListAPI';
import { sendOTP } from '@/ApiCall/SendOTPAPI';

export default function SendOTPForm() {
  const [showForm, setShowForm] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await fetchGuests();
        setGuests(data);
      } catch (err: any) {
        setError(err.message);
      }
    }
    if (showForm) loadGuests();
  }, [showForm]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await sendOTP(selectedEmail);
      setMessage(res.message);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      {!showForm ? (
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Send OTP
        </button>
      ) : (
        <form onSubmit={handleSendOTP} className="space-y-4">
          <h2 className="text-lg font-semibold">Send OTP to Guest</h2>

            <div className="flex items-center gap-2">
              <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Search guest by name or email"
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
              list="guest-emails"
              required
              />
             
            </div>
            <datalist id="guest-emails">
            {guests
              .filter(
              (guest) =>
                guest.name.toLowerCase().includes(selectedEmail.toLowerCase()) ||
                guest.email.toLowerCase().includes(selectedEmail.toLowerCase())
              )
              .map((guest) => (
              <option key={guest.id} value={guest.email}>
                {guest.name} ({guest.email})
              </option>
              ))}
            </datalist>

          <button
              type="button"
              className="text-gray-500 hover:text-gray-700 px-2 py-1 m-5 rounded border"
              onClick={() => setShowForm(false)}
              aria-label="Close"
              >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
          

          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
