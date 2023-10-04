import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/auth/Login.jsx';
import { SignUp } from './components/auth/SignUp.jsx';
import { Container } from './components/dashboard/Container.jsx'
import './stylesheets/tailwind.css'

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/dashboard', element: <Container /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
