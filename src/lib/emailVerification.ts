import { supabase } from './supabase';
import { Database } from './database.types';

type Verification = Database['public']['Tables']['verifications']['Row'];
type VerificationResult = Database['public']['Tables']['verification_results']['Row'];

interface EmailVerificationResponse {
  valid: boolean;
  disposable: boolean;
  dns: boolean;
  formatValid: boolean;
}

export async function verifyEmail(email: string): Promise<EmailVerificationResponse> {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formatValid = emailRegex.test(email);

  if (!formatValid) {
    return {
      valid: false,
      disposable: false,
      dns: false,
      formatValid: false
    };
  }

  // Extract domain for DNS check
  const domain = email.split('@')[1];
  
  try {
    // Simulate DNS check (in a real implementation, you'd use DNS lookup)
    const dnsValid = true;

    // Check against common disposable email domains (this is a basic example)
    const disposableDomains = ['tempmail.com', 'throwaway.com'];
    const isDisposable = disposableDomains.includes(domain);

    return {
      valid: formatValid && dnsValid && !isDisposable,
      disposable: isDisposable,
      dns: dnsValid,
      formatValid
    };
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
}

export async function createVerification(userId: string, totalEmails: number, fileName?: string): Promise<Verification> {
  const { data, error } = await supabase
    .from('verifications')
    .insert([
      {
        user_id: userId,
        status: 'pending',
        total_emails: totalEmails,
        file_name: fileName
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function saveVerificationResult(
  verificationId: string,
  email: string,
  status: string,
  details: any
): Promise<VerificationResult> {
  const { data, error } = await supabase
    .from('verification_results')
    .insert([
      {
        verification_id: verificationId,
        email,
        status,
        details
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}