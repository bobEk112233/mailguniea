import React from 'react';
import { Code, Copy } from 'lucide-react';

const Integration = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Integration Guide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Integrate MailGuinea into your application in minutes
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900">REST API</h3>
              <p className="mt-4 text-gray-600">
                Use our simple REST API to verify email addresses programmatically
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">Authentication</h4>
                <div className="mt-4 bg-gray-800 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <code className="text-white">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                    <button
                      onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY')}
                      className="text-gray-400 hover:text-white"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">Single Email Verification</h4>
                <div className="mt-4 bg-gray-800 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <code className="text-white">
                      POST https://api.mailguinea.com/v1/verify
                    </code>
                    <button
                      onClick={() => copyToClipboard('POST https://api.mailguinea.com/v1/verify')}
                      className="text-gray-400 hover:text-white"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 bg-gray-800 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <code className="text-white">
                      {`{
  "email": "example@domain.com"
}`}
                    </code>
                    <button
                      onClick={() => copyToClipboard('{\n  "email": "example@domain.com"\n}')}
                      className="text-gray-400 hover:text-white"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900">Code Examples</h4>
                <div className="mt-4 space-y-4">
                  <div>
                    <h5 className="text-md font-medium text-gray-900">JavaScript/Node.js</h5>
                    <div className="mt-2 bg-gray-800 rounded-md p-4">
                      <code className="text-white block whitespace-pre">
{`const response = await fetch('https://api.mailguinea.com/v1/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'example@domain.com'
  })
});

const result = await response.json();`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-md font-medium text-gray-900">Python</h5>
                    <div className="mt-2 bg-gray-800 rounded-md p-4">
                      <code className="text-white block whitespace-pre">
{`import requests

response = requests.post(
    'https://api.mailguinea.com/v1/verify',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'email': 'example@domain.com'
    }
)

result = response.json()`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900">SDK Libraries</h3>
              <p className="mt-4 text-gray-600">
                Use our official SDK libraries for easier integration
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center">
                    <Code className="h-6 w-6 text-amber-500" />
                    <h4 className="ml-2 text-lg font-semibold">Node.js SDK</h4>
                  </div>
                  <code className="mt-4 block bg-gray-100 p-2 rounded">
                    npm install mailguinea
                  </code>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center">
                    <Code className="h-6 w-6 text-amber-500" />
                    <h4 className="ml-2 text-lg font-semibold">Python SDK</h4>
                  </div>
                  <code className="mt-4 block bg-gray-100 p-2 rounded">
                    pip install mailguinea
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;