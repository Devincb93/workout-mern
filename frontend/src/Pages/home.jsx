import { useEffect, useState } from "react"

const Home = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        

        const fetchWorkouts = async ()=> {
           const resp = await fetch('http://localhost:4000/api/workouts') 
           const json = await resp.json()

           if (resp.ok) {
            setWorkouts(json)
            console.log(json)
           }
        }
        fetchWorkouts()
    },[])
    return (
        <div className="Home">
            <h2>Home</h2>
        </div>
    )
}

export default Home