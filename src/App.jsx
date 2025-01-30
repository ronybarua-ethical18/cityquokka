import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
    <Header />
    <RouterProvider router={router} />
    </>
  ) 
  
}

export default App;
