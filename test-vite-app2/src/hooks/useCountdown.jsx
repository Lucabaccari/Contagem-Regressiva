//Hooks é o que permite o uso de vários recursos de forma simples através de funções. Eles também ajudam a organizar a lógica utilizada dentro dos componentes.

import { useState } from "react"; //Um dos React Hooks

const useCountdown = (date) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const countdown = () => {

        //Data desejada
        const countDate = new Date(date).getTime() //getTime retorna o tempo em milissegundos

        //Data atual
        const now = new Date().getTime();

        //Subtração entre as datas
        const interval = countDate - now;

        const second = 1000; //sec = 1000 milisec
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)
        //Math.floor retorna o menor valor, sendo possível acessá-lo e criar as variáveis necessárias

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);

    }
    
    setInterval(countdown, 1000)// Atualiza a cada 1 segundo
    return [day, hour, minute, second];
        
}
export default useCountdown;