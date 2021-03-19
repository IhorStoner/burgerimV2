import './App.css';
import { Provider } from 'react-redux'

const store = createStore();
function App() {
  return (
    <Provider store={store} className="App">
    </Provider>
  );
}

export default App;
