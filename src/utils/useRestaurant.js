import { useEffect, useState } from "react";
import { FETCH_MENU_DATA } from "../../config";


const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getResMenuData()
    },[])

    async function getResMenuData(){
        let data = await fetch( FETCH_MENU_DATA + id )
        let json = await data.json()
        setRestaurant(json?.data)
    }

    return restaurant

 }

 export default useRestaurant;