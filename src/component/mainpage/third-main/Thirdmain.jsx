import React from 'react';
import "./Thirdmain.css";
import first from "../../../img/first.png";
import second from "../../../img/second.png";
import third from "../../../img/third.png";
import fourth from "../../../img/fourth.svg"
import arrow from "../../../img/arrow.png"


function Thirdmain() {
  return (
    <div className='Thirdmain'>
        <div className="container">
            <div className="titleContainer">
                <h1 className='grow'>We help you grow</h1>
            </div>
            <div className="contents">
                <div className="first">
                    <img src={first}></img>
                    <div className="words">
                        <h2 className='right'>Grow your practice bigger</h2>
                        <p className='right'>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams.
                        Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <a className = "start" href="/">Get started <img src={arrow} /></a>
                    </div>
                </div>
                <div className="first">
                    <div className="words">
                        <h2 className='right'>Grow your practice bigger</h2>
                        <p className='right'>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams.
                        Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <a className = "start" href="/">Get started <img src={arrow} /></a>

                    </div>
                    <img src={second}></img>
                </div>
                <div className="first">
                    <img src={third}></img>
                    <div className="words">
                        <h2 className='right'>Grow your practice bigger</h2>
                        <p className='right'>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams.
                        Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
                        <a className = "start" href="/">Get started   <img src={arrow} /></a>

                    </div>
                </div>
            </div>
                <div className="last">
                    <img src={fourth}></img>
                    <div className="words">
                        <h2 className='last-title'>Consistantly Updated Contents</h2>
                        <p className='last-explained'>Enjoy unlimited courses and contents ajksdhjkasdhkjh kjhd 
                                            aksjdfhas dfasdgasdg adsg asdg asdg asd 
                                            asdgasddgasdgsas s dsadg asdgasdg a
                                            gasdgasdgasdgasdg</p>
                                            <a className = "start" href="/">Get started <img src={arrow} /></a>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Thirdmain