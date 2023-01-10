import { useState } from "react"
import { EurInfoTypes } from "../types/type";
const ExchangeInput = ({ eurInfo }: { eurInfo: EurInfoTypes }) => {

    const [value, setValue] = useState<number>(0);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+ e.target.value)
    }
    return (
        <>
            <input onChange={onChange} /> 유로 ▶︎ <input disabled /> 원
        </>
    )
}

export default ExchangeInput;
