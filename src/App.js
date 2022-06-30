import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Product from './Components/Home/Product';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/api/product/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
