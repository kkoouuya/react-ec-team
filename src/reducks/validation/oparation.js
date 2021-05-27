
// const handleName = () => {
//   const [name, setName] = useState('')
//   const [nameError, setNameError] = useState('')

//   if (!e.target.value) {
//     setNameError('名前を入力してください')
//   } else {
//     setNameError()
// }

//   return (
//     <React.Fragment>
//     <div>
//       <label>name</label>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value)
//         }}
//         // onBlur={handleName}
//         onBlur={handleName}
//       />
//       {nameError && <p>{nameError}</p>}
//     </div>
//     </React.Fragment>
//   )
//   }
// };



//   if(!this.loginForm.email){
//     this.errorFind.emailError = "メールアドレスを入力して下さい"
//     // console.log("メール変更")
//   } else if (this.loginForom.email.indexOf('@') == -1){
//     this.errorFind.emailError = "メールアドレスの形式が不正です"
//   } else {
//     this.errorFind.emailError = ""
//   }

//   if(!this.loginForm.postalcode) {
//     this.errorFind.postalcodeError = "郵便番号を入力して下さい"
//   } else if (this.loginForm.postalcode.match(/^[0-9]{3}-[0-9]{4}$/)){
//     // .match正規表現に関するマッチング
//     this.errorFind.postalcodeError = ""

//   } else {
//     this.errorFind.postalcodeError = "郵便番号はXXX-XXXXの形式で入力してください"
//   }

//    if(!this.loginForm.address){
//      this.errorFind.addressError = "住所を変更してください"
//   } else if (this.loginForm.address){
//     this.errorFind.addressError = ""
//   }

//   if(!this.loginForm.tel) {
//     this.errorFind.telError = "電話番号を入力して下さい"
//   } else if (this.loginForm.tel.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/)){
//     this.errorFind.telError = ""
//   } else {
//     this.errorFind.telError = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
//   }

// export const OrderName = (orderName) => {
//   if(orderName === ''){
//     alert ("名前を変更してください");
//   }
//   return false;
// }

