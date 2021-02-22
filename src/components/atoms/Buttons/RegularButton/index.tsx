import * as React from "react";

interface ButtonProps {
    color: string,
    children: string
}

const RegularButton = (props: ButtonProps) => {
    const [ counter, setCounter] = React.useState(0)

    const handleIncrement = () => {
        setCounter(prevState => prevState + 1)
    }

    return (
        <button  type="button" 
            style={{backgroundColor: props.color}} 
            onClick={handleIncrement}
            value={counter} 
            {...props}>
            {props.children} <strong>{counter}</strong>
        </button>
    )
}

export default RegularButton