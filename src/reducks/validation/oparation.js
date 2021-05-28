import {isValidEmailFormat, isValidRequiredInput} from "../../function/common";

const dispatch = useDispatch();

const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [zipcode, setUserzipcode] = useState("")
const [address, setUseraddress] = useState("")
const [tel, setUsertel] = useState("")

const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
},[setEmail]);

const inputUsername = useCallback((e) => {
    setUsername(e.target.value)
},[setUsername]);

const inputZipcode = useCallback((e) => {
    setUserzipcode(e.target.value)
},[setUserzipcode]);

const inputAddress = useCallback((e) => {
    setUseraddress(e.target.value)
},[setUseraddress]);

const inputTel = useCallback((e) => {
    setUsertel(e.target.value)
},[setUsertel]);


const clear = () => {
    console.log('クリアボタンが発動しました')
    setUsername('')
    setUseraddress('')
    setUsertel('')
    setUserzipcode('')
    setPassword('')
    setConfirmPassword('')
    setEmail('')
}

const pattern = /^[0-9]{3}-[0-9]{4}$/;

export const orderError = (userName, email,zipcode,address,tel, date) => {
    return async (dispatch) => {
        // Validations
        // if(!isValidRequiredInput(userName,email, 
        //     address,zipcode,tel,date)) {
        //     alert('必須項目が未入力です。');
        //     return false
        // }

        if(!userName){
        // if(!isValidRequiredInput(userName)){
            alert ('名前を変更してください');
            return false
        }

        if(!email){
            alert ('メールアドレスを入力してください')
        } else if(!isValidEmailFormat(email)) {
            alert('メールアドレスの形式が不正です。もう1度お試しください。')
            return false
        }

        if(!zipcode){
            alert ('郵便番号を入力してください')
        } else if(!pattern.test(zipcode)){
            console.log(zipcode)
            alert('郵便番号は XXX-XXXX の形式で入力してください')
            return false
        }

        if(!tel){
            alert ('電話番号')
        }
        else if(tel.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/)){
            alert('電話番号は XXXX-XXXX-XXXX の形式で入力してください')
            return false
        }
    }
}
