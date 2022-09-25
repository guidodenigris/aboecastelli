import React from 'react'
import logo from '../../assets/logoaboe.png'
import "./NavBar.css"
import CartWidget from '../CartWidget/CardWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header style= {styles.container}>
             <NavLink to='/'><img style= {styles.img} src={logo} alt= 'logo' /></NavLink>
             <h1 style= {styles.titulo}>A bit of everything</h1>
             <nav>
                <NavLink style= {styles.navegacion} to='/categoria/impresion3d'>Impresión 3D</NavLink>
                <NavLink style= {styles.navegacion} to='/categoria/decoracion'>Decoración</NavLink>
                <NavLink style= {styles.navegacion}>Contacto</NavLink>
            </nav>
            <NavLink to='cart'>
                <CartWidget />           
            </NavLink>   
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
        width: '100%'
    },
    navegacion:{
        padding: 10,
        color: 'whitesmoke',
        textDecoration: 'none',
        fontSize: '20px'
    },
    titulo:{
        color: 'whitesmoke'
    }
}



export default NavBar