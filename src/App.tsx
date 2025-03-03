import './style/main.scss';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeProvider';
import AppLayout from './components/app-layout/AppLayout';
import { store } from '../store/store';

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
