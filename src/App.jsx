import './Null.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <Menu />
        <About />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
