import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="add-product" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
