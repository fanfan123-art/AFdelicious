import React,{PropTyprs,Component} from 'react';
import { Layout, Breadcrumb,Statistic, Row, Col,} from 'antd';
const { Header, Content } = Layout;



var OverviewCss=require('../Overview/overview.css')
export default class Overview extends React.Component {
    
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }}  className={OverviewCss.Header}>网站概况</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                  
                        
                   <div style={{ padding: 24, minHeight: 360 }} className={OverviewCss.First} >
                               
                                    <div   className={OverviewCss.First1}>
                                        快速查看
                                    <button>今日</button>
                                    <button>昨日</button>
                                    <button>最近七日</button>
                                    <button>本月</button>
                                     </div>
                                     <div   className={OverviewCss.First2}>
                                         
                                            
                                             <Row gutter={16}>
                                             <ul>    
                                                <li>
                                                    <Col span={12} className={OverviewCss.First21}>
                                                    <Statistic title="浏览次数PV" value={0} />
                                                    </Col> 
                                                </li> 
                                                <li>                                     
                                                    <Col span={12} className={OverviewCss.First21}>
                                                    <Statistic title="独立访客UV "value={0} />
                                                    </Col>
                                                </li>
                                                <li>
                                                    <Col span={12} className={OverviewCss.First21}>
                                                    <Statistic title="IP" value={0} />
                                                    </Col>
                                                </li>
                                            </ul>
                                        </Row>
                                         
                                     
                                     </div>
                                    <div >
                                    <div className="sceneEvaluateRate">
                               
                                    </div>
                                    </div>




                               </div>
                               
                  
                        
                </Content>
            </div>
        )
    }
}

