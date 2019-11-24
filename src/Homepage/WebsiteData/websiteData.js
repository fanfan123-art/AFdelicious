import React from 'react';
import { Layout, Breadcrumb ,Menu, Icon,Dropdown, Input} from 'antd';
const { Header, Content } = Layout;
const { Search } = Input;


var WebsiteDataCss=require('../WebsiteData/websiteData.css')
export default class WebsiteData extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }} className={WebsiteDataCss.Header}>网站数据</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div className={WebsiteDataCss.all}>
                    <div className={WebsiteDataCss.First1}>
                        <button>批量还原</button>
                        <button>批量清空</button>
                            <Search className={WebsiteDataCss.Input} placeholder="搜索所有内容" onSearch={value => console.log(value)} style={{ width: 200 }} />
                    </div>
                    <div className={WebsiteDataCss.Second1}>
                        <div className={WebsiteDataCss.Second2}>
                        <div className={WebsiteDataCss.Second21}>网站数据列表
                        <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>                                        
                                        内容                                       
                                    </Menu.Item>
                                    <Menu.Item>   
                                        图片    
                                    </Menu.Item>
                                    <Menu.Item>
                                        视频                              
                                    </Menu.Item>
                                    </Menu>
                                } className={WebsiteDataCss.Second22}>
                                    <a className="ant-dropdown-link">
                                    食谱<Icon type="down" />
                                    </a>  
                                </Dropdown> 
                        </div>
                        </div>
                        <div className={WebsiteDataCss.Second3}>
                            <ul  className={WebsiteDataCss.Second4}>
                                <li>操作</li>
                                <span>|</span>
                                <li>数据类型</li>
                                <span>|</span>
                                <li>数据名称</li>
                                <span>|</span>
                                <li>删除时间^</li>
                            </ul>
                            <div className={WebsiteDataCss.Second5}>
                                没有网站内容
                            </div>
                        </div>
                        <div className={WebsiteDataCss.Three1}>
                            <div className={WebsiteDataCss.Three2}>本页共0个,总共0个
                            <Dropdown overlay={
                                    <Menu>
                                    <Menu.Item>
                                       15
                                    </Menu.Item>
                                    <Menu.Item>
                                        20
                                    </Menu.Item>
                                    <Menu.Item>
                                        35
                                    </Menu.Item>
                                    <Menu.Item>
                                        30
                                    </Menu.Item>
                                    <Menu.Item>
                                        35
                                    </Menu.Item>
                                    <Menu.Item>
                                        40
                                    </Menu.Item>
                                    </Menu>
                                } className={WebsiteDataCss.Second22}>
                                    <a className="ant-dropdown-link">
                                    显示个数<Icon type="down" />
                                    </a>  
                                </Dropdown> 
                            </div>
                            <div className={WebsiteDataCss.Four1}>
                               <button className={WebsiteDataCss.Four2}>上一页</button>
                               1
                               <button className={WebsiteDataCss.Four2}>下一页</button>
                               共1页

                            </div>
                            

                            

                        </div>

                    </div>
                    </div>
                    </div>
                </Content>
            </div>
        )
    }
}