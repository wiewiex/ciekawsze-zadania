import React, {useEffect} from "react";

const Users = ({ users, setUsers}) => {

    useEffect(() => {
        fetch("https://retoolapi.dev/H0IDrh/data")
            .then(response => response.json())
            .then(result => {
                console.log("pobrano: ", result);
                setUsers(result);               
                
            }).catch(err => console.log(err))
    }, [])

        console.log("state users: ", users)

        return (
        <ul>Users:
            {users.map((el, i) => {
                return <li key={el.id}>{el.name} {el.surname}, {el.age} years, {el.city} ({el.gender})</li>
            }
            )}
        </ul>
    )
}

export default Users;