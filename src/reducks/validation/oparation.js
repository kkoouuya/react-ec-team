
const dispatch = useDispatch();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const [username, setUsername] = useState("")
const [zipcode, setUserzipcode] = useState("")
const [address, setUseraddress] = useState("")
const [tel, setUsertel] = useState("")

const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
},[setEmail]);

const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
},[setPassword]);

const inputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
},[setConfirmPassword]);

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