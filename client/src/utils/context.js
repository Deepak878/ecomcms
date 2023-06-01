
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




export const Context = createContext();

const AppContext = ({children})=>{
  const [categories, setCategories]= useState()
  const [products, setProducts]= useState()
  return (
   <Context.Provider value={{categories, setCategories, products,setProducts}}>
    {children}
   </Context.Provider>
  )
}

export default AppContext
