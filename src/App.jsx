import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Layout/About/About";
import Blog from "./Layout/Blog/Blog";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Header from "./Layout/Header/Header";
import Home from "./Layout/Home/Home";
import Reviews from "./Layout/Review/Reviews";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard></Dashboard>}
                ></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </div>
    );
}

export default App;
