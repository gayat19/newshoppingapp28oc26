import { useEffect, useRef, useState } from 'react';
import { createParallelUsersStream } from '../../ObservablesFiles/MappingOperatorsService';
import LogPanel from './LogPanel';

// mergeMap: load several users at once.
// All requests run in parallel and results arrive in any order.
const MergeMapDemo = () => {
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);
  const idsRef = useRef(null);

  useEffect(() => {
    const log = (msg) => setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    const { userIds$, users$ } = createParallelUsersStream(log);
    idsRef.current = userIds$;

    const sub = users$.subscribe({
      next: (user) => setUsers((prev) => [...prev, user]),
      error: (err) => log(`❌ Error: ${err.message}`),
    });

    return () => sub.unsubscribe();
  }, []);

  const loadAll = () => {
    setUsers([]);
    [1, 2, 3, 4, 5].forEach((id) => idsRef.current.next(id));
  };

  return (
    <div className="container mt-3">
      <h3>mergeMap – Load users in parallel</h3>
      <p className="text-muted">
        Click the button to request users 1–5 at the same time. All requests start
        together, and each result shows up as soon as it comes back, so the
        <b> order changes</b> every time.
      </p>

      <button className="btn btn-primary" onClick={loadAll}>
        Load users 1–5
      </button>

      <ol className="list-group list-group-numbered mt-3">
        {users.map((u) => (
          <li key={u.id} className="list-group-item">
            User {u.id}: <b>{u.name}</b> ({u.email})
          </li>
        ))}
      </ol>

      <LogPanel logs={logs} onClear={() => setLogs([])} />
    </div>
  );
};

export default MergeMapDemo;
