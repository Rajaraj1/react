import React, { useState } from 'react'
import Carousel from './Carousel';
import Card from './Card';
const Home = () => {
    // const state =useState();

    const [Count, setCount] = useState(0);
    const IncNum = () => {
        return (
            setCount(Count + 1)
        )
    }
    return (
        <div>
            <Carousel />
            {/* <h1>Hey i am Home Page</h1> */}
            <div className="container my-2">
                <div className="row">
                    <div className="col">
                        <Card imgsrc='https://source.unsplash.com/1600x900/?laptop,macbook' />
                    </div>
                    <div className="col">
                        <Card imgsrc='https://source.unsplash.com/1600x900/?ipad,iphone' />
                    </div>
                    <div className="col">
                        <Card imgsrc='https://source.unsplash.com/1600x900/?teen,girl' />
                    </div>
                </div>
            </div>
            <div className='container my-4 d-flex justify-content-lg-around'>
                <h1 className='text-dark'>{Count}</h1>
                <button className='btn btn-outline-primary shadow-2xl' onClick={IncNum}>Click Me</button>
            </div>
        </div>
    )
}

export default Home
