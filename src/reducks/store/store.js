// import {
//     createStore as reduxCreateStore,
//     combineReducers,
//     applyMiddleware
// } from 'redux';

// import { connectRouter, routerMiddleware
//     } from 'connected-react-router';

// // import { ProductsReducer } from "./products/reducers"
// import { userReducer } from "../users/reducers"

// export default function createStore(history) {
//     return reduxCreateStore (
//         combineReducers({
//             // products: ProductsReducer,
//             router: connectRouter(history),
//             users: userReducer
//         }),
//         applyMiddleware(
//             routerMiddleware(history)
//         )
//     )
// }


import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { thunk } from 'redux-thunk';// 非同期処理のために必要
import { userReducer } from "../users/reducers";

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            users: userReducer
            // routerは不要になったので削除
        }),
        applyMiddleware(
            thunk // ルーター用ミドルウェアの代わりにこちらを使用
        )
    );
}