import React, { useState, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const PAGE_SIZE = 20;

export default function BasicLoadMore() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const parentRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<User[]>(`https://gorest.co.in/public/v2/users`, {
        params: { page, per_page: PAGE_SIZE },
      });
      setUsers((prev) => [...prev, ...res.data]);
      setHasMore(res.data.length === PAGE_SIZE);
      setPage((prev) => prev + 1);
    } catch (e: any) {
      setError(e.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
    overscan: 5,
  });

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Virtualized Load More Example</h1>
      <div
        ref={parentRef}
        className="h-96 w-full overflow-auto border rounded shadow"
        style={{ height: 400 }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const user = users[virtualRow.index];
            return (
              <div
                key={user.id}
                className="absolute left-0 w-full px-4 py-3 border-b bg-white flex flex-col justify-center"
                style={{
                  top: 0,
                  transform: `translateY(${virtualRow.start}px)`,
                  height: `${virtualRow.size}px`,
                }}
              >
                <span className="font-semibold">{user.name}</span>
                <span className="text-gray-500 text-sm">{user.email}</span>
              </div>
            );
          })}
        </div>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={loadUsers}
        disabled={loading || !hasMore}
      >
        {loading ? 'Loading...' : hasMore ? 'Load More' : 'No More Users'}
      </button>
    </div>
  );
}
