export interface Gift {
  id: number;
  guest_id: number;
  guest: string;
  amount: number;
  item: string;
}

export async function fetchGifts(): Promise<Gift[]> {
  const response = await fetch('http://localhost:8002/collection/gift-list/', {
    method: 'GET',
    cache: 'no-store',
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to load gift list');
  }

  const data = await response.json();
  return data || [];
}
