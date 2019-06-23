import React from 'react'
import Fejin_2 from '../Images/Fejin_2.jpg'
import Fejin_3 from '../Images/Fejin_3.jpg'

export default function Friends() {
    return (
        <div>
            <div className="row">
                <div className="col">
                <img id="picblock" src = {Fejin_2} className="img-rounded " alt="Coding pic"></img>
                </div>
                <div className="col">
                <img id="picblock" src = {Fejin_3} className="img-rounded " alt="Coding pic"></img>
                </div>
            </div>
        </div>
    )
}
