import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import TravelList from "./travel/TravelList";
import News from "./news/News";
import TravelDetail from "./travel/TravelDetail";
import BoardList from './board/BoardList';
import BoardDetail from './board/BoardDetail';
import BoardInsert from './board/BoardInsert';
import BoardDelete from "./board/BoardDelete";
import BoardUpdate from "./board/BoardUpdate";
function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route path={"/travel/travel_list"} element={<TravelList/>}/>
                <Route path={"/news/news"} element={<News/>}/>
                <Route path={"/travel/travel_detail/:no"} element={<TravelDetail/>}/>
                <Route path={"/board/board_list"} element={<BoardList/>}/>
                <Route path={"/board/board_detail/:no"} element={<BoardDetail/>}/>
                <Route path={"/board/board_insert"} element={<BoardInsert/>}/>
                <Route path={"/board/board_delete/:no"} element={<BoardDelete/>}/>
                <Route path={"/board/board_update/:no"} element={<BoardUpdate/>}/>
            </Routes>
            <Footer/>
        </Router>
    );



}

export default App;
