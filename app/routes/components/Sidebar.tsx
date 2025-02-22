// app/components/Sidebar.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <motion.aside
      animate={{ width: collapsed ? 60 : 300 }}
      className="bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between"
    >
      <div className="p-4">
        <button
          className="mb-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '>' : '<'}
        </button>
        {!collapsed && (
          <>
            <h2 className="text-lg font-bold mb-2">Chat History</h2>
            <ul className="space-y-1">
              <li>
                <Link to="/chat/1" className="hover:underline">
                  Conversation 1
                </Link>
              </li>
              <li>
                <Link to="/chat/2" className="hover:underline">
                  Conversation 2
                </Link>
              </li>
              <li>
                <Link to="/chat/3" className="hover:underline">
                  Conversation 3
                </Link>
              </li>
              {/* You can map through an array of chat history items here */}
            </ul>
          </>
        )}
      </div>
      {/* Bottom 10%: Settings, Account, Logout */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-2">
            <Link to="/settings" className="text-sm hover:underline">
              Settings
            </Link>
            <Link to="/account" className="text-sm hover:underline">
              Account
            </Link>
            <Link to="/logout" className="text-sm hover:underline">
              Logout
            </Link>
          </div>
        </div>
      )}
    </motion.aside>
  );
}
