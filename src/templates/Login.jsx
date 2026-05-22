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
import { useNavigate } from 'react-router-dom';
import { signIn } from '../reducks/users/operations'


// コンポーネント
const Login = () => {
    const dispatch = useDispatch(); // ここで初めて呼ぶ
    const navigate = useNavigate(); // ここで初めて呼ぶ

    const handleLogin = async () => {
        // thunkを経由してActionを実行
        await dispatch(signIn());
        navigate('/');
    };

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={handleLogin}>ログイン</button>
        </div>
    );
};
export default Login