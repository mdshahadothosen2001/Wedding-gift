"server-only";


export interface Guest {
  id: string;
  name: string;
  email: string;
  relationship: string;
  gender: string;
  address: string;
}


export async function fetchGuests(): Promise<Guest[]> {
  const res = await fetch('http://localhost:8002/collection/guest-list', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch guests.');
  }

  const data = await res.json();

  return data as Guest[];
}
