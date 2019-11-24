import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


var LoginCss = require('../Login/login.css');
class Login extends React.Component {
    handleSubmit = e=> {
        e.preventDefault(); 
        let history = this.props.history;
        this.props.form.validateFields((err,values)=>{
            if (!err) {
                console.log('Received values of form: ', values);
                history.push('/HomePage');
              }
        })
    }
    render() {
        const { getFieldDecorator} = this.props.form;

        return (
            <div className={Login.background}>
                <div className={LoginCss.head}>
                    <img src={require('../images/logo02.png')} className={LoginCss.img}></img>
                </div>
                <div className={LoginCss.img01}>
                </div>
                <div className={LoginCss.bedeck01}>
                    <p>Delicious Spect Net</p>
                </div>
                <div className={LoginCss.login01}>
                    <div className={LoginCss.login02}>
                        <h1>管理员登录</h1>
                    </div>
                    <div className={LoginCss.login03}>
                        <Form onSubmit={this.handleSubmit} className={LoginCss.form}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className={LoginCss.forgot} href="">
                                    Forgot password
                            </a>
                                <Button type="primary" htmlType="submit" className={LoginCss.button} size="large">
                                    Log in
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
let WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;