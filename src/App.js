import './App.css';
import Header from './components/Header';
import Scanner from './components/Scanner';
import Loading from './components/Loading';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = (tf) => {
    setIsLoading(tf)
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <Scanner handleLoading={handleLoading}/>
      </div>
      {isLoading ? <Loading /> : ''}
    </div>
  );
}

export default App;
