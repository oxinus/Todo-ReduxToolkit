import { CheckBox, Delete } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TodoContainer = styled('div')({
    height: "70vh",
  });

 export const TodoInput = styled(Input)({
    backgroundColor: "white",
    borderRadius: "2px",
    width: "450px", 
    letterSpacing: "1px",
    padding: "4px 10px"
})

export const AddButton = styled(IconButton)({
    padding: 0,
    position: "absolute",
    right: "30px",
    top: "31px",
    color: "rgb(7 91 199 / 54%)",
    "&:hover": {
        backgroundColor: "transparent",
        color: "rgb(21 132 255 / 54%)"
    }
})

export const Ul = styled("ul")({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: "8px",
    borderRadius: "2px"
})

export const ListContainer = styled("div")({
    width: "100%",
    paddingBottom: "20px",
})

export const TodoForm = styled("form")({
    position: "relative",
    padding: "30px",
    marginBottom: "60px"
})

export const DeleteTodo = styled(Delete)({
    fontSize: "28px",
    color: "red",
    "&:hover": {
        color: "#ff3838"
    }
})

export const CheckTodo = styled(CheckBox)({
    fontSize: "28px",
    "&:hover": {
        color: "#44b049"
    }
})

export const IconBtn = styled(IconButton)({
    padding:"0 4px",
    "&:hover": {
        backgroundColor: 'transparent'
    }
})

export const H1 = styled("h1")({
    color: "white",
    textAlign: "center"
})
