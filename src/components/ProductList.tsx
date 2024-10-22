import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'IPA', description: 'Cerveza artesanal IPA', price: 50 },
  { id: 2, name: 'Stout', description: 'Cerveza oscura y robusta', price: 60 },
  { id: 3, name: 'Lager', description: 'Cerveza ligera y refrescante', price: 45 },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
