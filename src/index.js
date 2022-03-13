import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Body from "./Body";
/*
import Footer from "./Footer";
*/
function App() {
    return (
        <div>
            <Navbar />
            <Body />
        </div>    
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));