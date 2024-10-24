import { useState } from "react";

export default function useToggle(initialValue){
    const [isToggle, setIsToggle] = useState(initialValue);
    function alterToggle(){
        setIsToggle(!isToggle);
    }
    return [isToggle, alterToggle]
}