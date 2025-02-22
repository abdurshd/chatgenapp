// app/components/ThemeSwitcher.tsx
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light'); // default is light (white theme)

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove any existing theme classes
    root.classList.remove('light', 'dark', 'purple');
    // Add the selected theme class
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex space-x-2">
      <button onClick={() => setTheme('light')} className="px-2 py-1 border rounded">
        Light
      </button>
      <button onClick={() => setTheme('dark')} className="px-2 py-1 border rounded">
        Dark
      </button>
      <button onClick={() => setTheme('purple')} className="px-2 py-1 border rounded">
        Purple
      </button>
    </div>
  );
}
