import { Paper, Typography, IconButton, Box } from "@mui/material";
import "./style.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
export default function Home() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3100/myData")
            .then((response) => response.json())
            .then((data) => setMyData(data));
    }, []);
    
    let totalPrice=0
    return (
        <div>
            <Box>
                {myData.map((ele) => {
                    totalPrice+=ele.price;
                    return (
                        <Paper className="buys" key={ele.id}>
                            <Typography variant="h6" className="buysName" sx={{textTransform:"uppercase"}}>
                                {ele.title}
                            </Typography>
                            <Typography variant="h6" className="price">
                                ${ele.price}
                            </Typography>
                            <IconButton aria-label="close" className="closeBtn" onClick={() => {
                                fetch(`http://localhost:3100/myData/${ele.id}`,{method:'DELETE'})
                                const newArr= myData.filter((myObj)=>{
                                    return myObj.id !== ele.id
                                })
                                setMyData(newArr)
                            }}>
                                <Close sx={{ fontSize: "20px" }} />
                            </IconButton>
                        </Paper>
                    )
                })}
                <Typography variant="h6" color="initial"  sx={{mt:2, textTransform:"capitalize", textAlign:"center"}}>&#128073; you spend ${totalPrice}</Typography>
            </Box>
        </div>
    );
}
