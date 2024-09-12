import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
export const NavBar = () => {
    
    useEffect(() => {
        // Espera a que el DOM esté completamente cargado
        
            const nav = document.querySelector('#nav');
            const abrir = document.querySelector('#abrir');
            const cerrar = document.querySelector('#cerrar');

            abrir.addEventListener('click', () => {
                nav.classList.add('visible');
            });

            cerrar.addEventListener('click', () => {
                nav.classList.remove('visible');
            });
    }, []);
    const [dropdownOpen, setDropdownOpen] = useState({
        guitarras: false,
        bajos: false,
        baterias: false
    });
    const toggleDropdown = (menu) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <header className='header'>
            <div className='header-container '>
                <button id="abrir" className="abrir-menu"><BsList /></button>
                <nav className='Navbar' id="nav" >
                    <div className="Navbar-list-container">
                        <button className="cerrar-menu" id="cerrar"><BsX className='boton-cerrar'/></button>
                            <ul className='Navbar-list'>
                                <li className="Navbar-li" >
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="Navbar-link">Guitarras</span>
                                        <RiArrowDropDownLine className="dropdown dropdown-icon" onClick={() => toggleDropdown('guitarras')}/>
                                    </div>
                                    <div className={`dropdown-content ${dropdownOpen.guitarras ? 'show' : ''}`}>
                                        <Link to="">Acústicas</Link>
                                        <Link to="">Eléctricas</Link>
                                        <Link to="">Clásicas</Link>
                                    </div>
                                </li>

                                <li className="Navbar-li">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="Navbar-link">Bajos</span>
                                        <RiArrowDropDownLine className="dropdown dropdown-icon" onClick={() => toggleDropdown('bajos')}/>
                                    </div>
                                    <div className={`dropdown-content ${dropdownOpen.bajos ? 'show' : ''}`}>
                                        <Link to="">De 4 cuerdas</Link>
                                        <Link to="">De 5 cuerdas</Link>
                                        <Link to="">Fretless</Link>
                                    </div>
                                </li>

                                <li className="Navbar-li">
                                <div className="d-flex justify-content-between align-items-center">
                                        <span className="Navbar-link">Baterias</span>
                                        <RiArrowDropDownLine className="dropdown dropdown-icon" onClick={() => toggleDropdown('baterias')}/>
                                    </div>
                                    <div className={`dropdown-content ${dropdownOpen.baterias ? 'show' : ''}`}>
                                        <Link to="">Acústicas</Link>
                                        <Link to="">Electrónicas</Link>
                                        <Link to="">Percusión</Link>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </nav>
                <Link to='/' className='header-img-container'><img src='./imgs/guitarro.png' className="header-img" alt='logo ivrea'/></Link>
            </div>
            
        </header>
    )
}