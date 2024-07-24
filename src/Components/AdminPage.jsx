import React, { useEffect, useState } from "react";
import LoginAdmin from "./LoginAdmin";
import axios from "axios";

const AdminPage = () => {
  const [admin, setAdmin] = useState(true);
  const [data, setData] = useState([])

  const getData = async () =>{
    const url = await axios.get("https://ashmal-backend.vercel.app/");
    setData(url.data)
  }

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setAdmin(true)
    }else{
      setAdmin(false)
    }
    getData()
  }, [])
  
  return (
    <>
      {admin ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-10">
          {data.map((info) => {
            return (
          <div key={info._id} className="cards mx-auto mt-10  md:w-[80%] w-[95%] rounded bg-white px-4 py-3 text-black">
            <div className="top-contant">
              <h1 className="text-lg font-bold">
                Name
                <span className="block text-left text-[15px] font-normal text-gray-600">
                  {info.name}
                </span>
              </h1>
              <h1 className="text-lg font-bold">
              Email 
                <span className="block text-left text-[15px] font-normal text-gray-600">
                {info.email}
                </span>
              </h1>
            </div>
            <h1 className="text-lg font-bold"> Messages
              <span className="block text-left text-[15px] font-normal text-gray-600">
                {info.message}
              </span>
            </h1>
          </div>
            )
          })}
        </div>
      ) : (
        <LoginAdmin  setAdmin={setAdmin}/>
      )}
    </>
  );
};

export default AdminPage;
