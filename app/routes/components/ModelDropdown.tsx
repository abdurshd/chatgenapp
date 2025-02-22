// app/components/ModelDropdown.tsx
import { useState } from 'react';

export default function ModelDropdown() {
  const [selectedModel, setSelectedModel] = useState('deepseek');

  return (
    <div className="relative inline-block w-64">
      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
      >
        <option value="deepseek">DeepSeek</option>
        <option value="claude">Claude</option>
        <option value="openai">OpenAI</option>
        <option value="llama">Meta LLaMA</option>
        <option value="gemini">Google Gemini</option>
      </select>
    </div>
  );
}
