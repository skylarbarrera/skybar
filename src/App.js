import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Content>
                    <div className="page-content" />
                    <Main>

                    </Main>
                </Content>
            </Layout>
        </div>

    );
  }
}

export default App;
