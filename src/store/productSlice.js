import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[]
    },
    reducers:{
        addProduct(state,action){
            state.products.push({
                id: new Date().toISOString(),
                name:action.payload.product.name,
                count:action.payload.product.count,
                size:{
                    width:action.payload.product.sizeWidth,
                    height:action.payload.product.sizeHeight
                },
                weight:action.payload.product.weight
            })
        },
        removeProduct(state,action){
            const itemID = action.payload.el.id
            state.products=state.products.filter(item=>item.id!==itemID)
        },
        // editProduct(state,action){
        //     state.products[action.payload.index]={
        //
        //     }
        // }
    }

})

export const {addProduct,removeProduct} = productSlice.actions
export default productSlice.reducer