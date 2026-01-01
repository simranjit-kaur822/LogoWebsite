import React, { useEffect } from "react";


function Github(){
    
    const [data, setData] = React.useState({});
    useEffect(
        () =>{
            fetch("https://api.github.com/users/simranjit-kaur822")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
        },[]
    )

    return( 
        <>
       <div className="bg-gray-700 text-white text-center font-bold text-2xl m-3 p-5 flex flex-col items-center">Github Followers: {data.followers}
       <img src={data.avatar_url} alt="GitHub Avatar" width={200}  />  
       </div>  
       </>
    )
}

export default Github;