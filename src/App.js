import React from "react"
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer"


const App = () => {

    const saludo = "¡Bienvenidos a Aboe Castelli!"

    return (
        <>
            <NavBar />
            <ItemListContainer greeting={saludo}/>
        </>

    )
}


export default App