import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content } = Layout;

var AddMessageCSS=require('../AddMessage/addMessage.css')
export default class AddMessage extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0  ,fontSize:20}} className={AddMessageCSS.Header}>增添留言</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360}}>
                        <div className={AddMessageCSS.Header1}>
                            <div className={AddMessageCSS.First1}>
                                留言时间：
                                <input type="text"></input>
                            </div>
                            <div className={AddMessageCSS.First1}>
                                姓名
                                <input type="text"></input>
                              
                                邮箱
                                <input type="text"></input>
                            </div>
                            <div className={AddMessageCSS.First1}>
                                电话
                                <input type="text"></input>
                            </div>
                            <div className={AddMessageCSS.First2}>留言内容</div>
                            <input type="text" className={AddMessageCSS.First3}></input>
                            <div className={AddMessageCSS.First2}>回复内容</div>
                            <input type="text" className={AddMessageCSS.First3}></input>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}