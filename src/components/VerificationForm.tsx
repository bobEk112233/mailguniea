import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { verifyEmail, createVerification, saveVerificationResult } from '../lib/emailVerification';

const VerificationForm = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSingleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setLoading(true);
    try {
      // Create verification record
      const verification = await createVerification(user.id, 1);
      
      // Verify email
      const verificationResult = await verifyEmail(email);
      
      // Save result
      await saveVerificationResult(
        verification.id,
        email,
        verificationResult.valid ? 'valid' : 'invalid',
        verificationResult
      );

      setResult(verificationResult);
    } catch (error) {
      console.error('Error during verification:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBulkVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) return;

    setLoading(true);
    try {
      const text = await file.text();
      const emails = text.split('\n').map(email => email.trim()).filter(Boolean);
      
      // Create verification record
      const verification = await createVerification(user.id, emails.length, file.name);
      
      // Process each email
      for (const email of emails) {
        const verificationResult = await verifyEmail(email);
        await saveVerificationResult(
          verification.id,
          email,
          verificationResult.valid ? 'valid' : 'invalid',
          verificationResult
        );
      }

      // Redirect to results page
      window.location.href = '/results';
    } catch (error) {
      console.error('Error during bulk verification:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Single Email Verification
          </h3>
          <div className="mt-5">
            <form onSubmit={handleSingleVerification} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>
            </form>

            {result && (
              <div className="mt-4 p-4 rounded-md bg-gray-50">
                <h4 className="text-sm font-medium text-gray-900">Verification Result:</h4>
                <dl className="mt-2 space-y-1">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Valid:</dt>
                    <dd className="text-sm font-medium text-gray-900">{result.valid ? 'Yes' : 'No'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Format Valid:</dt>
                    <dd className="text-sm font-medium text-gray-900">{result.formatValid ? 'Yes' : 'No'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">DNS Valid:</dt>
                    <dd className="text-sm font-medium text-gray-900">{result.dns ? 'Yes' : 'No'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Disposable:</dt>
                    <dd className="text-sm font-medium text-gray-900">{result.disposable ? 'Yes' : 'No'}</dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bulk Verification
          </h3>
          <div className="mt-5">
            <form onSubmit={handleBulkVerification} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload file
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept=".csv,.txt"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      CSV or TXT up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || !file}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                {loading ? 'Processing...' : 'Start Verification'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;