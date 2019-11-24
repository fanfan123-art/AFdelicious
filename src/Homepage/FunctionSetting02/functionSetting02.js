import React from 'react';
import { Layout, Breadcrumb,Radio } from 'antd';
const { Header, Content } = Layout;



var FunctionSetting02Css=require('../FunctionSetting02/functionSetting02.css')
export default class FunctionSetting02 extends React.Component {
    state = {
    value: 1,
  };
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }}  className={FunctionSetting02Css.Header}>功能设置</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div>
                           验证码：
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>必填</Radio>
                        <Radio value={2}>防刷保护</Radio>  
                        </Radio.Group> 
                        </div>
                        <div>
                            留言公开方式：
                            <Radio.Group name="rediogroup" defaultValue={1}>
                                <Radio value={1}>管理员审核</Radio>
                                <Radio value={2}>自动公开</Radio>
                                </Radio.Group> 
                        </div>
                        <div>
                            <button>保存</button>
                            <button>取消</button>
                        </div>
                        
                        
                    </div>
                </Content>
            </div>
        )
    }
}