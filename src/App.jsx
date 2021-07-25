import Navbar from "./Navbar";
import {BrowserRouter} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>

    </>
  );
}

export default App;
