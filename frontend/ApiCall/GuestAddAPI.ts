"server-only";


export interface GuestPayload {
  name: string;
  email: string;
  relationship: string;
  gender: string;
  address: string;
}

export async function addGuest(data: GuestPayload) {
  const res = await fetch('http://localhost:8002/collection/guest-add/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error || 'Failed to add guest.');
  }

  return result;
}
