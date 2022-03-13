import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Body from "./Body";
import Mobilefooter from "./Mobilefooter";

function App() {
    return (
        <div>
            <Navbar />
            <Body />
            <Mobilefooter />
        </div>    
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));