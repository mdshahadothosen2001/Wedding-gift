"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/component/URLs';
import GuestCreate from '../component/GuestAdd'
import GuestList from '../component/GuestList'

const GuestPage = () => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div>
        <div className="flex flex-col items-center mb-8 mt-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <span role="img" aria-label="guests">
              👥
              </span>
              Manage Your Wedding Guests
            </h1>
          <p className="text-lg text-gray-600 max-w-xl text-center">
            Easily add, view, and manage your guest list for the big day.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => navigateTo(ROUTES.GIFT)} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Gift Management
          </button>
          <button onClick={() => navigateTo(ROUTES.HOME)} className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600">
            Home
          </button>
        </div>
        <div className="mb-8 flex flex-col items-center w-full">
          <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-orange-200 rounded-xl shadow-lg px-10 py-8 w-full max-w-2xl flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Add a New Guest</h2>
            <p className="text-gray-600 text-center mb-4">
              Fill in the details below to add someone special to your guest list.
            </p>
            <div className="w-full">
            </div>
          </div>
        </div>

        <GuestCreate />
        <GuestList />
    </div>
  )
}

export default GuestPage