import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Todo() {
  return (
    <>
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
                    backgroundColor: "white",
                    border: "3px solid #b23c17",
                  }}
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
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
                <IconButton
                  className="iconBotton"
                  aria-label="delete"
                  style={{
                    color: "#8bc34a",
                    backgroundColor: "white",
                    border: "3px solid #8bc34a",
                  }}
                >
                  <CheckIcon />
                </IconButton>
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography style={{ textAlign: "end" }} variant="h4">
                المهمة الاولة
              </Typography>
              <Typography style={{ textAlign: "end" }} variant="h6">
                تفاصيل خاص بالمهمة الاولة
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      ;
    </>
  );
}
