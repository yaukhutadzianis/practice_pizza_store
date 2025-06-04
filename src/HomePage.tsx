import React from 'react';

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const pizzas: Pizza[] = [
  { id: 1, name: 'Маргарита', description: 'Классическая с томатами и сыром', price: 500 },
  { id: 2, name: 'Пепперони', description: 'С пепперони и сыром', price: 600 },
  { id: 3, name: 'Четыре сыра', description: 'Моцарелла, пармезан, дор блю, гауда', price: 700 },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Pizza Store</h1>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <h3>{pizza.name} - {pizza.price} ₽</h3>
            <p>{pizza.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;