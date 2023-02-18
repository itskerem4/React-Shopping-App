import './App.css';
import Home from './home.js'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
function App() {
  return (
    <>
      <CartProvider>
      <Home/>
      <Cart/>
      </CartProvider>
    </>
  );
}

export default App;
