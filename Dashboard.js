import React, {useState} from 'react'
import  Modal  from 'react-modal';
import Todolist from './Todolist'
import './Dashboard.css'
import jsonData from './Data.json'

Modal.setAppElement('#root')
const Dashboard = () => {
  const [taskData, setTaskData] = useState(jsonData);
  const [modalIsOpen,setModalIsOpen]=useState(false)
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  const tableRows = taskData.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.task_name}</td>
        <td>{info.task_type}</td>
        <td>{info.date_time}</td>
        <td>{info.status}</td>
        <td>{info.image}</td>
        <td>
			<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
			<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
		  </td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    
    const totaltasks = taskData.length;
    data.id = totaltasks + 1;
    const updatedTaskData = [...taskData];
    updatedTaskData.push(data);
    jsonData.push(updatedTaskData)
    setTaskData(updatedTaskData);
    console.log(data)
  };


  return (
    <div className='mainone'>
      
      {/* 
      <h1>TO DO LIST</h1> */}
      <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>TODO_LIST</h2>
            </div>
      <div className='add-button'>
          <button className='btn btn-success' onClick={()=>setModalIsOpen(true) } data-toggle='modal' ><span>Add New Task</span></button>
      </div>
      </div>
            </div>
      <table >
        <thead>
          <tr>
          <th>S.No</th>
          <th>Task_Name</th>
          <th>Task_Type</th>
          <th>Date_Time</th>
          <th>Status</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Modal isOpen={modalIsOpen} >
        <h2>Adding New Task.. </h2>
      <Todolist func={addRows}/>
      <div className='buttons'>
          <button onClick={()=>setModalIsOpen(false)  }>Close</button>
      </div>
      </Modal>
      
    </div>
  )
}

export default Dashboard
