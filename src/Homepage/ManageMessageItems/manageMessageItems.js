import React from 'react';
import { Layout, Breadcrumb,Table ,Checkbox } from 'antd';
const { Header, Content } = Layout;
const data = [
    {
      key: '1',
      name: '姓名',
      age: <Checkbox onChange={onChange}></Checkbox>,
      address: <Checkbox onChange={onChange}></Checkbox>,
    },
    {
      key: '2',
      name: '邮箱',
      age: <Checkbox onChange={onChange}></Checkbox>,
      address: <Checkbox onChange={onChange}></Checkbox>,
    },
    {
      key: '3',
      name: '电话',
      age: <Checkbox onChange={onChange}></Checkbox>,
      address: <Checkbox onChange={onChange}></Checkbox>,
    },
  ];
  const columns = [
    {
      title: '留言项名称',
      dataIndex: 'name',
      filters: [
        {
          text: '姓名',
          value: '姓名',
        },
        {
          text: '邮箱',
          value: '邮箱',
        },
        {
          text: '电话',
          value: '电话',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: '显示',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '必填',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
var ManageMessageItemsCss=require('../ManageMessageItems/manageMessageItems.css')
export default class ManageMessageItems extends React.Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }}  className={ManageMessageItemsCss.Header}>管理留言项</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                      <div className={ManageMessageItemsCss.right}>
                        <input id="popupAddProp" className={ManageMessageItemsCss.right1} extclass="faiTableButton" onClick="popupAddProp()" type="button" maxLength="50" value="添加留言项"></input>

                      </div>
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                    <div>
                      总共3个
                    </div>
                    <div className={ManageMessageItemsCss.First}>
                      <button>保存</button>
                      <button>取消</button>
                    </div>
                    </div>
                    
                </Content>
            </div>
        )
    }
}