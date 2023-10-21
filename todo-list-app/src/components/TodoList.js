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

//peplue
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

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

export default function TodoList() {
  const [todos, setTodos] = useState(initialtodos);
  const [tittleinput, setTittleinput] = useState("");

  function handlecheckClick(todoId) {
    const updateTodos = todos.map((t) => {
      if (t.id == todoId) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
    console.log(todos);
  }

  const todosJsx = todos.map((t) => {
    return <Todo key={t.id} todo={t} todofunction={handlecheckClick} />;
  });

  function handleAddClick() {
    // alert("halle");
    const newTodos = {
      id: uuidv4(),
      tittle: tittleinput,
      conformation: "",
    };
    setTodos([...todos, newTodos]);
    setTittleinput("");
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} style={{ padding: "10px" }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* start tgolle bottom */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            //   value={alignment}
            exclusive
            //   onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right" aria-label="right aligned">
              الغير المنجز
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              المنجز
            </ToggleButton>

            <ToggleButton value="left" aria-label="left aligned">
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
