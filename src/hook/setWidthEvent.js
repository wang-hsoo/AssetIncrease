import { useEffect, useState } from "react";

function UseWidhtEvent(value){
    const [width, setWidth] = useState(window.innerWidth);
    const [onOff, setOnOff] = useState(false);

    const handleResize = () => {
        setWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setOnOff( width < value ? true : false)
    },[width])

    return { width, onOff };
}

export default UseWidhtEvent;