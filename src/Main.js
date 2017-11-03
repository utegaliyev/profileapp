import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Layout, Textfield, HeaderRow, Navigation, Header, Drawer, Content} from 'react-mdl';
import TopMenu from './components/TopMenu';

class Main extends Component{

    render (){
        const {routes} = this.props;
        return (
            <div className="demo-big-content">
                <Layout fixedDrawer>
                    <Header >
                        <HeaderRow title="Testst">
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
                    <Drawer title="Title">
                        <Navigation>
                            <a href="#">Link1</a>
                            <a href="#">Link2</a>
                            <a href="#">Link3</a>
                            <a href="#">Link4</a>
                        </Navigation>
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

export default Main;