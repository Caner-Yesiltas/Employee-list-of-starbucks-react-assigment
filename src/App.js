import React, { useState } from 'react';
import List from './components/List';
import data from "./helper/data"


function App() {
 
  const itemsPerPage=5;

 const [Page, setPage] =useState(0);

 



  const handlePagePrev =() =>{

  };



  const handlePageNext =() =>{

  };


  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5>
        <List employeeData={currentPageItems} />
        <div className='btns'>
          <button onClick={handlePagePrev} >Prev</button>
          <button onClick={handlePageNext} >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
