import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            DocFlow Backend API
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive PDF processing API with 20+ powerful operations for document manipulation, conversion, and optimization.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Service Status</h3>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-2xl font-bold text-green-400 mb-2">Operational</p>
            <p className="text-sm text-gray-300">All PDF services running</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">API Endpoints</h3>
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-blue-400 mb-2">20+</p>
            <p className="text-sm text-gray-300">PDF operations available</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Processing Speed</h3>
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-emerald-400 mb-2">&lt;2s</p>
            <p className="text-sm text-gray-300">Average processing time</p>
          </div>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Core Features</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">PDF Manipulation</h3>
                  <p className="text-gray-300 text-sm">Merge, split, compress, and organize PDFs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Format Conversion</h3>
                  <p className="text-gray-300 text-sm">PDF to Word, Excel, images, and vice versa</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Image Processing</h3>
                  <p className="text-gray-300 text-sm">Compress, resize, rotate, and crop images</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Content Extraction</h3>
                  <p className="text-gray-300 text-sm">Extract text, pages, and metadata</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm font-mono">
                curl -X POST https://your-api.com/api/merge-pdf \<br />
                &nbsp;&nbsp;-H &quot;Content-Type: multipart/form-data&quot; \<br />
                &nbsp;&nbsp;-F &quot;files=@document1.pdf&quot; \<br />
                &nbsp;&nbsp;-F &quot;files=@document2.pdf&quot;
              </code>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Upload multiple files and get processed results instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                Try API
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Available Endpoints */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">PDF Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/merge-pdf</code>
              </div>
              <p className="text-gray-400 text-xs">Combine multiple PDFs</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/split-pdf</code>
              </div>
              <p className="text-gray-400 text-xs">Split PDF into pages</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/compress-pdf</code>
              </div>
              <p className="text-gray-400 text-xs">Reduce PDF file size</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/pdf-to-images</code>
              </div>
              <p className="text-gray-400 text-xs">Convert PDF to images</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/images-to-pdf</code>
              </div>
              <p className="text-gray-400 text-xs">Create PDF from images</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium">POST</span>
                <code className="text-gray-300 text-sm">/add-page-numbers</code>
              </div>
              <p className="text-gray-400 text-xs">Add page numbering</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              View All 20+ Endpoints →
            </button>
          </div>
        </div>

        {/* Additional Operations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Document Conversion</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">PDF to Word</span>
                <code className="text-blue-400">/convert-pdf-to-word</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">PDF to Excel</span>
                <code className="text-blue-400">/pdf-to-excel</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Excel to PDF</span>
                <code className="text-blue-400">/excel-to-pdf</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Word to PDF</span>
                <code className="text-blue-400">/word-to-pdf</code>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Image Operations</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Compress Images</span>
                <code className="text-blue-400">/compress-image</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Resize Images</span>
                <code className="text-blue-400">/resize-image</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Rotate Images</span>
                <code className="text-blue-400">/rotate-image</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Crop Images</span>
                <code className="text-blue-400">/crop-image</code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-400 mb-4">
            DocFlow Backend • Powered by Next.js & Advanced PDF Processing
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              API Documentation
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Rate Limits
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}