'use client';
import { useState } from 'react';

export default function TestAPIs() {
  const [result, setResult] = useState('');

  const testAPI = async (endpoint) => {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: 'GET',
      });
      
      if (response.ok) {
        setResult(`✅ ${endpoint} - Working`);
      } else {
        setResult(`❌ ${endpoint} - Failed: ${response.status}`);
      }
    } catch (error) {
      setResult(`❌ ${endpoint} - Error: ${error.message}`);
    }
  };

  const apis = [
    'add-filters', 'add-page-numbers', 'compress-image', 
    'compress-pdf', 'convert-pdf-to-word', 'crop-image',
    'excel-to-pdf', 'extract-pdf-pages', 'merge-pdf',
    'organize-pdf', 'pdf-to-excel', 'pdf-to-images',
    'remove-pdf-pages', 'resize-image', 'rotate-image',
    'split-pdf', 'word-to-pdf'
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">API Status Check</h1>
      <div className="grid gap-2">
        {apis.map(api => (
          <button 
            key={api}
            onClick={() => testAPI(api)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Test {api}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        {result}
      </div>
    </div>
  );
}