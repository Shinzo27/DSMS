import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className="header">

        <img src=".\logo.png" className="logo"/>

        <nav className="navbar">
        <a href="#home">Home</a>
        <a href="Product.html">Shop</a>
        <a href="gallery.html">Gallery</a>
        <a href="#about">About</a>
        <a href="#food">Expertise</a>
        <a href="#blogs">Reviews</a>
        <a href="#footer">Contact us</a>
        <a href="Login.html">Login</a>
        <a href="cart.html">Cart</a>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

        </section>
    </>
  )
}

export default Navbar