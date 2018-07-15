import React, { Component ,Text} from 'react';
import {Layout,Header, Navigation,Drawer,Content,Grid,Cell} from 'react-mdl';
import './navBar.css';

class navBar extends Component {
    render() {
        return (

    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
    <Header transparent title="Title" style={{color: 'white'}}>
    <Navigation>
        <a href="#">Link</a>
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
            <Grid className="landing-grid">
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
            </Grid>

        </div>
    <Content />
        </Layout>

        );
    }
}

export default navBar;
