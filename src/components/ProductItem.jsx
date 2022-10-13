import React, {useState} from 'react';
import './ProductItem.css'
import {removeProduct} from "../store/productSlice";
import {useDispatch} from "react-redux";

const ProductItem = ({el}) => {
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className='product'>
            <h2>date: {el.id.slice(0,10)}</h2>
            <h2>name: {el.name}</h2>
            <h2>count: {el.count}</h2>
            <h2>width: {el.size.width}</h2>
            <h2>height: {el.size.height}</h2>
            <h2>weight: {el.weight}</h2>
            {showModal?
                <div className='unnecessary-modal'>
                    <button onClick={()=>dispatch(removeProduct({el}))}>Confirm</button>
                    <button onClick={()=>setShowModal(!showModal)}>Cancel</button>
                </div>
                :
                <button className='delete-button' onClick={()=>setShowModal(!showModal)}>DELETE</button>}
        </div>
    );
};

export default ProductItem;
