import Clima from "@/integrations/API/Clima/Clima";
import Image from "next/image";
import { useState } from "react";

export default function Weather(props: any) {
    const clima = new Clima(props.city);
    const [tempCelsius, setTempCelsius] = useState('0°C');
    const [icon, setIcon] = useState('');
    clima.getData().then((e) => {
      setIcon('https:' + e.current.condition.icon);
      setTempCelsius(e.current.temp_c + '°C');
    });
    return <>
    Temperature: {tempCelsius}
    <Image alt="Sol" src={icon} width="40" height="40"/>
    </>
}