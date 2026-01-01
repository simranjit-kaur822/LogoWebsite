import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams();
    return(
        <div className="bg-orange-700 text-white text-center font-bold text-2xl m-3 p-5">UserId : {userId}</div>
    )
}

export default User;