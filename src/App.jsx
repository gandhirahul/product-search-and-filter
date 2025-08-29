import './App.css';
import { ProductAPI } from './external-api/product-api';

const products = await ProductAPI.getProducts();

function App() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="border-8 border-gray-100 p-4 text-center text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>Number of products: {products.length}</div>
    </div>
  );
}

export default App;
