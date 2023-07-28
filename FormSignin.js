import React  from 'react'
import {Form, Input,Button} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { useState ,useEffect} from 'react';
import './FormSignin.css'


const FormSignin = ()=> {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    localStorage.setItem(values.username,JSON.stringify(values));
  };

  return(
    <div className="register-form" >
    <h1>TODO_LIST</h1>
    <Form
      // {...formItemLayout}
      form={form}
      
      name="register"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      
    >

<Form.Item
        name="username"
        label='Username'
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
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        className="site-form-item-icon"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        className="site-form-item-icon"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="register-form-button" >
          Register
        </Button>
      </Form.Item>

      </Form>
      </div>

  )

//   const intialValues={ username:'', email : '',password:'',password2 :''}
//   const [formValues,setFormValues]=useState(intialValues)
//   const [formErrors,setFormErrors]=useState({})
//   const [isSubmit,isSetSubmit]=useState(false)


//  const handleChange=(event)=>{
//   const {name,value}=event.target
//   setFormValues({
//     ...formValues,[name]:value
//   })
  
//   // const target=event.target
//   // this.setState({
//   //   [target.name]: target.value,
    
//   // })
  
 
// }

// const handleSubmit=(event)=>{
//  // event.preventDefault()
//  console.log(event);
//  localStorage.setItem(event.username,JSON.stringify(event));
//   setFormErrors(validate(formValues))
//   isSetSubmit(true)
// }
// useEffect(()=>{
//   console.log(formErrors)
//   if(Object.keys(formErrors).length===0 && isSubmit){
//     console.log(formValues)
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// },[formErrors])
// const validate=(values)=>{
//   const errors={}
//   const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
//   if(!values.username){
//     errors.username="Username is required"
//   }
//   if(!values.email){
//     errors.email="email is required"
//   }else if(!regex.test(values.email)){
//     errors.email='this is not a valid email'
//   }
//   if(!values.password){
//     errors.password="password is required"
//   }else if(values.password.length<6){
//     errors.password="password should be more than 6 characters"
//   }
//   if(!values.password2){
//     errors.password2="password is required"
//   }else if(values.password2!==values.password){
//     errors.password2="Password didn't match"
//   }
//   return errors;
// }
  
// //  render(){ 
// //       const {username,email,password,password2}=this.state
      

//   return (
//     <div className='form-content'>
//      <h1>TODO_LIST</h1>
//       <form className='form-contain' onSubmit={handleSubmit} >
//         <div className='form-inputs'>
//         <label htmlFor='username' >Username</label>
//         <input
//            type='text' 
//            id='username' 
//            className='form-user'
//            name='username' 
//            placeholder='Enter username'
//            value={formValues.username} 
//            onChange={handleChange}/>
        
//         </div>
//         <p >{formErrors.username}</p>
        
//         <div className='form-inputs'>
//         <label htmlFor='email' >Email</label>
//         <input
//            type='email'
//            id='email'
//            className='form-email'
//            name='email' 
//            placeholder='Enter email'
//            value={formValues.email} 
//            onChange={handleChange} />
//         </div>
//         <p>{formErrors.email}</p>
        
//         <div className='form-inputs'>
//         <label htmlFor='password' >Password</label>
//         <input 
//            type='password'
//            id='password'
//            className='form-pass' 
//            name='password'  
//            placeholder='Enter password' 
//            value={formValues.password} 
//            onChange={handleChange}  />
//         </div>
//         <p>{formErrors.password}</p>
        
//         <div className='form-inputs'>
//         <label htmlFor='password2' >Confirm Password</label>
//         <input 
//           type='password' 
//           id='password2'
//           className='form-pass2' 
//           name='password2'  
//           placeholder='Confirm password'  
//           value={formValues.password2} 
//           onChange={handleChange} />
//         </div>
//         <p>{formErrors.password2}</p>
        
//         <button className='form-input-btn' type='submit'>Sign Up </button>
     
//       </form>
//     </div>
//   )

}

export default FormSignin
