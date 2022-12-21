import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Router/Router';

function App() {
  return (
    <div className="App w-11/12 mx-auto">
       <RouterProvider router={Routes} >
         
       </RouterProvider>
    </div>
  );
}

export default App;
