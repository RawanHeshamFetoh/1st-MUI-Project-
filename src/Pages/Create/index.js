import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router";
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.natural.main,
    '&:hover': {
      backgroundColor: theme.palette.natural.main,
      Scale:".99"
    },
  }));
export default function Create() {
  const [title, setTitle]=useState("");
  const [price, setPrice]=useState(0)
  const navigate=useNavigate();
  return (
    <Box component="form" width="380px" autoComplete="off" >
      <TextField
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        fullWidth={true}
        label="Transcation Title"
        sx={{mt:"22px"}}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">&#128073;</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <TextField
      onChange={(e) => {
        setPrice(Number(e.target.value));
      }}
        fullWidth={true}
        label="Amount"
        sx={{mt:"22px"}}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
        <ColorButton variant="contained" sx={{mt:"22px"}} onClick={() => {
          fetch("http://localhost:3100/myData",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({title,price})
          }).then(() => {
            navigate("/")
          })
        }}>submit</ColorButton>
    </Box>
  );
}
