import './App.css';
import { ProductAPI } from './external-api/product-api';

const products = await ProductAPI.getProducts();

function App() {
  return (
    <>
      <div>Read README.md</div>
      <div>Number of products: {products.length}</div>
    </>
  );
}

export default App;
