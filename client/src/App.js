import './App.css';
import { Provider } from 'react-redux'
import createStore from './redux/createStore'
import { useAuth } from './hooks/useAuth'
import { AuthContext } from './context/AuthContext'
import Routes from './Routes';

const store = createStore();

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token

  return (
    <Provider store={store} className="App">
      <AuthContext.Provider value={{ token, login, logout, userId, ready, isAuthenticated }}>
        <Routes />
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
