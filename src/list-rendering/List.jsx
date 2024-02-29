function List(props){
  const itemList = props.item;

  const listItems = itemList.map((item) => <li key={item.id}> {item.name} : {item.calories}</li>);

  return(<ol>{listItems}</ol>)
}

export default List;