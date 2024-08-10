import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initalTodoItems = [];
  const [todoItems, setTodoItems] = useState(initalTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currVlaue) => [
      ...currVlaue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>

      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;