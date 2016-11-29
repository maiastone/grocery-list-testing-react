import React from 'react';
import Grocery from './Grocery';


const GroceryList = ({

  groceries,
  onPurchase,
  OnStar,
  OnDelete,
  onClear }) => {
    return (
      <div>
        <h1>Grocery List</h1>

        <button className="clear-button-purchase"
          disabled={!groceries.length}
          onClick={onClear}>
          Clear Groceries
        </button>

        {groceries.map(item =>
          <Grocery
            key={item.id}
            name={item.name}
          />
        )}
      </div>
    );
  };

GroceryList.defaultProps = {
  groceries: []
};


export default GroceryList;
