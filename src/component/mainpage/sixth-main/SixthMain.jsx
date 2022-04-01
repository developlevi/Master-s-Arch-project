import Signup from '../../ui/Signup'
import React from 'react'
import "./Sixthmain.css"

function SixthMain() {
  return (
    <div className="sixthmain">
        <div className="container">
            <div className="applynow">
                <div className="title">
                    <h2>Start growing your business today</h2>
                    <p>Consistent quality courses and experinence across all</p>
                </div>
                <div className="buttons">
                    <Signup />
                    <Signup />

                </div>
            </div>
        </div>
    </div>
  )
}

export default SixthMain