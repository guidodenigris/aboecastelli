import React from "react"
import { ItemCount } from "./Components/ItemCount/index.js"
import NavBar from "./Components/NavBar/NavBar.js"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"


const App = () => {

    const saludo = "¡Bienvenidos a Aboe Castelli!"


    return (
        <>
            <NavBar />
            <ItemListContainer greeting={saludo}/>
            <ItemDetailContainer />
        </>

    )
}


export default App