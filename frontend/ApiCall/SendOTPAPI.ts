export async function sendOTP(email: string): Promise<{ message: string }> {
  const res = await fetch('http://localhost:8002/otp/send/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to send OTP');
  }

  console.log('OTP sent successfully', res);

  return await res.json();
}