import React, { useState } from 'react';
import './App.css';
import { customers } from './constant';
import { CustomerCard } from './components/CustomerCard';
import { ImageGrid } from './components/ImageGrid';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  return (
    <div className="App">
      <header className="app-header"><h3>Customer Details</h3></header>
      <div className='container'>
        <div className='left-sidebar'>
          {
            customers.map((item, index) => {
              return (
                // <div>
                <CustomerCard
                  item={item}
                  key={index}
                  selected={selectedCustomer.id === index}
                  onClick={() => setSelectedCustomer(item)} />
                // {/* </div> */}
              )
            })
          }
        </div>
        {
          selectedCustomer &&
          <div className='details-container'>

            <div id='customer-name'> 
              <span>{selectedCustomer.name}</span>
              <span>{selectedCustomer.title}</span>
              <span>{selectedCustomer.address}</span>
            </div>
            <div id='customer-details'>
              {selectedCustomer.details}
            </div>
            <ImageGrid />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
