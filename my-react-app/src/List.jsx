// import React from 'react';
import PropTypes from 'prop-types';

// in this react app we learn how to make list components.

function List(props) {
  // fruits.sort((a,b) => a.name.localeCompare(b.name));sorting via alphabetical order.
  // fruits.sort((a,b) => b.name.localeCompare(a.name));sorting via REVERSE alphabetical order.
  // fruits.sort((a,b) => a.calories-b.calories); Numeric order.
  // fruits.sort((a,b) => b.calories-a.calories); Reverse Numeric order.
  // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories>=100);
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default List;