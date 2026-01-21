import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>Shopping Cart Application</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
        <ProductList />
        <Cart />
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Checkout />
      </div>
    </div>
  );
}

export default App;
