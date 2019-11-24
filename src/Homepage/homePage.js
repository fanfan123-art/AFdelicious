import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import { Layout, Menu, Icon, Switch} from 'antd';
import Overview from './Overview/overview';
import AddRecipes from './AddRecipes/addRecipes';
import ManageRepcies from './ManageRecipes/manageRecipes';
import FunctionSetting01 from './FunctionSetting01/functionSetting01';
import AddMessage from './AddMessage/addMessage';
import ManageMessage from './ManageMessage/manageMessage';
import ManageMessageItems from './ManageMessageItems/manageMessageItems';
import FunctionSetting02 from './FunctionSetting02/functionSetting02';
import WebsiteData from './WebsiteData/websiteData';
const { Footer, Sider } = Layout;
const { SubMenu } = Menu;


var HomePageCss = require('../Homepage/homePage.css')
export default class HomePage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <div>
                <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className={HomePageCss.homepage}>
                            <img src={require('../images/logo03.png')}></img>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                              <Link to="/overview"><Icon type="stock" />
                                <span>网站概况</span></Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="read" />
                                        <span>食谱</span>
                                    </span>} >
                                <Menu.Item key="2"><Link to="/addRecipes">增添食谱</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/manageRecipes">食谱管理</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/functionSetting01">功能设置</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="edit" />
                                        <span>留言</span>
                                    </span>}>
                                <Menu.Item key="5"><Link to="/addMessage">增添留言</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/manageMessage">管理留言</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/manageMessageItems">管理留言项</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/functionSetting02">功能设置</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="delete" />
                                        <span>回收站</span>
                                    </span> }>
                                <Menu.Item key="9"><Link to="/websiteData">网站数据</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Route path="/HomePage" exact component={Overview}></Route>
                        <Route path="/Overview" component={Overview}></Route>
                        <Route path="/addRecipes" component={AddRecipes}></Route>
                        <Route path="/manageRecipes" component={ManageRepcies}></Route>
                        <Route path="/functionSetting01" component={FunctionSetting01}></Route>
                        <Route path="/addMessage" component={AddMessage}></Route>
                        <Route path="/manageMessage" component={ManageMessage}></Route>
                        <Route path="/manageMessageItems" component={ManageMessageItems}></Route>
                        <Route path="/functionSetting02" component={FunctionSetting02}></Route>
                        <Route path="/websiteData" component={WebsiteData}></Route>
                        <Footer style={{ textAlign: 'center' }}>Delicious Spectrum Net ©2019 Created by Three Nuts</Footer>
                    </Layout>
                </Layout>
                </BrowserRouter>
            </div>
        )
    }
}
