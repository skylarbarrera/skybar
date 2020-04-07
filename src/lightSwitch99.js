import React, { useState } from "react";
import { SwitchTransition, FadeTransition } from 'react-transition-group'
import Navbar from './navBar';
import NavRouter from "./main";


const LightSwitch = (props) => {
    const [day, setDay] = useState(true);
    return (
        

       <div>
                
                    <Navbar key = {day} day = {day}/>
                    
                    {day? <div onClick = {()=> setDay(!day)} style={{position: 'absolute', top: '20px',
    right: '20px', borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#EEA425', zIndex: 4}}/> : 
    <div onClick = {()=> setDay(!day)} style={{position: 'absolute', top: '20px',
    right: '20px', borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#C1AC9E', zIndex: 4}}/>}
               
                
                


                    
                    {console.log("day -" + day)}
                     {day ? <div  className="RestBackground" key="Day" /> :<div onClick = {()=> setDay(!day)} className="PomodoroBackground" key="Night" /> }
                    <NavRouter  day = {day}>
                        </NavRouter>
                
                
                </div>
        

    );

};

export default LightSwitch;