import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddButton from "../AddButton/AddButton";
export default function MyInput(props) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        {...props}
        label="Введите название задачи"
        id="fullWidth"
      />
    </Box>
  );
}
