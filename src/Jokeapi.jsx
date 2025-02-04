import React, {useState,useEffect } from 'react'
import Front from './Front';


const Jokeapi = () => {
    const[joke,setJoke] = useState({setup:'', punchline: ''})
    const fetchjoke = () => {
        const url = "https://official-joke-api.appspot.com/random_joke";
        fetch(url)
            .then((response) =>
                //    console.log(response.json)
                response.json()
            )
            .then((data) => {
                setJoke(data);
            });
    }
    useEffect(() => {
        fetchjoke()
    }, []);
  return (
    <div>
          <Front joke={joke.setup} punchline={joke.punchline} fetchjoke = {fetchjoke} />
    </div>
  )
}

export default Jokeapi
