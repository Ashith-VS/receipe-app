import React,{ useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
// create context
export const AllMenuContext = React.createContext();

export function AllMenu(props) {  
    let [menu, setMenu] = useState([]);
    let [loading, setLoading] = useState(false);

     // Get All Items
const getAllItems = async () =>{
    setLoading(true);
 const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
 setMenu(response.data.meals);
 setLoading(false);
}
// console.log(menu);
       
    useEffect(() => {
        getAllItems();
    }, []);
    
    return (
        <div>
            <AllMenuContext.Provider value={menu}>{!loading ? props.children : <Loader />}</AllMenuContext.Provider>
        </div>
    );
}
