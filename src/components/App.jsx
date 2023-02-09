import React, { useState } from "react";

function createList(listedItems) {
  return <li>{listedItems}</li>;
}

function App() {
  const [listItem, setListItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function updatedItem(event) {
    const itemValue = event.target.value;
    setListItem(itemValue);
  }

  function updatingListItem() {
    setToDoList((prevValue) => {
      return [...prevValue, listItem];
    });

    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updatedItem} type="text" value={listItem} />
        <button type="submit" onClick={updatingListItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{toDoList.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
