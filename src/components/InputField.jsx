import React, {useState} from 'react';
import {addProduct} from '../store/productSlice';
import './InputField.css'
import {useDispatch} from 'react-redux';

const InputField = ({showModal,setShowModal}) => {
    const [name,setName]= useState('')
    const [count,setCount]= useState('')
    const [sizeWidth,setWidthSize]= useState('')
    const [sizeHeight,setHeightSize]= useState('')
    const [weight,setWeight]= useState('')
    const dispatch =useDispatch()

    const product = {
        name,
        count,
        sizeWidth,
        sizeHeight,
        weight,
    }

    return (
        <div>
            <label className='inputs-wrapper'>
                <input placeholder='PRODUCT NAME' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input placeholder='COUNT' type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
                <input placeholder='SIZE WIDTH' type="number" value={sizeWidth} onChange={(e)=>setWidthSize(e.target.value)}/>
                <input placeholder='SIZE HEIGHT' type="number" value={sizeHeight} onChange={(e)=>setHeightSize(e.target.value)}/>
                <input placeholder='WEIGHT' type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </label>
            {!Object.values(product).includes('')
                &&
                <button className='button' onClick={()=>dispatch(addProduct({product}))}>Confirm</button>}
            <button className='button' onClick={()=>setShowModal(!showModal)}>Cancel</button>

        </div>
    );
};

export default InputField;
