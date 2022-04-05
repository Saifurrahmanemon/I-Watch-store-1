import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/404/NotFound";
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
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
