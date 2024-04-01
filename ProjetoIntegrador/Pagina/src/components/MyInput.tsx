import { useState } from 'react';
import'./MyInput.css'

interface Props{
    onClick?: () => void;
    onChange?: () => void;
    type?: string;
    value?: string;

    className?: string;
    enter?: string;
    leave?: string;

    width?: string;
    height?: string;

    cursor?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    transition?: string;
}

const MyInput = ({className, enter, leave, onClick, onChange, type, value, width, height, cursor, display, justifyContent, alignItems, border, borderBottom, borderRadius, padding, fontSize, fontWeight, transition, }: Props) => {

    const [hover, setHover] = useState(false)
        const handleMouseEnter = () => {
            setHover(true)
        }

        const handleMouseLeave = () => {
            setHover(false)
        }

    const estiloInput: React.CSSProperties = {width, height, cursor, display, justifyContent, alignItems, backgroundColor: hover ? enter : leave, border, borderBottom, borderRadius, padding, fontSize, fontWeight, transition,}

    return(
        <input
        value={value}
        className={className}
        style={estiloInput}
        type={type}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
    );
}
export default MyInput;