import React from 'react';
import { Link } from 'react-router-dom';
import zetalogo from '../images/zeta-logo.jpg';

function Navbar(){
    

    return(
        <nav className='navbar navbar-expand-lg px-4' style={{backgroundColor:'#a8a1ad'}}>
            <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            <img src={zetalogo} alt="Zeta Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', marginRight: '10px' }} />
            Zeta Jewellery
            </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav'  aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'> 
                <ul className='navbar-nav ms-auto'>
                    <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/products">Products</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;