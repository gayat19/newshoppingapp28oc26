import { useEffect, useRef, useState } from 'react';
import { createSearchStream } from '../../ObservablesFiles/MappingOperatorsService';
import LogPanel from './LogPanel';

// switchMap: search as you type.
// Each new term cancels the old request, so you never see stale results.
const SwitchMapDemo = () => {
  const [term, setTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [logs, setLogs] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const log = (msg) => setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    const { search$, results$ } = createSearchStream(log);
    searchRef.current = search$;

    const sub = results$.subscribe({
      next: (data) => setPosts(data),
      error: (err) => log(`❌ Error: ${err.message}`),
    });

    return () => sub.unsubscribe();
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
    searchRef.current.next(e.target.value);
  };

  return (
    <div className="container mt-3">
      <h3>switchMap – Search as you type</h3>
      <p className="text-muted">
        Type quickly (e.g. "qui", then "dolor"). If a new term arrives while a request
        is still running, the old request is <b>cancelled</b> and only the latest
        result is shown.
      </p>

      <input
        className="form-control"
        placeholder="Search posts by keyword..."
        value={term}
        onChange={handleChange}
      />

      <ul className="list-group mt-3">
        {posts.map((p) => (
          <li key={p.id} className="list-group-item">
            <b>#{p.id}</b> {p.title}
          </li>
        ))}
        {!posts.length && <li className="list-group-item text-muted">No results</li>}
      </ul>

      <LogPanel logs={logs} onClear={() => setLogs([])} />
    </div>
  );
};

export default SwitchMapDemo;
