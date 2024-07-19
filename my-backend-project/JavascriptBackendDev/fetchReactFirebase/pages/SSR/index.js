//SSR
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export async function getServerSideProps() {
  const productsCollection = collection(db, 'products');
  const productSnapshot = await getDocs(productsCollection);
  const products = productSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: { initialProducts: products },
  };
}

export default function Home({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
