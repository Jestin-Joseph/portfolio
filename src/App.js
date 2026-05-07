import './App.css';
import MainView from './Resources/MainView/MainView';
import { ThemeProvider } from './Resources/ThemeSettings/ThemeToggle';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className='mainContainer'>
          <MainView />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
