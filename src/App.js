import logo from './logo.svg';
import './global.css';
import Routes from './routes.js';
import Header from './views/components/Header';
import Footer from './views/components/Footer';

function App() {
  return (
    <>
      <Header/>
        <Routes />
      <Footer/>
    </>
  );
}

export default App;
