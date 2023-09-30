import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { USER } from './UserData';

const DisplayData = () => {
    const [data, setData] = useState<USER>([]);

    useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
     .then(v => setData(v.data))
     .then(v => console.log(data))
     .catch(e => console.log(e + "In fetching data"));
    }, [])

    return <div>
        {data.map((item)=>{
            return <div className="card container" style={{width:"18rem"}}>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href="/" className="btn btn-primary">{item.price}</a>
            </div>
          </div>
        })}
    </div>;
}



export default DisplayData;