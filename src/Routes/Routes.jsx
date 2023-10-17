import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from "../components/navbar";
import { About } from "../components/about/about";




export function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ < Navbar />}/>
                <Route path="/about" element={< About />} />
           
            </Routes>
        </Router>
    )
}