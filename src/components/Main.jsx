import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Dates} from './date.js';


function Main() {

    let H = new Date();
    var Time = H.toLocaleTimeString([], {timeStyle: 'short'});

    const [Hours , setHours] = useState(Time);
    const [Data , setData] = useState({});

    const [Latitude , setLatitude] = useState();
    const [Longitude , setLongitude] = useState();


    const SavePosition = (position) =>{
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude)
    }
    
   
    const weather = async () => {
        try{
            await window.navigator.geolocation.getCurrentPosition(SavePosition);
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&units=metric&appid=4fa2c1fc6a9f64d41db2493b7be62565`);
            setData(res.data);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        weather();
    },[Latitude,Longitude])

    const UpdatedTime = () => {
        let H = new Date();
        var NewHour = H.toLocaleTimeString([], {timeStyle: 'short'});
        setHours(NewHour);
    }
    setInterval(UpdatedTime,1000);


    //Greeting based on time of day
    var TimeHour = new Date().getHours();

    return (
        <>
        <div className='center'>
            {(typeof Data.main != "undefined") ? (
            <div>
                <div className='weather'>
                    <div className='Greeting'>
                        {TimeHour < 12 ? `Bom Dia` : TimeHour < 18 ? `Boa Tardes` : `Boa Noite`}
                    </div>
                    <div className='Date'>{Dates}</div>
                    <div className='Hour'>{Hours}  </div>
                    <div className='Datas'>
                        <div className='Center-Data'>
                            <div className='City'>{Data.name}</div>
                            <div className='Grades'>{JSON.parse(Data.main.temp).toFixed(0)}°C</div>
                        </div>
                        <div className='Other'>
                            <div className='Box'>
                                <div className='Wind'>Wind: {Data.wind.speed}Km/h </div>
                                <div className='Pressure'>Pressure: {Data.main.pressure}</div>
                                <div className='Humidity'>Humidity: {Data.main.humidity}% </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : ("")}
        </div>
        <div id="clouds">
            <div className="cloud x1"></div>
            <div className='cloud x2'></div>
            <div className='cloud x3'></div>
            <div className='cloud x4'></div>
            <div className='cloud x5'></div>
            
        </div>
        </>
    )
}

export default Main
