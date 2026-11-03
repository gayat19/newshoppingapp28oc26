import { useEffect, useRef, useState } from 'react';
import { createLoginStream } from '../../ObservablesFiles/MappingOperatorsService';
import LogPanel from './LogPanel';

// exhaustMap: stop double-submits.
// While a login request is running, extra clicks are ignored.
const ExhaustMapDemo = () => {
  const [clicks, setClicks] = useState(0);
  const [requests, setRequests] = useState(0);
  const [logs, setLogs] = useState([]);
  const loginRef = useRef(null);
  const clickNoRef = useRef(0);

  useEffect(() => {
    const log = (msg) => setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    const { loginClick$, loginResult$ } = createLoginStream(log);
    loginRef.current = loginClick$;

    const sub = loginResult$.subscribe({
      next: () => setRequests((n) => n + 1),
      error: (err) => log(`❌ Error: ${err.message}`),
    });

    return () => sub.unsubscribe();
  }, []);

  const handleLogin = () => {
    clickNoRef.current += 1;
    setClicks(clickNoRef.current);
    loginRef.current.next({
      clickNo: clickNoRef.current,
      credentials: { username: 'john', password: 'secret' },
    });
  };

  return (
    <div className="container mt-3">
      <h3>exhaustMap – Prevent double submit</h3>
      <p className="text-muted">
        Click "Login" many times quickly. The login takes 2 seconds, and any clicks
        during that time are <b>ignored</b>. Only one request is sent.
      </p>

      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>

      <div className="mt-3">
        <span className="badge bg-secondary me-2">Clicks: {clicks}</span>
        <span className="badge bg-success me-2">Requests completed: {requests}</span>
      </div>

      <LogPanel logs={logs} onClear={() => setLogs([])} />
    </div>
  );
};

export default ExhaustMapDemo;
