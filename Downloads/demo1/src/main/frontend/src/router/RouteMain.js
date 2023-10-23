import {Route, Routes} from "react-router-dom";
import App from "../App";
import Bulletin from "../Bulletin";
import BulletinBoard from "../pages/BulletinBoard";
import Project from "../Project";
import Main from "../pages/Main";
import BulletinForm from "../pages/BulletinForm";

function RouteMain(props){

    return(

        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project" element={<Project />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/bulletinboard" element={<BulletinBoard />} />
            <Route path="/bulletinform" element={<BulletinForm />} />
        </Routes>
    );
}

export default RouteMain;