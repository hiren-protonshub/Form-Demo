import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddComponent = () => {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [number,setnumber] = useState("");

    const contact = useSelector(state=>state);
    const checkEmail = contact.find(contact=>contact.email === email && email) 
    const checkNumber = contact.find(contact=>contact.number === parseInt(number) && number) 

    const history = useHistory();
 
    const dispatch = useDispatch();
    const submithandler=(e)=>{
        e.preventDefault();
        if(checkEmail){
            return toast.error("Email is already Exists!")
        }
        if(checkNumber){
            return toast.error("Number is already Exists!")
        }
        if(!name || !email || !number){
            return toast.warning("Please fill in all field")
        }
        const data ={
            id:contact[contact.length - 1].id +1,
            name,
            email,
            number,
        }
        console.log(data);
        dispatch({type:"ADD_CONTACT", payload:data})
        toast.success("student data Add success full");
        history.push("/");
    }
   
    return (
        <div className="container">
        <div className="row">
                <h3 className="display-3 text-center mt-3 mb-3">Add Student</h3>
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={submithandler}>
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" value={name} onChange={e=>setname(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mt-3" value={email} onChange={e=>setemail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control mt-3" value={number} onChange={e=>setnumber(e.target.value)} placeholder="Phone Number" />
                    </div>
                    <div className="form-group text-center mt-4">
                        <input type="submit" value="Add Student" className="btn btn-block btn-dark " />
                    </div>
                </form>
            </div>
        </div>
        </div>  
    )
}

export default AddComponent
