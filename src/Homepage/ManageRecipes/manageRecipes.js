import React from 'react';
import { Layout, Breadcrumb ,Input} from 'antd';
const { Header, Content } = Layout;
const { Search } = Input;


var ManageRecipesCss=require('./../ManageRecipes/manageRecipes.css')
export default class ManageRecipes extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 ,fontSize:20}}  className={ManageRecipesCss.Headera}>管理食谱</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }} className={ManageRecipesCss.Header}>
                    

                        <div className={ManageRecipesCss.First}>
                            <button className={ManageRecipesCss.First1}>添加</button>
                            <button className={ManageRecipesCss.First1}>修改</button>
                            <button className={ManageRecipesCss.First1}>删除</button>
                            <Search className={ManageRecipesCss.First2} placeholder="搜索" onSearch={value => console.log(value)} style={{ width: 200 }} />
                           
                        </div>
                        <div className={ManageRecipes.Header1}>
                        <div className={ManageRecipesCss.Second}>
                            <div className={ManageRecipesCss.Second1}>文章列表</div>
                            <div><button className={ManageRecipesCss.Second2} >全部分类</button>
                            <button className={ManageRecipesCss.Second3} >权限</button>
                            </div>
                           

                        </div>
                        
                        <div className={ManageRecipesCss.Three}>
                            <ul className={ManageRecipesCss.Three1}>
                                <li>操作</li>
                                <span>|</span>
                                <li>名称</li>
                                <span>|</span>
                                <li>作者</li>
                                <span>|</span>
                                <li>分类</li>
                                <span>|</span>
                                <li>时间</li>
                                <span>|</span>
                                <li>置顶</li>

                            </ul>
                            
                        </div>
                        <div className={ManageRecipesCss.Four}>
                            本页共有0个，总共有0个
                        </div>        
                        <div className={ManageRecipesCss.Four1}>
                            <button>上一页</button>
                            <span className={ManageRecipesCss.Four2}>1</span>
                            <button>下一页</button>
                            


                        </div>

                    </div>
                </div>
                </Content>
            </div>
        )
    }
}
