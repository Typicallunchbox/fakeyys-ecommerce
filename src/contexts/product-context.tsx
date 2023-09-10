import React, { createContext, useState, useContext } from "react";

type ProductContextProviderProps = {
    children: React.ReactNode
}

type ProductContext = {
    viewProduct: boolean,  
    setViewProduct: any,
    cartItems: Array<object>,
    setCartItems: any,
}

export const ProductContext = createContext<ProductContext | null>(null);



export function ProductContextProvider({ children } : ProductContextProviderProps){
    const [viewProduct, setViewProduct] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    return (
        <ProductContext.Provider value={{viewProduct, setViewProduct, cartItems, setCartItems}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext(){
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useProductContext must be used within a ProductContextProvider");
    }
    return context;
}