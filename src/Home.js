import React, {useState} from 'react';
import './Home.css';
import MainHeader from './MainHeader';
import Electrician from './resources/electrician.png';
import Mechanic from './resources/Mechanic.png';
import carpentry from './resources/carpentry.png';
import Painting from './resources/Painting.png';
import Plumbing from './resources/Plumbing (1).png';
import Farmer from './resources/Farmer.png';
import Truck from './resources/Truck (1).png';
import Construction from './resources/Construction.png';
import Welder from './resources/Welder.png';
import Demolation from './resources/Demolation.png';
import Landscaper from './resources/Landscaper.png';
import Forklift from './resources/forklift.png';
import Brick from './resources/Brick.png';
import Assembly from './resources/assmbly.png';

const Home = () => {
    
  return (
    <div className="App">
     <MainHeader/>
      <div className='Categories'>
      <button className='Categories-btn'>Categories</button>
      </div>
      <div className='Text'>
         <div className='Center-text'>Some of our Recent Searches</div>
      </div>
      <div>
        <div>
        <div class="headz">
            <div class="gri">
                <div class="con1">
                    <img src={Electrician} alt="" height="150px" width="150px"/>
                    <span>Electrician</span>
                </div>
                <div class="con2">
                    <img src={Mechanic} alt="" height="150px" width="150px"/>
                    <span>Mechanic</span>
                </div>
                <div class="con3">
                    <img src={carpentry} alt="" height="150px" width="150px"/>
                    <span>Carpentry</span>
                </div>
                <div class="con4">
                    <img src={Painting} alt="" height="150px" width="150px"/>
                    <span>Wall Painting</span>

                </div>
                <div class="con5"> <img src={Plumbing} alt="" height="150px" width="150px"/>
                    <span>Plumber</span>
                </div>
                <div class="con6"><img src={Farmer} alt="" height="150px" width="150px"/>
                    <span>Farmer Labour</span>
                </div>
                <div class="con7"> <img src={Truck} alt="" height="150px" width="150px"/>
                    <span>Truck Driver</span>
                </div>
                <div class="con8">
                    <img src={Construction} alt="" height="150px" width="150px"/>
                    <span>Construction Worker</span>
                </div>
                <div class="con9"><img src='' alt="" height="150px" width="150px"/>
                <span>Roofer</span>
                </div>
                <div class="con10"><img src={Welder} alt="" height="150px" width="150px"/>
                <span>Welder</span></div>
                <div class="con11"> <img src={Demolation} alt="" height="150px" width="150px"/>
                <span>Demolation</span></div>
                <div class="con12">
                    <img src='' alt="" height="150px" width="150px"/>
                    <span>Gardner</span>
                </div>
                <div class="con13"><img src={Landscaper} alt="" height="150px" width="150px"/><span>Landscaper</span></div>
                <div class="con14"><img src={Forklift} alt="" height="150px" width="150px"/> <span>Forklift</span></div>
                <div class="con15"> <img src={Brick} alt="" height="150px" width="150px"/><span>Brick Layer</span></div>
                <div class="con16"> <img src={Assembly} alt="" height="150px" width="150px"/>
                    <span>Assembly Line</span>
                </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;