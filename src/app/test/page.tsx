'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Style Test Page</h1>
      <div className="grid gap-4">
        <div className="bg-secondary p-4 rounded-lg">
          <p className="text-white">This should be white text on a dark gray background</p>
        </div>
        <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80">
          This should be a blue button
        </button>
        <div className="border border-accent/20 p-4 rounded-lg">
          <p className="text-gray-300">This should be light gray text with a border</p>
        </div>
      </div>
    </div>
  );
} 