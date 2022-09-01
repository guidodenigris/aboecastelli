import React from 'react'
import logo from '../../assets/logoaboe.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

const NavBar = () => {
    return (
        <header style= {styles.container}>
             <img style= {styles.img} src={logo} alt= 'logo' />
             <h1 style= {styles.titulo}>A bit of everything</h1>
             <nav>
                <a style= {styles.navegacion} href="">Impresión 3D</a>
                <a style= {styles.navegacion} href="">Decoración</a>
                <a style= {styles.navegacion} href="">Contacto</a>
            </nav>   
            <ShoppingCartIcon style= {styles.carro}  sx={{ fontSize: 50 }}/>           
        </header>
    )
}

const styles = {
    container:{
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 35%, rgba(55,55,55,1) 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img:{
        width: '12%'
    },
    navegacion:{
        padding: 10,
        color: 'whitesmoke',
        textDecoration: 'none',
        fontSize: '20px'
        
    },
    carro:{
        paddingRight: 120,
        color: 'whitesmoke'

    },
    titulo:{
        color: 'whitesmoke'
    }
}


export default NavBar