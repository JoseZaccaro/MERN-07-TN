import { useState } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}

export default App
