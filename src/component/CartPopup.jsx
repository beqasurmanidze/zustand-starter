import React from 'react';

const CartPopup = () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 35 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 60 },
  ];

  return (
    <div className="absolute right-4 top-16 bg-white shadow-lg p-4 rounded-lg w-64 z-50">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      <button className="absolute top-2 right-2 text-gray-500">✕</button>

      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h3 className="text-lg">{item.name}</h3>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <div className="flex space-x-1">
              <button className="bg-green-500 text-white px-2 rounded">
                +
              </button>
              <button className="bg-yellow-500 text-white px-2 rounded">
                -
              </button>
              <button className="bg-red-500 text-white px-2 rounded">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full bg-red-600 text-white py-2 rounded">
        Clear Cart
      </button>
    </div>
  );
};

export default CartPopup;
