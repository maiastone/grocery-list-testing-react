import React from 'react';
import classnames from 'classnames';
import './Grocery.css';



const Grocery = ({ id, name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article
      className={
        classnames('Grocery', { starred, purchased, notes })
      }>

      <h3>{name}</h3>

      { quantity &&
        <p className="Grocery-quantity">
        Quantity: {quantity}</p> }
        {notes && <p className="Grocery notes"> Notes:{notes} </p>}

      <button className="Grocery-purchase"
          onClick={onPurchase}
        >{purchased ? 'Unpurchase' : 'Purchase'}
      </button>

      <button className="Grocery-starred"
          onClick={onStar}
        >{starred ? 'Unstar' : 'Star'}
      </button>

      <button className="Grocery-delete"
          onClick={onDelete}
        >Remove
      </button>


    </article>
  );
};

export default Grocery;
