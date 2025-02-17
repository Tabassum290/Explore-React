import { useState } from "react"

export default function Team (){
    const [team,setTeam] = useState(11);
const teamStyle = {
    border : '2px solid purple',
    margin : '15px',
    padding: '15px',
    borderRadius : '12px'
}
const handleAdd=()=>{
const newTeam = team + 1;
setTeam(newTeam);
}
const handleReduce= () => {
    const newTeam = team - 1;
    setTeam(newTeam);
}
    return(
        <div style={teamStyle}>
            <h3>Players :{team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}