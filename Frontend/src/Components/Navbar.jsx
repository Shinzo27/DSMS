import React from 'react'

const Navbar = () => {
  return (
    <section className="header">

      <img src=".\logo.png" className="logo"/>

      <nav className="navbar">
         <a href="index.html">home</a>
         <a href="Product.html">shop</a>
         <a href="gallery.html">gallery</a>
         <a href="index.html#about">about</a>
         <a href="index.html#food">expertise</a>
         <a href="index.html#blogs">reviews</a>
         <a href="index.html#footer">Contact us</a>
         <a href="profile.html">Username</a>
         <a href="Signin.html">Login</a>
         <a href="cart.html">Cart</a>
         <a href="logout.html">Log out</a>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>

   </section>
  )
}

export default Navbar