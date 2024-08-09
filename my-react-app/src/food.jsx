// a react component is a react jsx code containing html and an js code within it which we can reuse in our project.

function Food(){
  const food1 = 'orange';
  const food2 = 'apple';
  return(
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;