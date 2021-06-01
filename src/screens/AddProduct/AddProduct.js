import React, {useState, useEffect} from "react";
import "./AddProduct.css"
import Heading from "../../components/Heading";
import {ImCamera } from "react-icons/im";
function AddProduct(props)
{
    const initialValues={
        image: null,
        name:"",
        des:""
    }
    // console.log(Object.keys(props.initialObj).length);
    const [userData,setUserData]=useState(initialValues);
    useEffect(()=>{
        if(props.id!=="")
        setUserData(props.initialObj)
    },[])
    const handleNameChange =(e)=>{
        console.log(e.target.value)
        //var [name,value]=e.target
        setUserData((prevData)=>{

            var obj={
                image:prevData.image,
                name:e.target.value,
                des:prevData.des
            }
            return obj;
        })
        
    }
    const handleDesChange =(e)=>{
        console.log(e.target.value)
        //var [name,value]=e.target
        setUserData((prevData)=>{

            var obj={
                image:prevData.image,
                name:prevData.name,
                des:e.target.value
            }
            return obj;
        })
        
    }
    const handleImageUpload=(e)=>{
        console.log(e.target.files);
        setUserData((prevData)=>{

            var obj={
                image:URL.createObjectURL(e.target.files[0]),
                name:prevData.name,
                des:prevData.des
            }
            return obj;
        })
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        props.addOrEdit(userData);
        // setUserData(initialValues);
        props.handleToggle();
   

    }


    return(
        <div>
        <Heading title="Add New Product"/>
        <div className="form-container">
        
        <label className="input-label">Upload Photo</label>
        <div className="photo-input">
        {
            userData.image===null?<ImCamera className="camera-icon"/>:<img src={userData.image} className="camera-icon"/>
        }
        </div>
        <input type="file" onChange={handleImageUpload} className="input-file"/>
        <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div>
        <label className="input-label">Product Name</label>
        </div>
        <div >
        <input type="text" className="input-box" name="name" value={userData.name}
        onChange={handleNameChange}/>
        </div>
        <div>
        <label className="input-label">Description</label>
        </div>
        <div >
        <input type="text" name="des" className="input-box" value={userData.des} 
        onChange={handleDesChange}/>
        </div>
        <input type="submit" className="submit-button" value="Submit"/>
        
        </form>
        </div>
        
        </div>
    )
}

export default AddProduct
