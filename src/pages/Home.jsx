import React from 'react';
import zetalogo from '../images/zeta-logo.jpg';

function Home(){
    return (
        <div className='container text-center my-3'>
            <img src={zetalogo} alt='Zeta Logo' className='img-fluid mb-3' style={{maxWidth:'200px'}} />
            <h1>Welcome to Zeta Jewellery</h1>
            <p className='lead'>Discover handmade jewellery crafted with love and elegance</p>
            <p className='text-muted'>☀️ Live by the sun - Love by the moon <br></br>🌴 Handcrafted jewellery in Jamaica.<br></br>Islandwide deliveries..</p>
            <a href='/about' className='btn mt-3' style={{backgroundColor:'#a8a1ad', color:'#ffffff'}}><b>About</b></a>

        </div>        

    );
}

export default Home;