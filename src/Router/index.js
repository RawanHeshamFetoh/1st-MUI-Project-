import { Route, BrowserRouter as Router, Routes   } from "react-router-dom"
import Create from "../Pages/Create"
import Root from "../Pages/Root"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"
export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Root/>} >
                    <Route index element={<Home/>} />
                    <Route path="/create" element={<Create/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>    
        </Router>
    )
}