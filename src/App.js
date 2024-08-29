import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
  const itemsPerPage = 5; // her sayfada 5 veri gösterilecek

  const [page, setPage] = useState(0); // başlangıçta değerimiz 0'dır (sayfa değeri)

  const pageStartIndex = page * itemsPerPage; // her sayfada 5 veri var, bunu ilk değer ile çarp, sonuç 0 olur (0. datadan veri alınır)

  const currentPageItems = data.slice(
    pageStartIndex,
    pageStartIndex + itemsPerPage
  ); // kısacası amaç, datadan her sayfada 5'erli veri çekmek ve bunu değişkene atamak

  const handlePagePrev = () => {
    setPage((prevPage) => {
      let newPage = prevPage - 1;
      if (newPage < 0) {
        newPage = Math.floor((data.length - 1) / itemsPerPage);
      }
      return newPage;
    });
  };

  const handlePageNext = () => {
    setPage((prevPage) => {
      let newPage = prevPage + 1;
      if (newPage > Math.floor((data.length - 1) / itemsPerPage)) {
        newPage = 0;
      }
      return newPage;
    });
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List Of Starbucks</h3>
        <h5>
          (Employees {pageStartIndex + 1} to{" "}
          {pageStartIndex + currentPageItems.length})
        </h5>
        <List employeeData={currentPageItems} />
        <div className="btns">
          <button onClick={handlePagePrev}>Prev</button>
          <button onClick={handlePageNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
