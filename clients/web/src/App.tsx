import React, { useEffect, useState } from 'react';
import { DivKitRenderer } from './components/DivKitRenderer';
import { divkitService } from './services/divkit.service';

function App() {
  const [layout, setLayout] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadHomeLayout();
  }, []);

  const loadHomeLayout = async () => {
    try {
      setLoading(true);
      const data = await divkitService.getLayout('home');
      setLayout(data);
    } catch (err) {
      setError('Failed to load layout');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={loadHomeLayout}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header style={{ 
        backgroundColor: '#007AFF', 
        color: 'white', 
        padding: '1rem',
        textAlign: 'center'
      }}>
        <h1>DivKit SDUI Demo</h1>
      </header>
      <main style={{ padding: '1rem' }}>
        {layout && <DivKitRenderer layout={layout} />}
      </main>
    </div>
  );
}

export default App;