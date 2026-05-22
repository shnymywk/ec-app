// import React from "react";
// import { Routes, Route } from "react-router"
// import { Login, Home } from "./templates"

// const Router = () => {
//     return (
//         <Routes>
//             <Route exact path={"/login"} component={Login}/>
//             <Route exact path={"(/)?"} component={Home}/>
//         </Routes>
//     )
// }

// export default Router

import { Routes, Route } from 'react-router-dom';
import { Login, Home } from './templates'; // 必要なコンポーネントをインポート

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Router;