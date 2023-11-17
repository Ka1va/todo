import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const AddButton = ({ ...props }) => {
  return (
    <div>
      <Fab {...props} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};
export default AddButton;
