export interface GiftData {
  otp: string;
  email: string;
  amount: number;
  item: string;
}

export async function submitGift(data: GiftData): Promise<{ message: string }> {
  const response = await fetch('http://localhost:8002/collection/gift-add/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to submit gift');
  }

  return await response.json();
}