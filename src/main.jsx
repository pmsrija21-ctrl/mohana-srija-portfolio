import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: '#ec4899', backgroundColor: '#06020e', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Cosmic Portfolio System Recovery</h2>
          <p style={{ color: '#fff' }}>An unexpected error occurred during render:</p>
          <pre style={{ background: '#110526', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid #ec4899', whiteSpace: 'pre-wrap' }}>
            {this.state.error && (this.state.error.stack || this.state.error.toString())}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#ec4899', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
