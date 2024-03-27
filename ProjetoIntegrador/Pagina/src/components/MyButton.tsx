import React from 'react';
import { useState } from 'react';
import './MyButton.css'

interface Props{
    onClick: () => void;

    enter?: string;
    leave?: string;
    children?: React.ReactNode;

    width?: string;
    height?: string;

    cursor?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: string;
    transition?: string;
}

const MyButton = ({enter, leave, onClick, children, width, height, cursor, display, justifyContent, alignItems, border, borderRadius, fontSize, fontWeight, transition, }: Props) => {

    const [hover, setHover] = useState(false)
        const handleMouseEnter = () => {
            setHover(true)
        }

        const handleMouseLeave = () => {
            setHover(false)
        }

    const estiloBotao: React.CSSProperties = {width, height, cursor, display, justifyContent, alignItems, backgroundColor: hover ? enter : leave, border, borderRadius, fontSize, fontWeight, transition,}

  return (
    <button style={estiloBotao} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
    </button>
  )
}

export default MyButton