import React, { createContext, useState, useContext } from "react";
import { iCartItem } from "../typings";

type ProductContextProviderProps = {
    children: React.ReactNode
}

type ProductContext = {
    viewProduct: boolean,  
    setViewProduct: any,
    cartItems: Array<object>,
    setItems: any,
    removeItems: any,
}

type CartProps = {
    item: iCartItem,
    countDirection: '+' | '-'
}

export const ProductContext = createContext<ProductContext | null>(null);



export function ProductContextProvider({ children } : ProductContextProviderProps){
    const [viewProduct, setViewProduct] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const setItems = ({item, countDirection}: CartProps) => {
        countDirection = countDirection || '+'
        let tempArray:Array<iCartItem> | [] = [];
        tempArray = [...cartItems];

        const isObjectPresent = cartItems.find((o:iCartItem) => o.id === item.id);
        console.log(isObjectPresent)
        if (!isObjectPresent) {  
            tempArray.push({...item, count: 1});
            setCartItems(tempArray)

        }else{
            for (let index = 0; index < tempArray.length; index++) {
                const product = tempArray[index];
                if(countDirection === '+'){
                    console.log('HI!')
                    if(product.id === item.id){
                        product.count = product.count + 1;
                        setCartItems(tempArray);
                        return;
                    }
                }else{
                    if(product.id === item.id){
                        product.count = product.count - 1;
                        setCartItems(tempArray);
                        return;
                    }
                }
                
            }
        }

        
    }

    const removeItems = (itemId:any) => {
        console.log('remove id:', itemId)
        let newArray = [...cartItems.filter((product) => product.id !== itemId)]
        console.log('newArray:', newArray)
        setCartItems(newArray)
    }

    return (
        <ProductContext.Provider value={{viewProduct, setViewProduct, cartItems, setItems, removeItems}}>
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