import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './MyPhoneButton.css'

const MyPhoneButton = () => {
  return (
    <PhoneInput
    inputStyle={{
      width:"100%",
      height:"8.5vh",
      padding: "0vh 0vh 0vh 8vh",
      fontSize:"2.6vh",
      border: "solid .3vh black",
      borderBottom:"solid .3vh black",
      borderRadius:'.6vh',
    }}
    placeholder=''
    country={"br"}
    inputProps={{required: true}}
    />
  )
}

export default MyPhoneButton