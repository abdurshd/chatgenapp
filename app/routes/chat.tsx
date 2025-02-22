// app/routes/chat.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '~/routes/components/Sidebar';
import ModelDropdown from '~/routes/components/ModelDropdown';
import ThemeSwitcher from '~/routes/components/ThemeSwitcher';
import ApiConfig from '~/routes/components/ApiConfig';
import { Button } from '~/routes/components/ui/button';
import { Textarea } from '~/routes/components/ui/textarea';

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Here you would implement the actual API call using the config from sessionStorage
    setIsStreaming(true);
    // Simulate streaming response
    const response = "This is a simulated response from the AI model...";
    let displayedResponse = "";
    
    for (let i = 0; i < response.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      displayedResponse += response[i];
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: displayedResponse }
      ]);
    }
    setIsStreaming(false);
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <ModelDropdown />
            <ApiConfig />
          </div>
          <ThemeSwitcher />
        </div>
        
        <div className="flex-1 overflow-auto space-y-4 mb-4">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`p-4 rounded-lg ${
                  msg.role === 'user' ? 'bg-blue-100 dark:bg-blue-900 ml-12' : 'bg-gray-100 dark:bg-gray-800 mr-12'
                }`}
              >
                {msg.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isStreaming}
          />
          <Button type="submit" disabled={isStreaming}>
            Send
          </Button>
        </form>
      </main>
      <Sidebar />
    </div>
  );
}
