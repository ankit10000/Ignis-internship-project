import React, { useState } from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { MdOutlineFileUpload } from "react-icons/md";
function Dashboard() {
    function LikeButton() {
        const[liked, setLiked] = useState(false);
        const handleClick = () => {
          setLiked(!liked);
        };
        if(liked)
          return (<FcLike
            size="30" 
            onClick={handleClick}/>)
        return (<FcLikePlaceholder
          size="30" 
          onClick={handleClick}/>)  
      }
    return (
        <div className='container'>
                <h1 className='mt-5 fw-bolder'>Likes</h1>
            <div className="card d-flex flex-row container mt-5 p-0">
                <div>   
                    <img src="https://picsum.photos/350/180" className="card-img-top rounded-2 " alt="..." />
                </div>
                    <div className="card-body">
                        <h5 className="card-title">Keith Barry's Virtual Valentines Brainhacking Show</h5>
                        <p className="card-text">Mon, Feb 15, 2021 2:30AM IST</p>
                        <p className="card-text">Starts at $27.55</p>
                    </div>
                    <div className="card-body card-like position-absolute bottom-0">
                        <Link className="card-link "><MdOutlineFileUpload size="25px"color='black'/></Link>
                        <Link className="card-link m-lg-5 "><LikeButton  /></Link>
                    </div>

            </div>
        </div>
    )
}

export default Dashboard