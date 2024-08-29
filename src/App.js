import React from 'react';
import List from './components/List';

function App() {
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5>
        <List />
        <div className='btns'>
          <button >Prev</button>
          <button >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
