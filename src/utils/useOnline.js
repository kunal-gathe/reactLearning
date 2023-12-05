import { useEffect, useState } from "react"

const useOnline =()=>{

    const [isOnline, setISOnline] = useState(true);

    const online = ()=>  setISOnline(true);
    const offline = ()=> setISOnline(false);

    useEffect(()=>{

        window.addEventListener("online", online);
        window.addEventListener("offline", offline)


        return ()=>{
            window.removeEventListener("online" , online);
            window.removeEventListener("offline" , offline);
        }

    }, [])

    return isOnline

}

export default useOnline