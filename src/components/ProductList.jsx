import React, {useState} from 'react';
import { useSelector} from "react-redux";
import './ProductList.css'
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [byCount,setByCount] = useState(false)
    const [showDropdown,setShowDropdown] = useState(false)
    const products = useSelector(state => state.products.products)

    return (
        <div>
            <div onClick={()=>setShowDropdown(!showDropdown)} className="dropdown">
                Dropdown
            </div>
            {showDropdown&&
                <div className="dropdown-content">
                    <button onClick={()=>setByCount(true)}>By count</button>
                    <button onClick={()=>setByCount(false)}>Alphabetical</button>
                </div>}
            <div className='products'>
                {[...products].sort((a, b) => byCount? a.count - b.count : a.name.localeCompare(b.name))
                    .map(el=>
                        <div key={el.id}>
                            <ProductItem el={el}/>
                        </div>)}

            </div>
        </div>
    );
};

export default ProductList;
