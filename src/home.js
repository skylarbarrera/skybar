import React, { Component ,Text} from 'react';

import RCard from './Card';
import contechPortfolio from './contechportfolio.gif'
import rocketPortfolio from './rocketportfolio.gif'
import surfPortfolio from './surfportfolio.gif'
import wcwmPortfolio from './wcwmportfolio.gif'
import LightSwitcher from "./LightSwitcher";
import Resume from './resume';
import NavBar from './navBar';
import './landingpage.css';
import {StyleSheet, css} from 'aphrodite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AboutMe from './aboutme';
import  ContactButton  from './contactButton';
import Projects from './projects';

var styles = StyleSheet.create({
    coverContainer:{
        width: '100%',
        height: '60%',
        backgroundColor: 'transparent',
        display: 'flex',
        overflow: 'no-content',
        position: 'relative',
        alignSelf: 'center',
        margin: 'auto',
        '@media (max-width: 600px)':{
            width: '90%',
            'padding-left': '0px',
            margin: 'auto',
            textAlign: 'center'


        }
    },

    coverTextContent:{
        alignItems: 'center',
        '-webkit-box-orient': 'vertical',
        '-webkit-box-direction': 'normal',
        '-ms-flex-direction': 'column',
        flexDirection:'column',
        margin: 'auto',
        padding: '120px 0px',
        overflow: 'auto',
        width: '50%',
        borderBottomWidth: '5px',
        borderColor: 'white',

        '@media (max-width: 600px)':{
            width: '100%',
            padding: '0px 0 px'


        }


    },


    profileImage:{
        top: '20px',
        left: '20px',
        height: '60px',
        width: '60px',
        position: 'absolute',
        borderRadius: '100px',
        'animation-delay': '0s',
        'animation-direction': 'normal',
        'animation-duration': '10s',
        'animation-fill-mode': 'none',
        'animation-iteration-count': 'infinite',
        'animation-name': 'change_color',
        'animation-play-state': 'running',
        'animation-timing-function': 'ease',
        '@media (max-width: 600px)':{



        }
},

coverTitle:{
        width: '100%',
    color: '#FFFFFF',
        fontWeight: '500',

},


coverText:{

    color: '#FFFFFF',
        fontWeight: '300',
},

skillsList:{

    margin: 'auto',
},
skillsIcon:{
    fontSize: '2em' ,
    color: 'white',
    paddingRight: '20px',





},
icon:{



},


projectGalleryContainer:{
        padding: '5% 0%',
        alignSelf: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        overflow: 'scroll',
        width: '80%',
        paddingBottom: '30px',
        //maxWidth: '1200px',
        zIndex: 2,


    '@media (max-width: 600px)':{
        width: '80%',
        flexDirection: 'column',

        margin: 'auto'

    }

},


projectHeader:{
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: '40px',
},

thirdSection:{
        width:'100%',
        height: '900px',
        backgroundColor: '#353782',
        content: 'none',

},
northern:{
        display: 'none',
    'animation-delay': '0s',
        'animation-direction': 'normal',
        'animation-duration': '10s',
        'animation-fill-mode': 'none',
        'animation-iteration-count': 'infinite',
        'animation-name': 'change_color',
        'animation-play-state': 'running',
        'animation-timing-function': 'ease',
        boxSizing: 'border-box',
        color: 'rgb(255, 255, 255)',
        height: '336px',
        lineHeight: '25.6px',
        marginBottom: '-82.5px',
        marginLeft: '100px',
        marginRight: '100px',
        marginTop: '100px',
        position: 'center',
        right: '-163.188px',
        top: '0px',
        width: '652px',
        zIndex: '-1',
        backgroundColor: 'transparent',
    '@media (max-width: 600px)':{
        display: 'none',

    }
},
    projectsContainer: {
        flexDirection: 'row',
        width: '100%',
            '@media (max-width: 600px)':
        {
            flexDirection: 'column',


        }
    },
projectTextContainer:{
        position: 'relative',
        width: '100%',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        '@media (max-width: 600px)':{
         flexDirection: 'column',


    }

},

sectionBreak:{
        position: 'relative',
        backgroundColor: 'white',
        height: '1px',
        margin: 'auto',
        width: '70%',
},

noContent:{
    '@media (max-width: 600px)':{
        display:'none'


    }

}


});

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%' , paddingTop: '100px'}}>
                
                
               
                {/*<img className={css(styles.profileImage)} src = {'https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png'}/> */}
                <div className={css(styles.coverContainer)}>
                
           <Grid 
           container
           spacing = {4}
           direction = "column"
           alignItems = "center"
           justify = "center"
           
           
           >
               <Grid item
               alignItems="center"
               spacing= {0}>
                   <Typography variant ="h1">
                   Skylar Barrera
                   </Typography>
                  <Typography>
                    Software Developer, Technology Consultant, & Creative Technologist    
                  </Typography> 
                  <i className="devicon-javascript-plain" style={{fontSize: '2em', color: 'white', paddingRight: '20px'}}></i>
                  <i className="devicon-nodejs-plain" style={{fontSize: '2em', color: 'white', paddingRight: '20px'}}></i>
                  <i className="devicon-python-plain" style={{fontSize: '2em', color: 'white', paddingRight: '20px'}}></i>
                  <i className="devicon-cplusplus-line" style={{fontSize: '2em', color: 'white', paddingRight: '20px'}}></i>
                  
                  <i className="devicon-c-line" style={{fontSize: '2em', color: 'white', paddingRight: '20px'}}></i>
                    <i className={"devicon-react-original"} style={{fontSize: '2em', color: 'white', paddingRight: '0px'}}></i>
            
                   

               </Grid>

               <Grid item
               direction = "column"
               alignItems="center"
               style={{width: '70%'}}
               >
                  <Typography variant ="h2">
                   Featured Projects
                   </Typography>
                <Grid
                container
                spacing={3}
                direction= 'row'
                justify = "center"
                >
                    <Grid item>
                    <RCard title='WCWM' url='https://wcwm.wm.edu' content='Designed & Developed for WCWM, William & Marys College Radio Station' gif={wcwmPortfolio}/>

                    </Grid>
                    <Grid item>
                    <RCard className={css(styles.noContent)} title='ROCKET MAG' url='http://wmrocketmagazine.com/' content='ROCKET Magazine is the premier fashion publication at The College of William and Mary.' gif={rocketPortfolio}/>

                    </Grid>
                    <Grid item>
                    <RCard className={css(styles.noContent)} title = 'CONTECH' content="Winner of William and Mary & Ferguson's Innovation Challenge" gif={contechPortfolio}/>

                    </Grid>
                    <Grid item>
                    <RCard className={css(styles.noContent)} title = 'Project Surf' content="Designed, developed, & presented MVP with profit growth potential of $50+ million dollars for Ferguson Ventures" gif={surfPortfolio}/>

                    </Grid>
                    <Grid item>
                    <RCard className={css(styles.noContent)} title='OnKourse'  content='A platform for college student to plan and share course schedules, information, & reviews'/>

                    </Grid>
                    


                </Grid>
               </Grid>

              


           </Grid> 
       
                    

            </div>

           

            

            

           



        </div>






        );
    }
}

export default Home;
