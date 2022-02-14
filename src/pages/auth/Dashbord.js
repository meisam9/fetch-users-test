import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getUserList } from "../../store/Users/users.actions"
const Dashbord = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    useEffect(()=>{
        dispatch(getUserList())
    },[])

    const handleDetails = (id) => {
        navigate(`/user/${id}`)
    }
    return (
        <div className="container" style={{marginTop:'5rem'}}>
            <h2>List Of Users:</h2>
            <table className="table mx-2">
            <thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Avatar</th>
						<th scope="col">Email</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Action</th>
					</tr>
			</thead>
            <tbody>
            {users.map((user,index)=>(
            <tr key={index}>
                <td >{user.id}</td>
                <td ><img style={{width:'50px'}} src={user.avatar} alt={user.first_name} className="rounded-circle"/></td>
                <td >{user.email}</td>
                <td >{user.first_name}</td>
                <td >{user.last_name}</td>
                <td ><button className="btn btn-primary" onClick={()=>handleDetails(user.id)}>User Details</button></td>
            </tr> 
        ))}
            </tbody>
            </table>
        </div>

    )
}

export default Dashbord
