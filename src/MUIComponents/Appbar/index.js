import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Link , Typography , Toolbar, AppBar, IconButton} from "@mui/material";
function Appbar({drawerWidth,showDrawer}) {
    return ( 
        <AppBar position="static" sx={{
          width :{sm:`calc(100% - ${drawerWidth}px)`}  , ml:{sm:`${drawerWidth}px`}  }}>
        <Toolbar>
     <IconButton sx={{display:{sm:"none"}}} onClick={()=>{showDrawer()}}>
      <MenuIcon/>
     </IconButton>
          <Link href="/" sx={{ flexGrow: 1 ,"&:hover":{fontSize:"16.5px"} }} underline="none"color="inherit" > my expenses</Link>
          <Typography variant="p" color="inherit" sx={{mr:2}}> Rawan Hesham</Typography>
          <Avatar  alt="rawanHesham" src="https://mui.com/static/images/avatar/3.jpg"/>
        </Toolbar>
      </AppBar>
     );
}

export default Appbar;