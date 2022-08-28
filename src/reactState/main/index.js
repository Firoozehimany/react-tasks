import { useState, Fragment } from "react"
import Calculator from "../components/calculator"
export default function Coaunter() {
    const [coaunter, setcoaunter] = useState(0)
    const plusCoaunt = () => setcoaunter(coaunter + 1)
    const minusCoaunt = () => setcoaunter(coaunter - 1)
    
    return (
        <Fragment>
            <p>result from main component :</p>
            <h2>{coaunter}</h2>
            <p>result from main component * 3 :</p>
            <Calculator data={coaunter}></Calculator>
            <button onClick={plusCoaunt}>PLUS</button>   
            <button onClick={minusCoaunt}>MINUS</button>
        </Fragment>
    )
}