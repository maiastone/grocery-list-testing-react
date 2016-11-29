import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery';
import GroceryList from './GroceryList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: []
    }
  }

  onPurchase() {
    console.log('purchase')
  }

  onStar() {
    console.log('star')
  }

  onDelete() {
    console.log('remove')
  }

  onClear() {
    console.log('clear')
  }

  render() {
    return (
      <div>
      <GroceryList groceries={this.state.groceries}
      onClear={this.onClear}
      />
      <Grocery
        name={'bananas'}
        starred={false}
        purchased={false}
        notes={''}
        onPurchase={this.onPurchase}
        onStar={this.onStar}
        onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
