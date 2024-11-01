import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import "./Table.scss";
import Loaderr from "../Loader/Loader";
import { useLocation } from "react-router-dom";

const AddTable = () => {
  const [Catigories, setCatigories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name_en: "",
    name_ru: "",
    image: null,
  });
  const rowsPerPage = 5;
  const locations = useLocation().pathname;

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
  }, []);

  const DeletCatigories = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `https://autoapi.dezinfeksiyatashkent.uz/api/categories/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        GetCtigoria(); // Ma'lumotlarni qayta yuklash
      } else {
        toast.warning("O'chirishda xatolik yuz berdi");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi");
      console.error("Delete Error:", error.response || error.message);
    }
  };
  
  const totalPages = Math.ceil(Catigories.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = Catigories.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Modal Handling
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewCategory({ ...newCategory, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name_en", newCategory.name_en);
    formData.append("name_ru", newCategory.name_ru);
    formData.append("image", newCategory.image);

    axios
      .post(
        `https://autoapi.dezinfeksiyatashkent.uz/api/categories`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          toast.success("Category added successfully!");
          GetCtigoria();
          handleCloseModal();
        } else {
          toast.warning("Failed to add category.");
        }
      })
      .catch(() => {
        toast.error("Error adding category.");
      });
  };

  return (
    <div className="table">
      <div className="table_wrapper">
        <div className="table_hed">
          <h1>Categories</h1>
          <button className="btn" onClick={handleOpenModal}>
            Add Categories
          </button>
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
              {currentData.length > 0 ? (
                currentData.map((element, index) => (
                  <tr key={element.id}>
                    <td>{startIndex + index + 1}</td>
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
                          onClick={() => DeletCatigories(element.id)}
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
                    <Loaderr />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Category Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modal-box">
          <h2>Add New Category</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name (en)"
              name="name_en"
              value={newCategory.name_en}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Name (ru)"
              name="name_ru"
              value={newCategory.name_ru}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AddTable;
