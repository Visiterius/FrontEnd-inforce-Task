import './App.css';
import InputField from './components/InputField';
import ProductList from './components/ProductList';
import {useState} from 'react';

function App() {
  const [showModal,setShowModal] = useState(false)

  return (
    <div className='App'>
      {!showModal&&<button className='button' onClick={()=>setShowModal(!showModal)}>ADD</button>}
      {showModal&&<InputField showModal={showModal} setShowModal={setShowModal}/>}
        <ProductList/>
    </div>
  );
}

export default App;
