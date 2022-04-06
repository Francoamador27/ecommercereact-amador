import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({children}) => {


const [stado1, setStado1] = useState(true)

const handleClick = () => {
    console.log('funcion desde contexto')
}

const data = {
    stado1,
    handleClick
}

return (
<cartContext.Provider value={data}>
    {children}
</cartContext.Provider>

)
}
export {CartProvider}
export default cartContext