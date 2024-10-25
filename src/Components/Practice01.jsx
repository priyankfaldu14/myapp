import React from 'react'
import css1 from '../Assets/Practicee01.module.css'
import img from '../Assets/img-academy-academics-6-12.webp'
import img2 from '../Assets/reference-img-worlds-of-adventure-park-4-1920x9999.webp'


function Practice01() {
  return (
    
    <div>Practice01
    <p className={css1.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur!</p>
    {/* <img src={img} width={'400px'} height={'300px'} alt="img1" /> */}
    <div className={css1.img1}><img src={img} width={'400px'} height={'300px'} style={{'borderRadius':'20px'}} alt="img1" /></div>

    <h1 className='css1.p' style={{color:'blue', textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic quis aspernatur libero corrupti tempora velit ipsa fuga laudantium minima!</h1>
    <div style={{'textAlign':'center'}}><button className={css1.btn}>Press Here</button></div>
    <div className={css1.back} ></div>
    <div style={{backgroundImage:`url(${img2})`, 'width':'400px', 'height':'400px' }}></div>
    </div>
  )
}

export default Practice01