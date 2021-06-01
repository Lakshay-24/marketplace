import React from "react"
import "./ProductList.css";
import Card from "./components/Card";
import Heading from "../../components/Heading";
function ProductList(props)
{

    return(
        <div className="list-container">
        <Heading title="Products"/>
        {
            Object.keys(props.productObjects).length===0?<div className="default-text-box">Please add some products</div>: 
            <div className="product-cards"> 
            {
                
                Object.keys(props.productObjects).map(id=>{
                    return(
                        <Card key={id} id={id} img={props.productObjects[id].image} 
                        name={props.productObjects[id].name} 
                        des={props.productObjects[id].des} 
                        updateCurrentId={props.updateCurrentId} currentId={props.currentId}
                        deleteProduct={props.deleteProduct}
                        />
                    )
                })
               
            }
            </div>

        
        }
        </div>
    )
}


export default ProductList
