
// This is a mock email verification service
// In a real app, you would integrate with an email verification API

export interface VerificationResult {
  email: string;
  valid: boolean;
  reason?: string;
  score?: number;
  verified: boolean;
  disposable: boolean;
  domain?: string;
}

export async function verifyEmail(email: string): Promise<VerificationResult> {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      email,
      valid: false,
      reason: 'Invalid email format',
      score: 0,
      verified: false,
      disposable: false
    };
  }
  
  // Extract domain
  const domain = email.split('@')[1];
  
  // Mock verification logic - in real app you'd call an API
  const isDisposable = ['mailinator.com', 'tempmail.com', 'throwaway.com'].includes(domain);
  
  // Random verification (for demo purposes)
  const random = Math.random();
  const isVerified = random > 0.3;
  const score = isDisposable ? 30 : (isVerified ? 70 + Math.floor(random * 30) : 20 + Math.floor(random * 40));
  
  return {
    email,
    valid: true,
    score,
    verified: isVerified,
    disposable: isDisposable,
    domain
  };
}
