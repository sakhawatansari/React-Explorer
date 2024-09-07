import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sakhawatansari')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github : {data.name}
        <img src={data.avatar_url} alt="Git photu" width={300} />
        </div>
    )
}

export default Github
