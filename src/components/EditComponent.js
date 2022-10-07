import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link , useParams,useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';

const EditComponent = () => {
    const {id} = useParams();

    const contact = useSelector(state=>state);
    const currentcontact=contact.find((contact)=>contact.id === parseInt(id));
    console.log(currentcontact)
    
     
    const history = useHistory();
    const dispatch = useDispatch();   
    const [name,setname] = useState();
    const [email,setemail] = useState();
    const [number,setnumber] = useState();
    
    const checkEmail = contact.find(contact=>contact.id !==parseInt(id)  && contact.email === email) 
    const checkNumber = contact.find(contact=>contact.id !== parseInt (id) && contact.number === parseInt(number) && number)

    useEffect((e)=>{
        if(currentcontact){
            setname(currentcontact.name);
            setemail(currentcontact.email);
            setnumber(currentcontact.number);
            
        }
    },[currentcontact])

    const submithandler=(e)=>{
      
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
            id:parseInt(id),
            name,
            email,
            number,
        }
        console.log(data);
        dispatch({type:"EDIT_CONTACT", payload:id})
        toast.success("student data Update success full");
        
        history.push("/");

    }
    

    
    return (
        <div>
             <div className="container">
        <div className="row">
                <h3 className="display-3 text-center mt-3 mb-3">Edit Student {id}</h3>
            <div className="col-md-6 shadow mx-auto p-4">
                <form onSubmit={submithandler}>
                    <div className="form-group">
                        <input type="text" value={name} onChange={e=>setname(e.target.value)} className="form-control mt-3" placeholder="Name"  />
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={e=>setemail(e.target.value)} className="form-control mt-3" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="number" value={number} onChange={e=>setnumber(e.target.value)} className="form-control mt-3" placeholder="Phone Number" />
                    </div>
                    <div className="form-group text-center mt-4 d-flex justify-content-around" >
                    <Link to="/" className="btn btn-danger" style={{width:"48%"}}> Cancel</Link>
                        <input type="submit" value="Update Student" className="btn btn-dark" style={{width:"48%"}}  />
                    </div>
                </form>
            </div>
        </div>
        </div>  
        </div>
    )
}

export default EditComponent
