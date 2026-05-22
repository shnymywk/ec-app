import { signInAction } from "./actions";
import { useNavigate } from 'react-router-dom'; // 1. インポート

// 引数としてdispatchとgetStateを受け取る「だけ」にする
export const signIn = () => {
    return async (dispatch, getState) => {
        // ここにHooksは書かない！
        const state = getState(); 
        const isSignedIn = state.users.isSignedIn;

        if (!isSignedIn) {
            const url = 'http://api.github.com/users/shnymywk';
            const response = await fetch(url)
                                    .then(res => res.json())
                                    .catch(() => null);

            if (response) {
                dispatch(signInAction({
                    isSignedIn: true,
                    uid: "0001",
                    username: response.login
                }));
            }
        }
    };
};

