import React from 'react'

const Footer = () => {
  return (
      <section className="footer" id="footer">

            <div className="icons-container">

                <div className="icons">
                    <i className="fas fa-clock"></i>
                    <h3>opening hours</h3>
                    <p>09:00am to 08:00pm</p>
                </div>

                <div className="icons">
                    <i className="fas fa-phone"></i>
                    <h3>phone</h3>
                    <p>Kevin Patel - 9898219837</p>
                    <p>Meet Patel - 9998513182</p>
                </div>

                <div className="icons">
                    <i className="fas fa-envelope"></i>
                    <h3>email</h3>
                    <p>patelsdryfruitstudio@gmail.com</p>
                </div>

                <div className="icons">
                    <i className="fas fa-map"></i>
                    <h3>address</h3>
                    <p>4-5,Regent Residency,Opp. Pratham Ganesha Apt., Nr. Pratham Circle,Pal-Adajan,Surat - 395009</p>
                </div>

                </div>

                <div className="share">
                <a href="https://www.facebook.com/patelcashewnut" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="https://www.instagram.com/patels.cashew.nuts/" className="fab fa-instagram"></a>
                </div>

                <div className="qr">
                <br/>
                <br/>
                <h2>Scan to get all the information!</h2>
                <img src=".\qrcode.png" style={{width: 200}}/>
            </div>

            <div className="credit"> created by <span>Pratham Patel, Rohan Vaghasiya</span> | all rights reserved! </div>

        </section>
  )
}

export default Footer
