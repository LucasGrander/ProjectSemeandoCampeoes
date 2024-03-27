import { ChangeEvent } from 'react';
import'./MyInput.css'

interface Props{
    type: string;
    value?: string;
    placeHolder?: string;
    bgColor?: string;
    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}
function MyInput(props: Props){
    return(
        <input 
        type={props.type} 
        placeholder={props.placeHolder}
        style={{backgroundColor:`${props.bgColor}`}}
        onChange={(props.onChange)}
        value={props.value}/>
        
    );
}
export default MyInput;
