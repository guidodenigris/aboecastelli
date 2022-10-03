import React from "react"
import { ItemCount } from "./Components/ItemCount/index.js"
import NavBar from "./Components/NavBar/NavBar.js"
import Cart from "./Components/Cart"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from "./Context/CartContext.js"
import CartProvider from "./Context/CartContext.js"

const App = () => {

    const saludo = "¡Bienvenidos a Aboe Castelli!"


    return (
        <>
            <BrowserRouter>

                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={saludo}/>}/>
                        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={saludo}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>

    )
}


export default App