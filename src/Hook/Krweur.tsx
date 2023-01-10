import { useEffect, useState } from "react";
import { EurInfoTypes } from "../types/type";

const GetEurInfo = () => {
    const [isReady, setReady] = useState(false);
    const [eurInfo, setEurInfo] = useState<EurInfoTypes>();

    const getData = async () => {
        const krweur = await fetch(
            "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
        )
            .then((response) => response.json())
            .then((array) => array[0]);
        setEurInfo(krweur);
        setReady(true);
    }
    useEffect(() => {
        getData();
    }, [getData]);
    return { isReady, eurInfo };
};

export default GetEurInfo;


