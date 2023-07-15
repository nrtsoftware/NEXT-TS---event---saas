import Clima from "@/integrations/API/Clima/Clima";
import { useState } from "react";

export default function Weather() {
    const clima = new Clima('Guarulhos');
    const [tempCelsius, setTempCelsius] = useState('0ºC');
    clima.getData().then((e) => {
      //console.log(e.current.temp_c)
      setTempCelsius(e.current.temp_c + 'ºC');
    });
    return <>
    Temperature: {tempCelsius}
    </>
}