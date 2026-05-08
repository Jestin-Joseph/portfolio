import './App.css';
import MainView from './Resources/MainView/MainView';
import AboutView from './Resources/AboutView/AboutView';
import { ThemeProvider } from './Resources/ThemeSettings/ThemeToggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className='mainContainer'>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/home" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
