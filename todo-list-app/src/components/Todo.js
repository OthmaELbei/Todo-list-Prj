import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/todosContext";

// import Delette todo
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function Todo({ todo, todofunction }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [forDelate, setForDelate] = useState(false);
  const [forUpdet, setForUpdet] = useState(false);
  const [updatedTodo, setupdatedTodo] = useState({
    title: todo.tittle,
    details: todo.conformation,
  });
  // const open = false;
  console.log(updatedTodo);
  function onCHangeofCLick() {
    const updateTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  function handeleClickModel() {
    setForDelate(true);
  }
  function updetClickModel() {
    setForUpdet(true);
  }
  function removeForDelete() {
    setForDelate(false);
  }
  function removeForUpdetDelete() {
    setForUpdet(false);
  }
  function forDleteTodo() {
    const apdetTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(apdetTodos);
    localStorage.setItem("todos", JSON.stringify(apdetTodos));
  }
  function forUpdetconferm() {
    // alert("yhuiop");
    const updateTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return {
          ...t,
          tittle: updatedTodo.title,
          conformation: updatedTodo.details,
        };
      } else {
        return t;
      }
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setForUpdet(false);
  }
  return (
    <>
      {/*start for delate  */}
      <Dialog style={{ direction: "rtl" }} open={forDelate}>
        <DialogTitle id="alert-dialog-title">
          {"هل تريد حدف هدا العنصر بصفة نهائية"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ادا تم الحدف لا سمكنك الاسترجاعه من جديد
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={removeForDelete}>الغاء</Button>
          <Button onClick={forDleteTodo}>تأكيد الحدف</Button>
        </DialogActions>
      </Dialog>
      {/*end for delate  */}
      {/*start for delate  */}
      <Dialog style={{ direction: "rtl" }} open={forUpdet}>
        <DialogTitle id="alert-dialog-title">{"تعديل المهام"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="عنوان المهمة"
              fullWidth
              variant="standard"
              value={updatedTodo.title}
              onChange={(e) => {
                setupdatedTodo({ ...updatedTodo, title: e.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="تفاصيل"
              fullWidth
              variant="standard"
              value={updatedTodo.details}
              onChange={(e) => {
                setupdatedTodo({ ...updatedTodo, details: e.target.value });
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={removeForUpdetDelete}>الغاء</Button>
          <Button onClick={forUpdetconferm}>تأكيد </Button>
        </DialogActions>
      </Dialog>
      {/*end for delate  */}
      <Card
        className="hoverBody"
        sx={{ minWidth: 275, background: "#283593", color: "white" }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  className="iconBotton"
                  aria-label="delete"
                  style={{
                    color: "#b23c17",
                    backgroundColor: "red",
                    border: "3px solid #b23c17",
                  }}
                  onClick={handeleClickModel}
                >
                  <DeleteOutlineIcon />
                </IconButton>
                <IconButton
                  className="iconBotton"
                  aria-label="delete"
                  style={{
                    color: "#1769aa",
                    backgroundColor: "white",
                    border: "3px solid #1769aa",
                  }}
                  onClick={updetClickModel}
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
                <IconButton
                  className="iconBotton"
                  aria-label="delete"
                  style={{
                    color: todo.isCompleted ? "#8bc34a" : "white",
                    backgroundColor: todo.isCompleted ? "white" : "#8bc34a",
                    border: "3px solid #8bc34a",
                  }}
                  onClick={onCHangeofCLick}
                >
                  <CheckIcon />
                </IconButton>
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography style={{ textAlign: "end" }} variant="h5">
                {todo.tittle}
              </Typography>
              <Typography style={{ textAlign: "end" }} variant="h6">
                {todo.conformation}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      ;
    </>
  );
}
