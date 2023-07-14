import { ulid } from 'ulid';
ulid();

const menuItems = [
    {
      id: ulid(),
      name: 'Bagels',
      price: '5.00',
      img: 'https://source.unsplash.com/400x400/?bagels'
    },
    {
      id: ulid(),
      name: 'Muffins',
      price: '3.50',
      img: 'https://source.unsplash.com/400x400/?muffins'
    },
    {
      id: ulid(),
      name: 'Hot Coffee',
      price: '2.00',
      img: 'https://source.unsplash.com/400x400/?coffee'
    },
    {
      id: ulid(),
      name: 'Iced Coffee',
      price: '3.00',
      img: 'https://source.unsplash.com/400x400/?icedcoffee'
    },
    {
      id: ulid(),
      name: 'Espresso',
      price: '2.50',
      img: 'https://source.unsplash.com/400x400/?espresso'
    },
    {
      id: ulid(),
      name: 'Lattes',
      price: '4.00',
      img: 'https://source.unsplash.com/400x400/?latte'
    }
  ];

  export default menuItems;