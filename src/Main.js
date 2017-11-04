import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {Layout, Textfield, HeaderRow, Header, Drawer, Content, IconButton, Icon , Badge, Button} from 'react-mdl';
import TopMenu from './components/TopMenu';
import ProjectsComponent from './components/ProjectsComponent';
import MyIssuesComponent from './components/MyIssuesComponent';
import TimeTrackingComponent from './components/TimeTrackingComponent';
import MessagesComponent from './components/MessagesComponent';


import image from './images.jpg';
import './Main.css';

class Main extends Component{

    render (){
        const {routes, pathname} = this.props;
        const filteredRoutes = routes.filter(item => item.path===pathname);
        let headerTitle = '';
        if(filteredRoutes.length===1){
            headerTitle = filteredRoutes[0].title;
        }
        return (
            <div className="demo-big-content">
                <Layout fixedDrawer>
                    <Header >
                        <HeaderRow title={headerTitle}>
                            <Textfield
                                value=""
                                onChange={() => {}}
                                label="Search3"
                                expandable
                                expandableIcon="search"
                            />
                        </HeaderRow>
                        <HeaderRow>
                            <TopMenu/>
                        </HeaderRow>
                    </Header>
                    <Drawer className="leftNav">
                        <div className="leftNavTop">
                            <Button className="profileTopAvatar">
                                <img  src={image} alt="profile avatar" />
                            </Button>
                            <Button>
                                <Badge text="1" overlap>
                                    <Icon name="notifications" />
                                </Badge>
                            </Button>
                            <IconButton  name="settings"/>
                            <IconButton  name="exit_to_app"/>
                        </div>
                        <ProjectsComponent />
                        <hr/>
                        <MyIssuesComponent />
                        <hr/>
                        <TimeTrackingComponent/>
                        <hr/>
                        <MessagesComponent/>
                    </Drawer>
                    <Content>
                        <div className="page-content" >
                            {
                                routes.map((item, index) => <Route key={'route'+index} exact={item.exact}
                                                                   path={item.path} component={item.component}/>)
                            }
                        </div>

                    </Content>

                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {pathname: state.router.location.pathname};
};

export default connect(mapStateToProps)(Main);