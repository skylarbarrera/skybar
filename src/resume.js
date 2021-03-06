import React, { Component ,Text} from 'react';
import './resume.css';
import NavBar from './navBar';
import {StyleSheet, css} from 'aphrodite';


const Inconsolata = {
    fontFamily: "Inconsolata",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap'",

};


const Source = {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap'",

};

var styles = StyleSheet.create( {

    navbar:{
        marginTop: '10px',
        marginRight: '10px',

        backgroundColor: "#181818",
        width: '60px',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        zIndex: 3,
        'border-top-left-radius': '30px',
        'border-top-right-radius': '30px',
        '@media (max-width: 600px)':{
            width: '95%',
            height: '60px',
            'border-top-right-radius': '30px',
            'border-bottom-left-radius': '30px',
            'border-bottom-right-radius': '30px',

        }
    },
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
    back:{
        marginTop: '5%',
        marginLeft: '10%',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center'


    },
    backSec:{

        width: '100%',
        height: '300px',
        backgroundColor: '#B29',
        alignItems: 'center'


    },
  
    navbarnav: {
        display: 'flex',
        textAlign: 'center',
        position: 'absolute',
        flexDirection: 'column',
        top:'40%',
        width: '100%',
        '@media (max-width: 600px)':{
            flexDirection: 'row',
            paddingLeft: '70px',
            top: '5px',
            width: '80%',

        }
    },

    navbarnavitem:{
        fontSize: '22px',
        color: '#FFFFFF',
        lineHeight: '51px',
        height: '51px',
        position: 'relative',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        textAlign: 'center',
        margin: 'auto'

    },





    navicon:{

    },

    leftTab:{width: '66%'},
    rightTab:{width: '33%'},
    tabBox: {
        width: '1000px',
        display: 'flex',
        flexDirection: 'row',
    },
    contact:{ display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Inconsolata',
        fontSize: '10',
        color: '#FFFFFF'},

     top:{

     fontSize:'14',
         color: '#2A85F4'},
    name:{

        fontSize:'3em',
        color: '#2A85F4'},
    bio:{fontFamily: 'Inconsolata',
    color: '#FFFFFF',
        fontSize: '10'
    },

     entry:{
        color: '#FFFFFF',
         fontSize: '12',

     },

     date:{fontFamily: 'Inconsolata',
        color: '#FFFFFF',
         fontSize: '10'
},
     listItems:{
         fontSize: '10',
         color: '#FFFFFF'
     },



});


