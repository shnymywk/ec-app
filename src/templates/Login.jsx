// import React from "react";
// import { useDispatch } from "react-redux";
// import { push } from "connected-react-router";

// const Login = () => {
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h2>ログイン</h2>
//             <button onClick={() => dispatch(push('/'))}>
//                 ログインする
//             </button>
//         </div>
//     )
// }

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // 1. インポート
import { signInAction } from '../reducks/users/actions'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 2. フックを呼び出し

    return (
        <div>
            <h2>ログイン</h2>
            {/* 3. dispatchを使わず、直接 navigate を呼び出す */}
            <button onClick={
                dispatch(signInAction({uid:"0001", username:"torahack"})),
                () => navigate('/')}>
                ログインする
            </button>
        </div>
    );
};

export default Login;