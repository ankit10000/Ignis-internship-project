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
        <div>
            <div className="card d-flex flex-row container mt-5">
                <div>
                    <img src="https://picsum.photos/350/180" className="card-img-top rounded-2 " alt="..." />
                </div>
                <div>
                    <div className="card-body">
                        <h5 className="card-title">Keith Barry's Virtual Valentines Brainhacking Show</h5>
                        <p className="card-text">Mon, Feb 15, 2021 2:30AM IST</p>
                        <p className="card-text">Starts at $27.55</p>
                    </div>
                    <div className="card-body">
                        <Link className="card-link "><MdOutlineFileUpload size="25px"color='black'/></Link>
                        <Link className="card-link m-lg-5 "><LikeButton  /></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard