import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-xl mb-6 shadow-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            DocFlow Backend API
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive PDF processing API with 20+ powerful operations for document manipulation, conversion, and optimization.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Service Status</h3>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-2xl font-bold text-emerald-600 mb-2">Operational</p>
            <p className="text-sm text-slate-500">All PDF services running</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">API Endpoints</h3>
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-700 mb-2">20+</p>
            <p className="text-sm text-slate-500">PDF operations available</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Processing Speed</h3>
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-slate-700 mb-2">&lt;2s</p>
            <p className="text-sm text-slate-500">Average processing time</p>
          </div>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Features</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">PDF Manipulation</h3>
                  <p className="text-slate-600 text-sm">Merge, split, compress, and organize PDFs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Format Conversion</h3>
                  <p className="text-slate-600 text-sm">PDF to Word, Excel, images, and vice versa</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Image Processing</h3>
                  <p className="text-slate-600 text-sm">Compress, resize, rotate, and crop images</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Content Extraction</h3>
                  <p className="text-slate-600 text-sm">Extract text, pages, and metadata</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Start</h2>
            <div className="bg-slate-900 rounded-lg p-4 mb-4">
              <code className="text-emerald-400 text-sm font-mono">
                curl -X POST https://your-api.com/api/merge-pdf \<br />
                &nbsp;&nbsp;-H &quot;Content-Type: multipart/form-data&quot; \<br />
                &nbsp;&nbsp;-F &quot;files=@document1.pdf&quot; \<br />
                &nbsp;&nbsp;-F &quot;files=@document2.pdf&quot;
              </code>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Upload multiple files and get processed results instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                Try API
              </button>
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-colors border border-slate-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Available Endpoints */}
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">PDF Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/merge-pdf</code>
              </div>
              <p className="text-slate-500 text-xs">Combine multiple PDFs</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/split-pdf</code>
              </div>
              <p className="text-slate-500 text-xs">Split PDF into pages</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/compress-pdf</code>
              </div>
              <p className="text-slate-500 text-xs">Reduce PDF file size</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/pdf-to-images</code>
              </div>
              <p className="text-slate-500 text-xs">Convert PDF to images</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/images-to-pdf</code>
              </div>
              <p className="text-slate-500 text-xs">Create PDF from images</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors border border-slate-200">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-slate-800 text-white text-xs rounded font-medium">POST</span>
                <code className="text-slate-700 text-sm">/add-page-numbers</code>
              </div>
              <p className="text-slate-500 text-xs">Add page numbering</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
              View All 20+ Endpoints →
            </button>
          </div>
        </div>

        {/* Additional Operations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Document Conversion</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">PDF to Word</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/convert-pdf-to-word</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">PDF to Excel</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/pdf-to-excel</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Excel to PDF</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/excel-to-pdf</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Word to PDF</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/word-to-pdf</code>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Image Operations</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Compress Images</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/compress-image</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Resize Images</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/resize-image</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Rotate Images</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/rotate-image</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-slate-700 font-medium">Crop Images</span>
                <code className="text-slate-600 bg-white px-2 py-1 rounded text-xs border">/crop-image</code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-slate-200 pt-8">
          <p className="text-slate-500 mb-4">
            DocFlow Backend • Powered by Next.js & Advanced PDF Processing
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              API Documentation
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              Rate Limits
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              Support
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}