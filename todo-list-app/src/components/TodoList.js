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

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
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

        <Todo />
      </Card>
    </Container>
  );
}
