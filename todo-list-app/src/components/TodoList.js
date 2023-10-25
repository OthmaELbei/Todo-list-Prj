import Container from "@mui/material/Container";

import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// compnent

import Todo from "./Todo";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";

import { v4 as uuidv4 } from "uuid";
//peplue
import { TodosContext } from "../contexts/todosContext";

import { useContext } from "react";

import { useState, useEffect } from "react";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [tittleinput, setTittleinput] = useState("");

  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });
  const notCompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosTobeRenderen = todos;
  if (displayedTodosType == "completed") {
    todosTobeRenderen = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosTobeRenderen = notCompletedTodos;
  } else {
    todosTobeRenderen = todos;
  }

  const todosJsx = todosTobeRenderen.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  function changdesplayeTape(e) {
    setDisplayedTodosType(e.target.value);
  }

  function handleAddClick() {
    // alert("halle");
    const newTodos = {
      id: uuidv4(),
      tittle: tittleinput,
      conformation: "",
    };
    const updateTodos = [...todos, newTodos];
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTittleinput("");
  }

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{ padding: "10px", overflow: "scroll", maxHeight: "80vh" }}
      >
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* start tgolle bottom */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            value={displayedTodosType}
            exclusive
            onChange={changdesplayeTape}
            aria-label="text alignment"
            color="primary"
          >
            <ToggleButton value="non-completed" aria-label="right aligned">
              الغير المنجز
            </ToggleButton>
            <ToggleButton value="completed" aria-label="centered">
              المنجز
            </ToggleButton>

            <ToggleButton value="all" aria-label="left aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* end tgolle bottom */}
        </CardContent>

        {/* <Todo /> */}
        {todosJsx}

        {/* Input + ADD Buttom */}

        <Grid container spacing={2}>
          <Grid
            xs={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              variant="contained"
              onClick={() => {
                handleAddClick();
              }}
              disabled={tittleinput.length == 0}
            >
              اضافة
            </Button>
          </Grid>
          <Grid
            xs={8}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // style={{ background: "green" }}
          >
            <TextField
              id="outlined-basic"
              label="عنوان المهمة"
              variant="outlined"
              style={{ width: "100%" }}
              value={tittleinput}
              onChange={(e) => {
                setTittleinput(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        {/* Input + ADD Buttom */}
      </Card>
    </Container>
  );
}
