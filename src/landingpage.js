import React, { Component ,Text} from 'react';
import {Layout,Header, Navigation,Drawer,Content,Grid,Cell,Card,CardTitle,CardActions,CardText,CardMenu,Button, IconButton} from 'react-mdl';
import './navBar.css';
import RCard from './Card';

class LandingPage extends Component {
    render() {
        return (

            <Layout >
                <Header transparent title="Skylar Barrera" className ='header-color'>
                    <Navigation>
                        <a href="./resume">Resume</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
                <div style = {{ width: '80%', margin: 'auto'}}>
                    <Grid >
                        <Cell col={12}>
                            <img className={"avatar-img"} src={"https://pbs.twimg.com/profile_images/639081420288208896/pANEqZ4p_400x400.png"}/>
                            <div className={"banner-text"}>
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>
                                    React Native | React | NodeJS
                                </p>
                            </div>
                        </Cell>


                        <Cell col={4}>
                           <RCard></RCard>



                        </Cell>
                    </Grid>

                </div>
                <Content />
            </Layout>

        );
    }
}

export default LandingPage;
