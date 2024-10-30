import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Table.scss";
import Loaderr from "../Loader/Loader";

const AddTable = () => {
  const [Catigories, setCatigories] = useState([]);

  // Kategoriyalarni olish uchun API chaqiruvi
  function GetCtigoria() {
    axios
      .get(`https://autoapi.dezinfeksiyatashkent.uz/api/categories`)
      .then((data) => {
        if (data?.data.success) {
          setCatigories(data?.data?.data);
        } else {
          toast.warning("No data", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Network Error", {
          position: "top-center",
          autoClose: 1500,
        });
      });
  }

  useEffect(() => {
    GetCtigoria();
  }, []); // Bu yerda bo'sh array qo'shilishi kerak


  //DeletCatigories
  function DeletCatigories(item){
    const token = localStorage.getItem('token')
     axios.delete(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${item}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
     }).then((data)=> console.log(data)
     ).then((data)=>{
        if(data.data.success){
            toast.success(data.data.message);
        }else{
            toast.warning(data.data.message)
        }

        GetCtigoria();
     })
  }
  return (
    <div className="table">
      <div className="table_wrapper">
        <div className="table_hed">
          <h1>Categories</h1>
          <button className="btn">Add Categories</button>
        </div>

        <div className="table_body">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name (en)</th>
                <th>Name (ru)</th>
                <th>Status</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Catigories.length > 0 ? (
                Catigories.map((element, index) => (
                  <tr key={element.id}>
                    <td>{index + 1}</td>
                    <td>{element.name_en}</td>
                    <td>{element.name_ru}</td>
                    <td>Active</td>
                    <td>
                      <img
                        width={150}
                        height={80}
                        src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${element.image_src}`}
                        alt="category"
                      />
                    </td>
                    <td>
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">Edit</Button>
                        <Button
                          sx={{ color: "#ff0400", borderColor: "#ff0400" }}
                          variant="outlined"
                        >
                          Delete
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <Loaderr/>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddTable;
