import { useVirtualizer } from '@tanstack/react-virtual';
import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const PAGE_SIZE = 20;

export default function InfiniteScrollVirtual() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const parentRef = useRef<HTMLDivElement>(null);

  const loadUsers = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<User[]>(
        `https://gorest.co.in/public/v2/users`,
        {
          params: { page, per_page: PAGE_SIZE },
        },
      );
      setUsers((prev) => [...prev, ...res.data]);
      setHasMore(res.data.length === PAGE_SIZE);
      setPage((prev) => prev + 1);
    } catch (e: any) {
      setError(e.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  React.useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
    overscan: 5,
  });

  React.useEffect(() => {
    const virtualRows = rowVirtualizer.getVirtualItems();
    console.log(virtualRows);

    if (!loading && hasMore && virtualRows.length > 0) {
      const lastItem = virtualRows[virtualRows.length - 1];
      if (lastItem.index >= users.length - 5) {
        loadUsers();
      }
    }
  }, [
    rowVirtualizer.getVirtualItems(),
    loading,
    hasMore,
    users.length,
    loadUsers,
  ]);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">
        Infinite Scroll Virtualized Example
      </h1>
      {/* Debug Info Section */}
      <div className="mt-4 p-2 bg-yellow-100 border border-yellow-400 rounded text-xs">
        <div className="font-bold text-yellow-700 mb-1">
          Debug Info
        </div>
        <pre className="text-yellow-900">
          {JSON.stringify(
            {
              page,
              loading,
              error,
              hasMore,
              totalItem: users.length,
              lastItem: users[users.length - 1],
              scrollTop: parentRef.current?.scrollTop,
              scrollHeight: parentRef.current?.scrollHeight,
            },
            null,
            2,
          )}
        </pre>
      </div>
      <div
        ref={parentRef}
        className="h-96 w-full overflow-auto border rounded shadow"
        style={{ height: 500 }}
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
      {loading && <div className="mt-2 text-blue-500">Loading...</div>}
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {!hasMore && <div className="mt-2 text-gray-500">No more users</div>}
    </div>
  );
}
