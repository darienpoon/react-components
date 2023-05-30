
const { useState } = React;

const GroceryListItem = (props) => {
  const[isDone, setIsDone] = useState(false);
  const[isHovered, setIsHovered] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal',
  };
  return (
    <li style={style}
    onClick={() =>setIsDone(!isDone)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      {props.grocerylist}
    </li>
  //<li onClick = {props.onClick}>  {props.item} </li>
  );
};

const GroceryList = (props) => {

  const onListItemClick = (event) => {
    console.log('I got clicked');
  };


  return (
    <ul>
      {props.grocerylist.map((grocerylist) => (
        <GroceryListItem grocerylist={grocerylist} />
      ))}

    </ul>
  );
};

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList grocerylist={['Cucumber', 'Kale']} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);