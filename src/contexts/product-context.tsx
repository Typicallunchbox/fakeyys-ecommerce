import React, { createContext, useState, useContext, useEffect } from "react";
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
    cartCount: number,
    clearCart: Function,
    totalPrice: number
}

type CartProps = {
    item: iCartItem,
    countDirection: '+' | '-'
}

export const ProductContext = createContext<ProductContext | null>(null);



export function ProductContextProvider({ children } : ProductContextProviderProps){
    const [viewProduct, setViewProduct] = useState(false);
    const [cartItems, setCartItems] = useState<Array<iCartItem>>([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const MIN_CART_LIMIT = 1;
    const MAX_CART_LIMIT = 9;

    const cartItemsCount = () => {
        let count = 0;
        if(cartItems.length > 0){
            for (let index = 0; index < cartItems.length; index++) {
                const item:iCartItem = cartItems[index];
                count += item.count || 0
            }
        }
        setCartCount(count);
    }

    const setCartTotal = () => {
        let price = 0;
        if(cartItems.length > 0){
            for (let index = 0; index < cartItems.length; index++) {
                const item:iCartItem = cartItems[index];
                
                price += item.price * item.count
            }
        }
        setTotalPrice(price);
    }

    useEffect(() => {
        cartItemsCount();
        setCartTotal();
    }, [cartItems])
    

    const setItems = ({item, countDirection}: CartProps) => {
        countDirection = countDirection || '+'
        let tempArray:Array<iCartItem> | [] = [];
        tempArray = [...cartItems];

        const isObjectPresent = cartItems.find((o:iCartItem) => o.id === item.id);
        if (!isObjectPresent) {  
            tempArray.push({...item, count: 1});
            setCartItems(tempArray);

        }else{
            for (let index = 0; index < tempArray.length; index++) {
                const product = tempArray[index];
                if(countDirection === '+'){

                    if(product.id === item.id){
                        if(product.count === MAX_CART_LIMIT) return;
                        product.count = product.count + 1;
                        setCartItems(tempArray);
                        return;
                    }
                }else{
                    if(product.id === item.id){
                        if(product.count === MIN_CART_LIMIT) return;
                        product.count = product.count - 1;
                        setCartItems(tempArray);
                        return;
                    }
                }
            }
        }
    }

    const removeItems = (itemId:any) => {
        let newArray = [...cartItems.filter((product: iCartItem) => product.id !== itemId)]
        setCartItems(newArray)
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <ProductContext.Provider value={{viewProduct, setViewProduct, cartItems, setItems, removeItems, cartCount, clearCart, totalPrice}}>
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