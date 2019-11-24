import React from 'react';
import { Layout, Breadcrumb ,Radio,Switch,Icon} from 'antd';
const { Header, Content } = Layout;

var FunctionSetting01Css=require("../FunctionSetting01/functionSetting01.css")
export default class FunctionSetting01 extends React.Component {
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
                <Header style={{ background: '#fff', padding: 0,fontSize:20}} className={FunctionSetting01Css.Header}>功能设置</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }} className={FunctionSetting01Css.Header2}>
                        <div className={FunctionSetting01Css.all1}>
                            <div className={FunctionSetting01Css.First}> 
                                <div className={FunctionSetting01Css.First01}>文章评论
                                </div>
                                <div className={FunctionSetting01Css.First02}>
                                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                </div>
                            </div>
                            <div className={FunctionSetting01Css.Second}>
                                <div className={FunctionSetting01Css.Second01}>评论权限        
                                </div>
                                <div className={FunctionSetting01Css.Second02}>
                                <Radio.Group onChange={this.onChange} value={this.state.value} className={FunctionSetting01Css.First03}>
                                <Radio value={1}>所有人</Radio>
                                <Radio value={2}>仅会员</Radio>
                                </Radio.Group> 
                                </div>
                            </div>
                     
                            <div className={FunctionSetting01Css.Three}>
                                <div className={FunctionSetting01Css.Second01}>公开方式        
                                </div>
                                <div className={FunctionSetting01Css.Three02}>
                                 <Radio.Group name="rediogroup" defaultValue={1} className={FunctionSetting01Css.First03}>
                                <Radio value={1}>管理员审核</Radio>
                                <Radio value={2}>自动公开</Radio>
                                </Radio.Group> 
                                </div>
                            </div>
                        </div>
   
                        <div className={FunctionSetting01Css.all2}>
                            <div className={FunctionSetting01Css.Four}>
                            <div className={FunctionSetting01Css.Second01}>文章浏览数
                            </div>
                            <div className={FunctionSetting01Css.Four02}>
                            <Radio.Group name="rediogroup" defaultValue={1} className={FunctionSetting01Css.First03}>
                                <Radio value={1}>开启</Radio>
                                <Radio value={2}>关闭</Radio>
                                </Radio.Group> 
                            </div>
                            </div>
                            <div className={FunctionSetting01Css.Five}>
                            <div className={FunctionSetting01Css.Second01}>文章浏览权限
                            </div>
                            <div className={FunctionSetting01Css.Five02}>
                            <Radio.Group name="rediogroup" defaultValue={1} className={FunctionSetting01Css.First03}>
                                <Radio value={1}>所有人</Radio>
                                <Radio value={2}>仅会员</Radio>
                                </Radio.Group> 
                            </div>
                            </div>

                        </div>
                   
                    </div>
                </Content>
            </div>
        )
    }
}