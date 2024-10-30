import React, { useState, useEffect } from "react"; // useEffect qo'shildi
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  // Tokenni tekshirish
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); 
    }
  }, [navigate]);

  const data = [
    { id: 1, ism: "Ali", yoshi: 25, kasbi: "Dasturchi", manzil: "Toshkent" },
    { id: 2, ism: "Begzod", yoshi: 30, kasbi: "Dizayner", manzil: "Samarqand" },
    { id: 3, ism: "Gulbahor", yoshi: 27, kasbi: "Muallim", manzil: "Buxoro" },
    { id: 4, ism: "Javlon", yoshi: 35, kasbi: "Shifokor", manzil: "Farg'ona" },
    { id: 5, ism: "Malika", yoshi: 23, kasbi: "Talaba", manzil: "Xiva" },
    { id: 6, ism: "Zafar", yoshi: 29, kasbi: "Muhandis", manzil: "Navoiy" },
    { id: 7, ism: "Asal", yoshi: 32, kasbi: "Rassom", manzil: "Qarshi" },
    { id: 8, ism: "Bekzod", yoshi: 40, kasbi: "Sportchi", manzil: "Jizzax" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Satrlarni aniqlash
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Sahnani o'zgartirish funksiyasi
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dash">
      <div className="dash_wrapper">
        <div className="dash_hed">
          <h1>Catigories</h1>
          <button className="btn">Add Catigories</button>
        </div>
        <div className="dash_body">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ism</th>
                <th>Yoshi</th>
                <th>Kasbi</th>
                <th>Manzil</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.ism}</td>
                  <td>{item.yoshi}</td>
                  <td>{item.kasbi}</td>
                  <td>{item.manzil}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={currentPage === number + 1 ? "active" : ""}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
