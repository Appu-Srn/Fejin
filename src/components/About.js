import React from 'react';
import Fejin_1 from '../Images/Fejin_1.jpeg'
import Fejin_business from '../Images/Fejin_business.jpg'
import Fejin_fun from '../Images/Fejin_fun.jpg'
import { Link, NavLink } from 'react-router-dom';


const About = () => {
    return (
        <div className="container">

        <div className="row ">

<div className="col-12 col-sm-8">
  <div className="col">
  <img id="picblock" src = {Fejin_1} className="img-rounded " alt="Coding pic"></img>
  </div>
  </div>


  <div className="col-12 col-sm-4 ">
      <div className="row mt-4">
      <div className="col">
      <h2> <b> Hi, I'm Fejin.</b> </h2>
      <p>I recently completed the MBA (Finance & Logistics) program in IIKM Business School , Kerala
        and am currently working as a Business developer at Uralungal Labour Contract Co-operative society  in Kerala.
        </p>
        <p>Last summer, I interned for the team at Hedge Equities, Kozhikode as a Business developer wherein
        i worked on A Comparative Study On Systematic Investment Plan
        And Lump Sum Investments In Mutual Funds With Reference To Hedge Equities </p>

      </div>
    </div>
  </div>
 

</div>




<div className="row mt-5">




  <div className="col-12 col-sm-4 ">
      <div className="row mt-4">
      <div className="col">
      <h2> <b> Other Skills</b> </h2>
      <p>I finished my training on Tally and Peachtree recently which has given me 
        a good grasp on software skills that would be very useful in my future career
        </p>
        <p>I have good leadership and management skills and I love to take up roles that challenge me even more.  </p>
<p>
  I was the event organizer of the Management Fest IIKM 2K17 which gave me some good experiences
   in dealing with difficult situations
</p>
      </div>
    </div>
  </div>

  <div className="col-12 col-sm-8">
  <div className="col">
  <img id="picblock" src = {Fejin_business} className="img-rounded " alt="Coding pic"></img>
  </div>
  </div>
 

</div>



<div className="row mt-5">



<div className="col-12 col-sm-8">
  <div className="col">
  <img id="picblock" src = {Fejin_fun} className="img-rounded " alt="Coding pic"></img>
  </div>
  </div>


  <div className="col-12 col-sm-4 ">
      <div className="row mt-4">
      <div className="col">
      <h2> <b> For Fun. </b></h2>
      <p>I am a big fan of Football, Marvel, Harry Potter Universe, and puzzles,
         and am always down for getting good desserts or going on an adventure! 
          I also have an endless supply of lame jokes. 
Feel free to contact me at anytime
        </p>


      </div>
    </div>
  </div>

  
 

</div>

 
        </div>
    )
}
export default About;