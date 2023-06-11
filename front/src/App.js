import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import MainPage from '../src/View/MainPage/MainPage'
import FormPage from '../src/View/FormPage/FormPage'




function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainPage />
  }, {
    path: "/form",
    element: <FormPage />
  }]);
  return (

    <div className="App" data-testid="app-component">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
