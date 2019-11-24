import React from 'react';
import { Layout, Breadcrumb ,DatePicker, Checkbox} from 'antd';
const { Header, Content } = Layout;

function onChange(date, dateString) {
    console.log(date, dateString);
  }

var ManageMessageCss=require('../ManageMessage/manageMessage.css')
export default class ManageMessage extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }} className={ManageMessageCss.Header} >管理留言</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div className={ManageMessageCss.First1}>
                            <button>添加新留言</button>
                            <button>删除</button>
                            <button>公开</button>
                            <button>取消</button>
                        </div>
                        <div className={ManageMessageCss.First2}>
                            <div  className={ManageMessageCss.First21}>
                                <div className={ManageMessageCss.First22}>
                            姓名
                            <input text="text"></input>
                            时间
                            <DatePicker onChange={onChange} />
                            </div>
                            <div  className={ManageMessageCss.First23}>
                                <li> <Checkbox onChange={onChange}>操作</Checkbox></li>
                                <li>状态</li>
                                <li>留言内容</li>
                                <li>留言时间</li>
                                <li>IP</li>
                            </div>
                            <div  className={ManageMessageCss.First24}>
                                目前没有留言
                            </div>
                            </div>
                            <div className={ManageMessageCss.First3}>
                                <div className={ManageMessageCss.First25}>本页共0个 总共0个</div>
                                <div className={ManageMessageCss.First26}>
                                 <button >上一页</button>
                                1
                                <button >下一页</button>
                                共1页
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}