import ProductItem from './components/productItem'; 
import ProductList from './components/productList';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
             <Router>
              <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductItem/>}/>
              </Routes>
             </Router>
    </div>
  );
}

export default App;
