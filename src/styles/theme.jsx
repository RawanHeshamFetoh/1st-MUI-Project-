import { grey, pink } from "@mui/material/colors";

const getDesignToken = (mode)=>({
    palette: {
        mode,
        ...(mode === "light" ?
         { natural:{
            main:'#64748B',
            
          },
        favColor:{
          main : grey[300]
        }
        }:{
            natural:{
              main:pink[500]
            },
            favColor:{
              main : grey[800]
            }
          }
        )
     
      },
})
export default getDesignToken