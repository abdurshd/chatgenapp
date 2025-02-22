import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '~/routes/components/ui/button';
import { Input } from '~/routes/components/ui/input';

interface ApiConfig {
  apiUrl: string;
  apiKey: string;
  modelType: string;
}

export default function ApiConfig() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<ApiConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('apiConfig');
      return saved ? JSON.parse(saved) : { apiUrl: '', apiKey: '', modelType: 'openai' };
    }
    return { apiUrl: '', apiKey: '', modelType: 'openai' };
  });

  useEffect(() => {
    sessionStorage.setItem('apiConfig', JSON.stringify(config));
  }, [config]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Configure API</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[400px]">
          <Dialog.Title className="text-xl font-bold mb-4">API Configuration</Dialog.Title>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">API URL</label>
              <Input
                type="text"
                value={config.apiUrl}
                onChange={(e) => setConfig({ ...config, apiUrl: e.target.value })}
                placeholder="https://api.example.com/v1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">API Key</label>
              <Input
                type="password"
                value={config.apiKey}
                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                placeholder="Enter your API key"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Save</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 