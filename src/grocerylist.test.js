import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryList from './GroceryList';

describe('Grocery List', () => {

  it('renders the title of the list in <h1> tags', () => {
    const wrapper = shallow(<GroceryList  />);
    const title = <h1>Grocery List</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should render a list with the complete list of groceries', () => {
    const wrapper = shallow(
      <GroceryList
        groceries={[
          {id: 1, name: "Bananas" },
          {id: 2, name: "Ice Cream" },
          {id: 3, name: "Pickles" }
        ]}
      />
    );
    expect(wrapper.find('.Grocery').length).toEqual(3)
  });
});

describe ('"Clear Groceries" button', () => {
  it('should be disabled unless there is at least one grocery in the list ', () => {
    const wrapper = mount(
      <GroceryList groceries={[]}/>
    );
    expect(wrapper.find('clear-button-purchase')).prop('disabled').toBe(true);
  });

  it('should be enabled when there is at least one grocery item in the list ', () => {
    const wrapper = mount(
      <GroceryList groceries={[
          {id: 1, name: "Bananas" }
        ]} />
    );
    expect(wrapper.find('clear-button')).prop('disabled').toBe(false);
  });
});
