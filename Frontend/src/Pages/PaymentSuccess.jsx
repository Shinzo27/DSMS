import React, { useEffect } from 'react'
import PaymentSuccessImage from '../assets/PaymentSuccessful.jpg'
import confetti from "canvas-confetti";
import BoxReveal from "@/components/magicui/box-reveal";
import Particles from "@/components/magicui/particles";

const PaymentSuccess = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const fulldate = (day + 2) + "-" + month + "-" + year

  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  useEffect(() => {
    handleConfetti()
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center pt-16'>
        <div className='w-1/3 '>
          <Particles className="absolute inset-0" quantity={400} ease={100} color={'000000'} refresh/> 
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <img src={PaymentSuccessImage} alt=""/>
          </BoxReveal>
        </div>
        <div className='flex flex-col justify-center items-center font-Dosis font-semibold pt-5 text-3xl'>
        <BoxReveal boxColor={"#5046e6"} duration={0.6}>
          <h1 className='text-4xl'>Your order is placed!</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.6}>
          <h1 className='text-xl'>Happy to serve you! See you soon!</h1>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.6}>
          <h2 className='pt-5'>Your order will be recieved on { fulldate }</h2>
        </BoxReveal>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess