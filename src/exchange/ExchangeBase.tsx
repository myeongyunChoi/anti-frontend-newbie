import { EurInfoTypes } from "../types/type";
import GetEurInfo from "../Hook/Krweur";
const ExchangeBase =  ({ eurInfo }: { eurInfo: EurInfoTypes }) => {
    const data = GetEurInfo();
    return (
        <>
            <div>환율기준 (1 유로)</div>
            <div>
                {eurInfo.basePrice}
                {eurInfo.basePrice - eurInfo.openingPrice > 0 ? "▲": "▼" }
                {eurInfo.changePrice}원 (
                {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
            </div>
        </>
    )
}

export default ExchangeBase;