import { useState } from "react"


export default function Team() {
    const teamStyle = {
        border: '3px solid tomato',
        margin: '10px',
        padding: '10px',
        borderRadius: '20px'

    }

    const [team, setTeam] = useState(11);

    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    // const removePlayer = () => {
    //     const newTeam = team - 1;
    //     setTeam(newTeam);
    // }

    const removePlayer = () => {
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}