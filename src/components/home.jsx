import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Home() {
   const [data, setData] = useState([])

   const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/api/crud/all')
        setData(response.data)
   } 

   useEffect(() => { fetchData() }, [])

   return (
    <div>
        <div className='container'>
            { 
              data.map(item => (
                <div className="card mb-3" key={item._id}>
                    <img src={item.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.desc}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div> 
               )) 
            }
        </div>
    </div>
   )
}

export default Home