import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])

const addProductTocart = (product) =>{
console.log('agregar producto', product)
}

const data = {
    setCartProducts,
    addProductTocart
}

return (
<CartContext.Provider value={data}>
    {children}
</CartContext.Provider>

)
}
export {CartProvider}
export default CartContext