class Resume extends Component {
    render() {
        return (
            <div className={css(styles.coverContainer)}>
            
           
            <div className={css(styles.back)}>
                
                <div>
                    <h1 className={css(styles.name)}> Skylar Barrera</h1>
                    <h4  className={css(styles.bio)}> Computer Science Student focused on Software Development</h4>
                    <div>
                   <lu className={css(styles.contact)} >
                       <ul>
                           skylar.barrera@gmail.com
                       </ul>
                       <ul>
                        703-309-3707
                       </ul>
                       <ul>
                        skylarbarrera.com
                       </ul>
                       <ul>
                        <a>github.com/skylarbarrera</a>
                       </ul>
                   </lu>
                    </div>



                </div>
                <div className={css(styles.tabBox)}>
                <div className={css(styles.leftTab)}>

                <div>
                    <h2  className={css(styles.top)}>
                        RELEVENT EXPERIENCE
                    </h2>


                    <h3 style = {{color: 'white'}}> Service Design & Lead Developer @ Ferguson Ventures</h3>
                    <text  className={css(styles.date)} > June – August 2017 // Newport News, VA</text>
                    <lu className={css(styles.listItems)}>
                        <ul >
                            >	Developed a solution to help service contractors maximize billable work hours

                        </ul>
                        <ul>
                            >	Conducted industry research and stakeholder interviews, in order to identify customer journey pain points

                        </ul>
                        <ul>
                            >	Designed, developed, & presented MVP with profit growth potential of $50+ million dollars


                        </ul>
                    </lu>

                    <h3 style = {{color: 'white'}}>Web Master @ MacPaint</h3>
                    <text  className={css(styles.date)} > March – Nov 2017 // Newport News, VA</text>
                    <lu className={css(styles.listItems)}>
                        <ul >
                            >	Built and maintained company website, posting daily to keep customers updated and informed

                        </ul>
                        <ul>
                            >	Oversaw all aspects of projects, getting leads, writing up proposals with estimates, and sending invoices at completion

                        </ul>
                        <ul>
                            >	Reorganized the whole office, leading to better document management and quicker customer turnaround

                        </ul>
                    </lu>



                    <h3 style = {{color: 'white'}}>Web Designer & Developer @ WCWM Radio</h3>
                    <text  className={css(styles.date)}> March – Nov 2017 // Williamsburg, VA</text>
                    <lu className={css(styles.listItems)}>
                        <ul>
                            >	Developed and maintained code website primarily using WordPress, HTML, CSS, JavaScript
                        </ul>
                        <ul>
                            >	Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness
                        </ul>

                    </lu>


                    <h3 style = {{color: 'white'}}>Web Designer & Developer @ Rocket Mag</h3>
                    <text  className={css(styles.date)}> March – Nov 2017 // Williamsburg, VA</text>
                    <lu className={css(styles.listItems)}>
                        <ul>
                            >	Designed and developed website according to client’s specifications
                        </ul>
                        <ul>
                            >	Interfaced with clients on a weekly basis, ensuring consistent content and feature updates
                        </ul>

                    </lu>

                    <h3 style = {{color: 'white'}}>IT Specialist @ W&M IT Department</h3>
                    <text  className={css(styles.date)}> July 2016 – Dev 2018 // Williamsburg, VA</text>
                    <lu className={css(styles.listItems)}>
                        <ul>
                            >	Manage campus-wide labs ensuring ________                        </ul>
                        <ul>
                            >	Performed on-site and remote technical support for faculty, staff, & students.
                        </ul>
                        <ul>
                            >	Work with CMS system
                        </ul>

                    </lu>


                </div>

                </div>
                <div className={css(styles.rightTab)}>
                    <div>
                    <h2 className={css(styles.top)}>SKILLS</h2>
                    <h3 style = {{color: 'white'}}>Programming Languages</h3>
                    <text style = {{color: 'white'}}>Python, C, C++, JavaScript, Typescript, React Native, React, HTML, CSS/Sass, Node.js, PHP</text>

                    <h3 style = {{color: 'white'}}>Dev Tools & Environments </h3>
                    <text style = {{color: 'white'}}>WordPress, Git, GitFlow,
                        JetBrains Development Tools, Google Analytics, Adwords, Agile, Photoshop, Microsoft Office
                    </text>
                    </div>
                <div>
                    <h2 className={css(styles.top)}>EDUCATION</h2>
                    <h3 style = {{color: 'white'}}>William & Mary</h3>
                    <text  className={css(styles.date)}>2015 – 2019 // Williamsburg, VA</text>
                    <text style = {{color: 'white'}}>BS in Computer Science
                        Sharpe Community Scholar
                    </text>
                </div>
                    <div>
                        <h2 className={css(styles.top)} >PROJECTS</h2>
                        <h3 style = {{color: 'white'}}>Contech Locker</h3>
                        <text style = {{color: 'white'}}>Python, C, C++, JavaScript, Typescript, React Native, React, HTML, CSS/Sass, Node.js, PHP</text>

                        <h3 style = {{color: 'white'}}>React Native Playground </h3>
                        <text style = {{color: 'white'}}>WordPress, Git, GitFlow,
                            JetBrains Development Tools, Google Analytics, Adwords, Agile, Photoshop, Microsoft Office
                        </text>
                    </div>


                </div>
                </div>
                </div>
                </div>




        );
    }
}

export default Resume;
