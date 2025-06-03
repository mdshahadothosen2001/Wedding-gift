"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/component/URLs';
import GiftAdd from '../component/GiftAdd'
import GiftList from '../component/GiftList'
import SendOTPForm from '../component/OTPSend'

const GiftPage = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div style={{ maxWidth: 600, margin: '45px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32, fontWeight: 700, fontSize: 32, letterSpacing: 1 }}>
        🎁 Wedding Gift Management
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
      <button onClick={() => navigateTo(ROUTES.GUEST)} style={{ padding: '8px 16px', borderRadius: 4, border: 'none', background: '#ff9800', color: '#fff', cursor: 'pointer' }}>
        Manage Guest
      </button>
      <button
        onClick={() => navigateTo(ROUTES.HOME)}
        style={{
          padding: '8px 16px',
          borderRadius: 4,
          border: 'none',
          background: '#43a047',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#1565c0')}
        onMouseOut={e => (e.currentTarget.style.background = '#43a047')}
      >
        Home
      </button>
      </div>
      <div style={{ marginBottom: 24, marginTop: 103 }}>
        <GiftAdd />
      </div>
      <div style={{ marginBottom: 24 }}>
      <SendOTPForm />
      </div>
      <GiftList />
    </div>
  )
}

export default GiftPage