import { StrictMode, Component, ErrorInfo, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyCenter: 'center', background: '#02020a', color: '#ffffff', textAlign: 'center', padding: '40px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SYSTEM RECOVERY</h1>
          <p style={{ color: '#64748b', marginTop: '10px' }}>The application encountered an unexpected state. Please refresh the browser to re-establish the session.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

window.onerror = (message, source, lineno, colno, error) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #02020a; color: #ffffff; text-align: center;">
      <h1 style="font-size: 1.2rem; font-weight: bold;">CONNECTION INTERRUPTED</h1>
      <p style="color: #475569; margin-top: 10px;">A critical script error occurred. Please check your network and reload.</p>
    </div>`;
  }
};

window.onunhandledrejection = (event) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding: 20px; color: orange; font-family: monospace;">
      <h1>Unhandled Promise Rejection</h1>
      <p>${event.reason}</p>
    </div>`;
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
)
