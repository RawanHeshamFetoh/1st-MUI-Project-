import { useTheme } from "@emotion/react";
import { Brightness4, Brightness7, Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
function DrawerComponent({drawerWidth,setMode,blockOrNone, drawerType,hideDrawer}) {
    const navigate = useNavigate();
    const theme = useTheme();
    const location = useLocation();
    const myList =[
        {text: "Home" , icon:<Home/>,path:"/"},
        {text: "Create" , icon:<Create/>,path:"/create"},
        {text: "Profile" , icon: <Person2/>,path:"/profile"},
        {text: "Setting" , icon:<Settings/>,path:"/setting"},
    ]
    return ( 
        <Drawer sx = {
            {
                display:{xs:blockOrNone, sm:"block"},
                width: `${drawerWidth}px`,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: `${drawerWidth}px`,
                    boxSizing: 'border-box',
                },
            }
        }
        variant = {drawerType}
        anchor = "left" 
        open={true}
        onClose={()=>{hideDrawer()}}
        >
        
        <List>
            <ListItem disablePadding sx={{display:"flex" , justifyContent:"center"}}>
                <IconButton aria-label="change mode" 
                onClick={()=>{
                    localStorage.setItem("currentMode",theme.palette.mode === "light"? "dark" : "light")
                    setMode(theme.palette.mode === "light"? "dark" : "light")
                    }}>
                    {theme.palette.mode === "dark"? <Brightness7 sx={{color:"orange"}}/> : <Brightness4/>}
                </IconButton>
            </ListItem>
            <Divider sx={{mt:"14px"}}/>
            {myList.map((ele) => {
                return(
                    <ListItem disablePadding key={ele.text}>
                <ListItemButton onClick={()=>{navigate(ele.path)}} sx={{
                    bgcolor: location.pathname ===ele.path ? theme.palette.favColor.main : null
                }}>
                    <ListItemIcon>
                    {ele.icon}
                    </ListItemIcon>
                    <ListItemText primary={ele.text} />
                </ListItemButton>
            </ListItem>
                )
            })}
   
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <Logout/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
        </List>
        </Drawer>
    );
}

export default DrawerComponent;