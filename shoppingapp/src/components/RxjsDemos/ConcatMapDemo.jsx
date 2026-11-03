import { useEffect, useRef, useState } from 'react';
import { createOrderQueueStream } from '../../ObservablesFiles/MappingOperatorsService';
import LogPanel from './LogPanel';

const items = ['Laptop', 'Phone', 'Headphones', 'Keyboard', 'Mouse'];

// concatMap: place orders one at a time.
// Each request waits for the previous one, so order is always kept.
const ConcatMapDemo = () => {
  const [saved, setSaved] = useState([]);
  const [logs, setLogs] = useState([]);
  const ordersRef = useRef(null);
  const orderNoRef = useRef(0);

  useEffect(() => {
    const log = (msg) => setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    const { orders$, savedOrders$ } = createOrderQueueStream(log);
    ordersRef.current = orders$;

    const sub = savedOrders$.subscribe({
      next: (order) => setSaved((prev) => [...prev, order]),
      error: (err) => log(`❌ Error: ${err.message}`),
    });

    return () => sub.unsubscribe();
  }, []);

  const placeOrder = (item) => {
    orderNoRef.current += 1;
    ordersRef.current.next({ orderNo: orderNoRef.current, item, title: item, userId: 1 });
  };

  return (
    <div className="container mt-3">
      <h3>concatMap – Save orders in sequence</h3>
      <p className="text-muted">
        Click several products quickly. Each order is <b>queued</b> and saved only after
        the previous one finishes, so they are always saved in the order you clicked.
      </p>

      <div className="d-flex flex-wrap gap-2">
        {items.map((item) => (
          <button key={item} className="btn btn-outline-primary" onClick={() => placeOrder(item)}>
            Order {item}
          </button>
        ))}
      </div>

      <ol className="list-group list-group-numbered mt-3">
        {saved.map((o) => (
          <li key={o.orderNo} className="list-group-item">
            Order #{o.orderNo}: <b>{o.item}</b> (server id {o.serverId})
          </li>
        ))}
      </ol>

      <LogPanel logs={logs} onClear={() => setLogs([])} />
    </div>
  );
};

export default ConcatMapDemo;
