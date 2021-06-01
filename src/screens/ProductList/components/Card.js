import React from "react";
import "./Card.css";
import lays from "../assets/lays.jpg"
import { RiDeleteBin5Line, RiEditCircleFill } from "react-icons/ri";
function Card(props){

console.log(props.id)
const handleEditClick=()=>{

props.updateCurrentId(props.id);
}
 return(
     <div className="card">
         <div className="des-container">
             <div className="product-image">
            <img src={props.img} style={{height:"100%",width:"100%"}}/>

             </div>
             <div className="item-des">
            <p style={{fontSize:"2rem"}}>{props.name}</p>
            <p style={{fontSize:"1.2rem",fontWeight:"500"}}>{props.des}</p>
             </div>
          
         </div>
         <div className="icon-container">
        <div className="icon" onClick={()=>{props.deleteProduct(props.id)}}><RiDeleteBin5Line style={{width:"100%",height:"100%"}} /></div>
        <div className="icon" onClick={handleEditClick}><RiEditCircleFill style={{width:"100%",height:"100%",fill:"purple"}}/></div>
        </div>
     </div>
 )   
}


export default Card