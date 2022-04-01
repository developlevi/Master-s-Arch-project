import React from 'react';
import "./Fifthmain.css";
import cont1 from "../../../img/content1.svg";
import cont2 from "../../../img/content2.png";
import cont3 from "../../../img/content3.png";




function FifthMain() {
  return (
    <div className="fifthmain">
        <div className="container">
            <div className="contents-prev">
                <h2 className="contents-title">Contents Preview</h2>
            </div>
                <div className="contents-vid">
                    <img src = {cont1} />
                    <img src = {cont2} />
                    <img src = {cont3} />
                </div>
        </div>
    </div>
  )
}

export default FifthMain