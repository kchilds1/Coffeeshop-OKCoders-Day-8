import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Contacts from './Pages/Contact';
import ContactDetail from './Pages/ContactDetails';


const router = createHashRouter([
  {
    path:'/',
    element: <Login/>,
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/menu',
    element: <Menu />
  },
  {
    path:'/contacts',
    children: [
      {
        index: true,
        element:<Contacts />,
      },
      {
        path:':contactId',
        element: <ContactDetail />,
      },
  ],
},
]);
 

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
