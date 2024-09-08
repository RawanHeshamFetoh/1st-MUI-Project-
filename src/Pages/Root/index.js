
import { Outlet } from "react-router";
import DrawerComponent from "../../MUIComponents/DrawerComponent";
import Appbar from "../../MUIComponents/Appbar";
import { Box, CssBaseline } from "@mui/material";
import "./style.css"
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import  { useMemo, useState } from "react";
import getDesignToken from "../../styles/theme";
export default function Root() {
    const drawerWidth = 240;
    const [mode , setMode]=useState(
      localStorage.getItem("currentMode") === null 
      ? 'light' : 
      localStorage.getItem("currentMode") === "light" 
      ? "light"
      : "dark"
    )
 
    const [blockOrNone, setBlockOrNone] =useState("none")
    const [drawerType,setDrawerType]=useState("permanent");
    const showDrawer= ()=>{
      setDrawerType("temporary")
      setBlockOrNone("block")
    }
    const hideDrawer = ()=>{
      setDrawerType("permanent")
      setBlockOrNone("none")
    }
    const theme = useMemo(()=>createTheme(getDesignToken(mode)),[mode])
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Appbar drawerWidth={drawerWidth} setBlockOrNone={setBlockOrNone} showDrawer={showDrawer}  />
        <DrawerComponent drawerWidth={drawerWidth} setMode={setMode} blockOrNone={blockOrNone} drawerType={drawerType} hideDrawer={hideDrawer} />
        <Box className="main-page" sx={{ ml:{sm:`${drawerWidth}px`} , mt:"66px"}}>
            <Outlet />
        </Box>
        </ThemeProvider>
    </div>
  );
}
