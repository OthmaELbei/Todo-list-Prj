import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { TodosContext } from "./contexts/todosContext";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

const initialtodos = [
  {
    id: uuidv4(),
    tittle: "المهمة الاولة",
    conformation: "dfghjklmùpoklmiytg",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    tittle: "المهمة الاولة",
    conformation: "dfghjklmùpoklmiytg",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    tittle: "المهمة الاولة",
    conformation: "dfghjklmùpoklmiytg",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialtodos);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
