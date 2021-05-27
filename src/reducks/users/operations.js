import {db, auth, FirebaseTimestamp} from '../../firebase/index';
import {push} from 'connected-react-router'
import {isValidEmailFormat, isValidRequiredInput} from "../../function/common";
import {hideLoadingAction, showLoadingAction} from "../loading/actions";

//const usersRef = db.collection('users')

const pattern = /^[0-9]{3}-[0-9]{4}$/;


export const signUp = (username, email, password, confirmPassword,zipcode,address,tel) => {
    return async (dispatch) => {
        // Validations
        if(!isValidRequiredInput(email, password, confirmPassword,address,zipcode,tel)) {
            alert('必須項目が未入力です。');
            return false
        }

        if(!isValidEmailFormat(email)) {
            alert('メールアドレスの形式が不正です。もう1度お試しください。')
            return false
        }
        // if (password != confirmPassword) {
        //     alert('パスワードが一致しません。もう1度お試しください。')
        //     return false
        // }
        if (password.length < 6) {
            alert('パスワードは6文字以上で入力してください。')
            return false
        }
        if(pattern.test(zipcode)){
            alert('郵便番号は XXX-XXXX の形式で入力してください')
            return false
        }
        if(tel.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
            alert('電話番号は XXXX-XXXX-XXXX の形式で入力してください')
            return false
        }

        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                dispatch(showLoadingAction("Sign up..."))
                const user = result.user;
                if (user) {
                    const uid = user.uid;
                    const timestamp = FirebaseTimestamp.now();

                    const userInitialData = {
                        customer_id: "",
                        created_at: timestamp,
                        email: email,
                        payment_method_id: "",
                        uid: uid,
                        updated_at: timestamp,
                        username: username,
                        zipcode:zipcode,
                        address:address,
                        tel:tel,
                    };

                    db.collection(`users/${uid}/userinfo`).doc().set(userInitialData).then(async () => {
                        console.log('DB保存成功')
                        dispatch(push('/'))
                        dispatch(hideLoadingAction())
                    })
                }
            })
    }
}