import { useState,useEffect } from "react";
import './App.css';
import ProductList from "./screens/ProductList/ProductList";
import AddProduct from "./screens/AddProduct/AddProduct";
import Button from "./components/Button";
import firebaseDb from "./firebase";
function App() {
  
  const [flag,setFlag]=useState(1);
  const[productObjects,setProductObjects]=useState({});
  const [currentId,setCurrentId]=useState("");
  const [currentObj,setCurrentObj]=useState({});
  useEffect(()=>{
    firebaseDb.child("products").on('value',snapshot=>{
      if(snapshot.val()!=null)
      setProductObjects({
        ...snapshot.val()
      })
    })
  },[])

  const updateCurrentId=(id)=>{
    //console.log(productObjects[id])
    setCurrentId(id);
    setCurrentObj(productObjects[id]);
    setFlag(0);
  }
  const handleButtonClick=(e)=> {
    setFlag((prevState)=>{
      var x;
      if(prevState===1)
      x=0
      else
      x=1
      return x;
    });
  }

  const addOrEdit=(obj)=>{

    if(currentId==="")
    {
      firebaseDb.child("products").push(
        obj,err=>{
          if(err)
          console.log(err);
          else
          setCurrentId("")
        }
      )
    }
    else
    {
      firebaseDb.child(`products/${currentId}`).set(
        obj,err=>{
          if(err)
          console.log(err);
          else
          setCurrentId("")
        }
      )

    }


  }
  const deleteProduct=(id)=>{
    if(window.confirm("Do you want to delete this product"))
    {
    firebaseDb.child(`products/${id}`).remove(err=>
      {
        if(err)
        console.log(err);
        else
        setCurrentId("")
      }
    )
    }
  }
  return (
    <div className="App">

      {
        flag===1?<ProductList productObjects={productObjects} updateCurrentId={updateCurrentId} currentId={currentId}
         deleteProduct={deleteProduct}/>:
         <AddProduct addOrEdit={addOrEdit} initialObj={currentObj}
         handleToggle={handleButtonClick} id={currentId}/>
      }
      {
        flag===1? <Button title="Add New Product"onClick={handleButtonClick}/>: <Button title="View Products" onClick={handleButtonClick}/>
      }
    </div>
  );
}

export default App;
