import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image,setImage] = useState('')

  const handleChange =() =>{
    axios.get('https://api.generated.photos/api/v1/faces?api_key=VRc7IGFpS659zw89Zmowxg&order_by=random&emotion=joy').then(res => {
    //  console.log(res.data.face[0].urls[4][512]);
    const uri = res.data.faces[0].urls[4][512]
    uri && setImage(uri)
    }).catch(err => {
      console.log(err.message)
    })
  };
  return (
    <div className="App">
      <h1 className="header">Photo Generator</h1>
      {image && <img src={image} alt="AI Face" />}
      <button type="button" onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;
