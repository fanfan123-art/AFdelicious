import React from 'react';
import { Layout, Breadcrumb ,menu, Icon,Menu,Dropdown} from 'antd';

import {BrowserRouter,Route,Link} from 'react-router-dom';


const { Header, Content} = Layout;
var AddRecipesCss=require("../AddRecipes/addRecipes.css");
export default class AddRecipes extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 ,fontSize:20}} className={AddRecipesCss.Header} >增添食谱</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>1</Breadcrumb.Item>
                        <Breadcrumb.Item>2</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 660 }}>
                        <div className={AddRecipesCss.tip8}>
                            <label className={AddRecipesCss.tip8a} style={{width:110}}>食谱名称</label>
                            <div className={AddRecipesCss.tip8a1} style={{marginLeft:110}}>
                                <div className={AddRecipesCss.tip8b}>
                                    <input type="text" maxLengt="100" className={AddRecipesCss.tip8b1} style={{width:390}}></input>
                                 </div>
                            </div>

                        </div>

                        
                                <div className={AddRecipesCss.ul}>                  
                                
                                <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        全选
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        粘贴
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                       复制
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                       删除
                                        </a>
                                    </Menu.Item>
                                    </Menu>
                                } className={AddRecipesCss.tip10}>
                                    <a className="ant-dropdown-link">
                                    操作<Icon type="down" />
                                    </a>  
                                </Dropdown> 
                                <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                       微软雅黑
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                       行楷
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        黑体
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        GB_32仿宋
                                        </a>
                                    </Menu.Item>
                                    </Menu>
                                } className={AddRecipesCss.tip10}>
                                    <a className="ant-dropdown-link">
                                    字体 <Icon type="down" />
                                    </a>  
                                </Dropdown> 
                                <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        左顶格
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                       居中
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                         右顶格
                                        </a>
                                    </Menu.Item>
                                    </Menu>
                                } className={AddRecipesCss.tip10}>
                                    <a className="ant-dropdown-link">
                                    排版 <Icon type="down" />
                                    </a>  
                                </Dropdown> 
                                <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        图片
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        视频
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        文档
                                        </a>
                                    </Menu.Item>
                                    </Menu>
                                } className={AddRecipesCss.tip10}>
                                    <a className="ant-dropdown-link">
                                    插入<Icon type="down" />
                                    </a>  
                                </Dropdown> 
                                <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        2
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        4
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        8
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        18
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        24
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                        36
                                        </a>
                                    </Menu.Item>
                                    </Menu>
                                } className={AddRecipesCss.tip10}>
                                    <a className="ant-dropdown-link">
                                    字体大小<Icon type="down" />
                                    </a>  
                                </Dropdown> 
                                

                        </div>
                          
                        <div className={AddRecipesCss.tip9}>
                           
                                 <input type="text" className={AddRecipesCss.tip9b1} style={{width:890}}></input>
                         </div>

                        <div className={AddRecipesCss.tip11}>
                            <button className={AddRecipesCss.tip11a}>添加</button>
                            <button className={AddRecipesCss.tip11b}>取消</button>
                        </div>                                  

                  </div>
                                                
                                        
                </Content>
            </div>
           
        )
    }
}
