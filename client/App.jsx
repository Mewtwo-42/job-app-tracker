import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/auth/Login.jsx';
import { SignUp } from './components/auth/SignUp.jsx';
// import { Dashboard } from './components/dashboard/Dashboard.jsx';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    // { path: '/dashboard', element: <Dashboard /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
