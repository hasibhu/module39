import { useEffect, useState } from "react"


export default function Users() {
    //Step 1:  declare a state to hold data 
    const [users, setUsers] = useState([]);
    
    //transformation>>>> 
    // useEffect(, [])
    // useEffect(()=>{}, [])
    /**
         useEffect(() => {
        }, []) 
    */
    
    /**
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data => console.log(data))   
    }, []) 
    */

    useEffect(() => {  //'() =>' is an annonimous funcion 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setUsers(data))
    }, [])


    const handleAdd = ()=> {
        const newUsers = users + 1;
        // console.log(newUsers);
        setUsers(newUsers)
    }

    return (
        <div>
            <h3>Users: {users.length}</h3>
            <button onClick={handleAdd}>Add </button>

        </div>
    )
}


// Declare a state to hold data
//useeffect with call vack and dependency array
//use fetch to load data 