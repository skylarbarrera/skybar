import React, { useState } from "react";




export const LightSwitch99 = (props) => {
    const [day, setDay] = useState(false);
    return (
        <div onClick = {this.setDay()} style = {{height: 40, width: 200, backgroundColor: '#833F22'}}>
        <text>Change Day</text>

        <div className="PomodoroBackground" >
                   {/* CSSTransitionGroup applies fade to mounting and unmounting elements. */}
                   <CSSTransitionGroup
                     transitionName="gradientTransition"
                     transitionEnterTimeout={1000}
                     transitionLeaveTimeout={500}
                   >
                     {this.day == true ? (
                       <div className="RestBackground" key="RestBackground" />
                     ) : (
                       ""
                     )}
                   </CSSTransitionGroup>
                
                </div>
        </div>

    );

};