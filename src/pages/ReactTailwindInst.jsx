
import React from 'react';
import { Link } from "react-router-dom";
const ReactTailwindInst = () => {
  const codeBlocks = {
    step1: `npm create vite@latest\ncd your-project-name\nnpm install`,
    step2: `npm install tailwindcss @tailwindcss/vite`,
    step3: `import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})`,
    step4: `@import "tailwindcss";`,
    step5: `import { useState } from 'react'\n\nfunction App() {\n  return (\n    <h3 className="text-2xl font-bold text-blue-600">\n      Hello YadavJi\n    </h3>\n  )\n}\n\nexport default App`,
    run: `node server.js   # Backend\nnpm run dev      # Frontend`
  };

  return (
    <>
      <div className="w-full h-10"><a href="#"> Go Back</a></div>
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className=" p-8 text-white">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Setting Up Tailwind CSS in React + Vite
          </h1>
          <p className="mt-2 text-indigo-100 italic">
            A quick-start guide for modern frontend development.
          </p>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
              Initialize Vite
            </h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeBlocks.step1}</code>
            </pre>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-100 mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
              Install Tailwind Plugin
            </h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeBlocks.step2}</code>
            </pre>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-100 mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
              Configure vite.config.js
            </h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeBlocks.step3}</code>
            </pre>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-100 mb-3 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
              Add Import to index.css
            </h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeBlocks.step4}</code>
            </pre>
          </section>

          {/* Step 5 */}
          <section className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Final App Structure</h2>
            <pre className="bg-white border border-blue-100 p-4 rounded text-sm text-gray-800">
              <code>{codeBlocks.step5}</code>
            </pre>
          </section>

          {/* Footer/Execution */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Ready to Launch?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-mono text-sm text-center">
                npm run dev
              </div>
              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-mono text-sm text-center">
                node server.js
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/* <button className="">Download Md File</button> */}

    

               


    </>
  );
};

export default ReactTailwindInst;