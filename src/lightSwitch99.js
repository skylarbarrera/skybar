import React, { useState } from "react";
import { SwitchTransition, FadeTransition } from 'react-transition-group'



const LightSwitch = (props) => {
    const [day, setDay] = useState(true);
    return (
        

        <div  onClick = {()=> setDay(!day)} >
                   {/* CSSTransitionGroup applies fade to mounting and unmounting elements. */}
                   <div  onClick = {()=> setDay(!day)} style = {{height: 400, width: 200, backgroundColor: '#0000000', zIndex: '7'}}>
                   
                    </div>
                    
                    {console.log("day -" + day)}
                     {day ? <div onClick = {()=> setDay(!day)} className="RestBackground" key="Day" /> :<div onClick = {()=> setDay(!day)} className="PomodoroBackground" key="Night" /> }
                    
                
                
                </div>
        

    );

};

export default LightSwitch;