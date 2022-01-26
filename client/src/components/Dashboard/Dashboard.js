import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from './Dashboard.module.scss'

function Dashboard() {

  return (
    <div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} emulateTouch={true} className={style.carousel}>
        <div>
          <img src="/img/1.jpg" />
        </div>
        <div>
          <img src="/img/2.jpg" />
        </div>
        <div>
          <img src="/img/3.jpg" />
        </div>
      </Carousel>
      <div className={style.wrapper__blocks}>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
        <div className={style.block}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quidem vitae vero harum.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;