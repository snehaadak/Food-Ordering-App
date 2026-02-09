import { useEffect, useState } from "react"
import { MENUID_URL } from "./constants";

const useRestuarantMenu = (resID) => {

    const [resInfo, setresInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENUID_URL + resID)
        const json = await data.json()
        setresInfo(json.data)
    }

    return resInfo
}

export default useRestuarantMenu