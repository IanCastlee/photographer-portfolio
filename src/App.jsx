import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LightboxProvider } from './context/LightboxContext';
import { PortfolioTemplate } from './components/templates/PortfolioTemplate';
import { InitialLoader } from './components/molecules/InitialLoader';
import { photographerData } from './data/mockData';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      <LightboxProvider projects={photographerData.projects}>
        <PortfolioTemplate data={photographerData} />
      </LightboxProvider>
    </ThemeProvider>
  );
}

export default App;
