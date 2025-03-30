
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { verifyEmail, VerificationResult } from '@/utils/emailVerifier';
import { CheckCircle, XCircle, AlertCircle, LoaderCircle } from 'lucide-react';

const EmailVerifier: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setErrorMessage('Please enter an email address');
      return;
    }
    
    setIsVerifying(true);
    setResult(null);
    setErrorMessage('');
    
    try {
      const verificationResult = await verifyEmail(email);
      setResult(verificationResult);
    } catch (error) {
      setErrorMessage('Failed to verify email. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const getScoreColor = (score?: number) => {
    if (!score) return 'bg-gray-200';
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-green-400';
    if (score >= 40) return 'bg-yellow-400';
    return 'bg-red-500';
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Verify Email Address</CardTitle>
          <CardDescription className="text-center">
            Enter an email address to verify its validity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-mailpunch-600 hover:bg-mailpunch-700"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin-pulse" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="font-medium">Verification Status:</span>
                <div className="flex items-center">
                  {result.verified ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-green-600 font-medium">Verified</span>
                    </>
                  ) : result.valid ? (
                    <>
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="text-yellow-600 font-medium">Caution</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-500 mr-1" />
                      <span className="text-red-600 font-medium">Invalid</span>
                    </>
                  )}
                </div>
              </div>

              {result.valid && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Quality Score:</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getScoreColor(result.score)}`} 
                          style={{ width: `${result.score}%` }}
                        ></div>
                      </div>
                      <span>{result.score}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Disposable:</span>
                    <div className="flex items-center">
                      {result.disposable ? (
                        <>
                          <AlertCircle className="h-5 w-5 text-yellow-500 mr-1" />
                          <span className="text-yellow-600 font-medium">Yes</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                          <span className="text-green-600 font-medium">No</span>
                        </>
                      )}
                    </div>
                  </div>

                  {result.domain && (
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Domain:</span>
                      <span>{result.domain}</span>
                    </div>
                  )}
                </>
              )}

              {!result.valid && result.reason && (
                <div className="text-red-500 p-2 bg-red-50 rounded text-center">
                  {result.reason}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerifier;
