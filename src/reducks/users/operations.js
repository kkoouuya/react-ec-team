import {signInAction} from "./actions";
import { useHistory } from 'react-router'; 
// import { push } from 'connected-react-router';

export const signIn = () => {

  return async (dispatch,getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if(!isSignedIn){
      const url = "https://github.com/users/HarunaYamaguchi"
    
      const response = fetch(url)
      .then(res => res.json())
      .catch(() => null)

      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001", // (仮)
        username: username// (仮)
      }))
      dispatch.push('/');
    }

    // if(!isSignedIn) {
    //   const userData = await emailSignIn(email, password)
    //   dispatch(signInAction({
    //     isSignedIn: true
    //     uid: "00001", // (仮)
    //     username: "田中太郎"// (仮)
    //   }))
    // }
  }
}