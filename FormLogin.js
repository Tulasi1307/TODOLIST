import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input, message } from 'antd';
// import { useState} from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import './FormLogin.css'
// import Dashboard from './Dashboard';


  const FormLogin=()=> {

    const navigate=useNavigate()
    const onFinish = (e) => {
    console.log('Received values of form: ', e);
    const uname=e.username;
    const pass=e.password;
    const items = JSON.parse(localStorage.getItem(uname));
    if(items ==null){
      console.log('you have entered username not found in local storage section')
       message.error('you have entered invalid username or password')
    }
    else if(pass!==items.password){
      console.log('you have entered wrong password section')
      message.error('you have entered invalid username or password')
    }
    else if(pass===items.password){
      message.success('Login success')
      navigate('Dashboard')

;    }
    // localStorage.setItem(values.username,JSON.stringify(values));

  };
  const items = JSON.parse(localStorage.getItem('items'));
  console.log(items)
  
  return (
    
     <div className='login-wrapper' >
       <h1>TODO_LIST</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
        <a className="login-form-forgot" href="http://www.google.com">
          Forgot password ?
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button"  >
          Log in
        </Button>
        Or <Link to="/FormSignin">Register</Link>
      </Form.Item>
    </Form>
    </div>
  
  );
  // const navigate=useNavigate()
  //         <button className='form-input-btn' type='submit' onClick={()=>navigate('Dashboard')}>Login </button><br></br>
  //         <span className='form-input-login'>
  //           Don't have an account? <Link to="/FormSignin">Register</Link>
  //         </span>
  
  //       </form>
  //     </div>
  //   )
   
}

export default FormLogin
