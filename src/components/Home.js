import React from 'react'
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const Home = () => {

const contact =useSelector(state=>state);
const history = useHistory();

const dispatch = useDispatch();
const  deletecontact =(id)=>{
    dispatch({type:"DELETE_CONTACT",payload:id})
    toast.success("Student data delete successfully")
    history.push("/");
}


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-11 my-5" style={{textAlign:"right"}}>
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-8  mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                        {
                                contact.map((data,id)=>{
                                return (
                                <tr className="text-center border-3" key={id}>  
                                <td key={id}>{id +1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.number}</td>
                                <td><Link to={`/edit/${data.id}`} className="bg-primary btn btn-small m-1" >Edit</Link>
                                <button onClick={()=>deletecontact(data.id)} type="button" className="bg-danger btn btn-small mr-1" >Delete</button> </td>
                                </tr>
                            
                            )})
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
