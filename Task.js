const Task =({info})=>{
    return(
        <>
          <td>{info.task_name}</td>
		  <td>{info.task_name} </td>
		  <td>{info.date_time}</td>
		  <td>{info.status}</td>
          <td>{info.image}</td>
        
		  <td>
			<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
			<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
		  </td>
        </>
    )
}

export default Task