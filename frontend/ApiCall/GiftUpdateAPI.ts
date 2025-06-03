export interface GiftUpdatePayload {
  amount: number;
  item: string;
}

export async function updateGift(id: number, payload: GiftUpdatePayload): Promise<void> {
  try {
    const response = await fetch(`http://localhost:8002/collection/gift-item-update/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || 'Failed to update gift.');
    }
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
}
