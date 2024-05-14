import React from 'react'

const Aboutus = () => {
  return (
    <>
        <section className="about" id="about">
            <div className="image">
            <img src=".\about-img.png" alt=""/>
            </div>

            <div className="content">
            <h3 className="title">welcome to our store</h3>
            <p>We are famous seller in adajan area! Specially known for our quality dryfruit, And we are selling Bharat
                Masala which is famous all around surat and All types of Namkeens and Chocolates.We have Imported Chocolates
                and Gift Hampers too!</p>
            <div className="icons-container">
                <div className="icons">
                    <img src=".\about-icon-1.png" alt=""/>
                    <h3>quality Dryfruit</h3>
                </div>
                <div className="icons">
                    <img src=".\about-icon-2.png" alt=""/>
                    <h3>Spices</h3>
                </div>
                <div className="icons">
                    <img src=".\about-icon-3.png" alt=""/>
                    <h3>Namkeens</h3>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Aboutus
