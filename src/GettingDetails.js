import React, { useEffect, useState } from 'react'
import axios from 'axios'


function GettingDetails() {
    const [data, setData] = useState([]);
    useEffect(() => { axios.get("http://localhost:3000/data").then(res => setData(res.data)) })
    return (
        <div>
            <div class="container">
                {data.map((i) => (
                    <div class="card mb-3" >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={i.image} style={{ height: "200px" }}></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1>{i.Name}</h1>
                                    <p><strong>Email:</strong>{i.Email}</p>
                                    <p><strong>Phone:</strong>{i.Phone}</p>
                                    <p><b>Company:</b>{i.Company}</p>
                                    <p><b>Website:</b>{i.Website}</p>
                                    <p><b>Address:</b>{i.Address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default GettingDetails
