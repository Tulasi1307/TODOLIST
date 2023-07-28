import React, {useState} from 'react'
import './Todolist.css'
import 'antd/dist/antd.min.css';
import DateTimePicker from 'react-datetime-picker';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const Inform = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Todolist = (props) => {

    const [task_name,settask_name]=useState('');
    const [task_type,settask_type]=useState('');
    // const [date_time,setdate_time]=useState('');
    const [status,setstatus]=useState('');
    const [value, onChange] = useState(new Date());
    // const [image,setimage]=useState('');
    // const [action,setaction]=useState('')
    // const [addFormData,setAddFormData]=useState({
    //    task_name:'',
    //    task_type:'',
    //    status:'',
      
    // })

    // const handleAddFormChange=(e)=>{
    //   e.preventDefault()
    //   const fieldName=e.target.getAttribute('name')
    //   const fieldValue=e.target.value
    //   const newFormData={...addFormData}
    //   newFormData[fieldName]=fieldValue
    //   setAddFormData(newFormData)
    // }
    
    // const changeDT = (event) => {
    //   setdate_time(event.target.value);
    // };
    // const onSubmit=(e)=>{
    //   e.preventDefault()
    //   localStorage.setItem('task_name',task_name)
    //   localStorage.setItem('task_type',task_type)
    //   localStorage.setItem('date_time',date_time)
    //   localStorage.setItem('status',status)
    //   localStorage.setItem('image',image)
    // }
    const changeName = (event) => {
      settask_name(event.target.value);
    };
    
    const changeType = (event) => {
      settask_type(event.target.value);
    };
    
    const changeStatus = (event) => {
      setstatus(event.target.value);
    };
    // const changeImage = (event) => {
    //   setimage(event.target.value);
    // };

    const transferValue = (event) => {
      event.preventDefault();
      const val = {
        task_name,
        task_type,
        value,
        status
      };
      props.func(val);
      clearState();
    };
    
    const clearState = () => {
      settask_name('');
      settask_type('');
      onChange('');
      setstatus('')
    };
    


  return (
    <div className='Tulasi' >
      
      <label>Task_Name</label>
      <input type="text"
      name='task_name'
       value={task_name}
        onChange={changeName} />
      <label>Task_Type</label>
      <select 
      name='task_type' 
      value={task_type}  onChange={changeType}>
        <option value=""></option>
        <option value="Task"  >Task</option>
        <option value="Meeting" >Meeting</option>
        <option value="Birthdays" >Birthdays</option>
        <option value="Anniversaries" >Anniversaries</option>
        <option value="Misc" >Misc</option>
      </select>
      <label>Date_Time</label>
      <DateTimePicker onChange={onChange} value={value}/>
      <label>Status</label>
      <select 
      name='status'
       value={status} onChange={changeStatus} >
          <option value="" ></option>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
      </select>
      <label>Image</label>
      <Upload {...Inform}  >
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <button  onClick={transferValue}> Save</button>
    </div>
  )
}

export default Todolist

