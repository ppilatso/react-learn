import { useState } from 'react';
import './App.css'
import MyButton from './MyButton';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  isLoggedIn: false,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map(product => 
      <li key={product.id}>
        {product.title}
      </li>
  );

  return (
    <>
      <section>
        <h1>Updates Together</h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </section>

      <h1>{user.name}</h1>
      <MyButton/> 
      <MyButton/><br/>
      <div>
        {user.isLoggedIn ? (
          <MyImage/>
        ) : (
          <h1>Not Logged In</h1>
        )}
      </div>
      <ul>
        {listItems}
      </ul>
    </>
  )
}