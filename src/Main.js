import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {Layout, Textfield, HeaderRow, Navigation, Header, Drawer, Content} from 'react-mdl';
import TopMenu from './components/TopMenu';

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

const mapStateToProps = (state) => {
    return {pathname: state.router.location.pathname};
};

export default connect(mapStateToProps)(Main);