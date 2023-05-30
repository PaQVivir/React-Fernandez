import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <ItemListContainer />
        <Footer />
    </div>
  );
}

export default App;
