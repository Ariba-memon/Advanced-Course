import React, { useState } from 'react'
import axios from 'axios'

import WeatherCard from './WeatherCard'


const Home = () => {

  
  let [cityName,setCityName] = useState("")
  let [data,setData] = useState([])
  let SubmitHandler =async (e) =>{
    e.preventDefault()
    console.log('I am a function')

    try{
  let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`)
  // console.log("response",response) //user ko agar hamay koi cheez nh dekhani ho aur 
 setData(response.data.list)
  //us cheez ko test krna ho 
    } catch(error){
console.log("error",error)
    }
  }
  return (
 <div className='bg-black text-white min-h-screen' >
 <h1>Welcome to My Weather New App</h1>
 <form onSubmit={SubmitHandler}>
CityName: <input className='bg-blue-400' type='text' onChange={(e) => setCityName(e.target.value)
 }  />
<button type='submit' className='bg-white text-black'>Get Weather</button>
 </form>
 {
      data.map((eachForcast, index) => (

<WeatherCard
    key={index}
    date={eachForcast.dt_txt}
    temp={eachForcast.main.temp}
    min={eachForcast.main.temp_min}
    max={eachForcast.main.temp_max}
/>
))
}
 </div>
  )
}

export default Home
