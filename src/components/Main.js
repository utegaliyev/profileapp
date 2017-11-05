import React from 'react';
import {Layout, Textfield, HeaderRow, Header, Drawer, Content} from 'react-mdl';
import {Route} from 'react-router-dom';
import './Main.css';

import UserCorner from './UserCorner';
import TopMenu from './TopMenu';
import ProjectsComponent from './ProjectsComponent';
import MyIssuesComponent from './MyIssuesComponent';
import TimeTrackingComponent from './TimeTrackingComponent';
import MessagesComponent from './MessagesComponent';

const Main = ({routes, pathname, projects, onProjectClick, issues, onIssueClick,
                  onStartClick, onLastTrackedClick,onClickDirect, onClickGroups, onClickChannels,
                  notificationCount, onClickAvatar, onClickNotifications, onClickSettings, onClickExit

              }) => {

    const filteredRoutes = routes.filter(item => item.path===pathname);
    let headerTitle = '';
    if(filteredRoutes.length===1){
        headerTitle = filteredRoutes[0].title;
    }
    return (
        <div className="bigContent">
            <Layout fixedDrawer>
                <Header >
                    <HeaderRow className="topHeaderRow" title={headerTitle}>
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search3"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <TopMenu pathname={pathname}/>
                    </HeaderRow>
                </Header>
                <Drawer className="leftNav">
                    <UserCorner notificationCount={notificationCount} onClickAvatar={onClickAvatar}
                                onClickNotifications={onClickNotifications}
                                onClickSettings={onClickSettings}
                                onClickExit={onClickExit} />
                    <ProjectsComponent projects={projects} onProjectClick={onProjectClick}/>
                    <hr/>
                    <MyIssuesComponent issues={issues} onIssueClick={onIssueClick}/>
                    <hr/>
                    <TimeTrackingComponent onStartClick={onStartClick}
                                           onLastTrackedClick={onLastTrackedClick}/>
                    <hr/>
                    <MessagesComponent onClickDirect={onClickDirect}
                                       onClickGroups={onClickGroups}
                                       onClickChannels={onClickChannels}/>
                </Drawer>
                <Content className="pageContent">
                    <div >
                        {
                            routes.map((item, index) => <Route key={'route'+index} exact={item.exact}
                                                               path={item.path} component={item.component}/>)
                        }
                    </div>

                </Content>

            </Layout>
        </div>
    );
};
export default Main;