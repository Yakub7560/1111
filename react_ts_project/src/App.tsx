import React from 'react';
import SearchBlock from './components/SearchBlock';
import ErrorBoundaryButton from './components/ErrorBoundaryButton';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <SearchBlock />
        <ErrorBoundaryButton />
      </ErrorBoundary>
    </div>
  );
}

export default App;
