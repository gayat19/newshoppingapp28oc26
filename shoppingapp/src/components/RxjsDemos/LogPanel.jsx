// Shows the step-by-step log for each demo
const LogPanel = ({ logs, onClear }) => (
  <div className="mt-3">
    <div className="d-flex justify-content-between align-items-center">
      <h6 className="mb-1">Event log</h6>
      <button className="btn btn-sm btn-outline-secondary" onClick={onClear}>
        Clear log
      </button>
    </div>
    <pre
      style={{
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '10px',
        height: '220px',
        overflowY: 'auto',
        fontSize: '13px',
      }}
    >
      {logs.length ? logs.join('\n') : 'Nothing yet...'}
    </pre>
  </div>
);

export default LogPanel;
