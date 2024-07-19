import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title}: ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
