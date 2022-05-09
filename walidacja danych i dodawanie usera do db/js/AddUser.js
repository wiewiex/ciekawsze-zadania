import React, { useState } from "react";

const AddUser = ( {setUsers} ) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: "450px"
    }

    const [inputValues, setInputValues] = useState({});  
    const handleChange = (key, value) => {
        setInputValues(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        });
    }

    
    const v = inputValues;
    const isCorrect = {
        name: v.name ? v.name.length > 2 && isNaN(parseInt(v.name)) : null,
        surname: v.surname ? v.surname.length > 2 && isNaN(parseInt(v.surname)) : null,
        age: v.age ? !isNaN(parseInt(v.age)) && parseInt(v.age) > 17 && parseInt(v.age) < 100: null
    }

    const [messageToUser, setMessageToUser] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isCorrect.name && isCorrect.surname && isCorrect.age) {
               
               fetch("https://retoolapi.dev/H0IDrh/data", { 
                    method: "POST",
                    body: JSON.stringify(inputValues),
                    headers: {
                        "Content-Type": "application/json"
                   }
                })
                
                .then(res => res.json())
                    
                .then(newUser => {
                    console.log(newUser);
                    setUsers(prevState => {
                        return [
                            ...prevState,
                            newUser
                        ]
                     });
                     setMessageToUser("User successfull added");                  
                })
                
                .catch(err => {
                    console.log(err);
                })
        }     
    }


    return (
    <section>
        <form style={style} onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={e => handleChange("name", e.target.value)}/>
            <input type="text" placeholder="surname" onChange={e => handleChange("surname", e.target.value)}/>
            <input type="text" placeholder="age" onChange={e => handleChange("age", e.target.value)}/>
            <span>City:</span>
            <select onChange={e => handleChange("city", e.target.value)}>
                <option></option>
                <option>Berlin</option>
                <option>Paris</option>
                <option>London</option>
                <option>New York</option>
            </select>

            <span>Gender:</span>
            <label htmlFor="1"><input style={{margin: "10px"}} type="radio" id="1" name="gender" value="male" onChange={e => handleChange("gender", e.target.value)}/>Male</label>
            <label htmlFor="2"><input style={{margin: "10px"}} type="radio" id="2" name="gender" value="female" onChange={e => handleChange("gender", e.target.value)}/>Female</label>
            <label htmlFor="3"><input style={{margin: "10px"}} type="radio" id="3" name="gender" value="I don't wanna say" onChange={e => handleChange("gender", e.target.value)}/>I don't wanna say</label>
            <button type="submit">Save</button>
        </form>
        <div>
            <h2>{messageToUser}</h2>
            <ul style={{border: "1px solid red"}}>
                {isCorrect.name ? null : <li>Wprowadź poprawne imię.</li>}
                {isCorrect.surname ? null : <li>Wprowadź poprawne nazwisko.</li>}
                {isCorrect.age ? null : <li>Wpisz prawidłowy wiek. Zapisać mogą się tylko pełnoletni!</li>}
            </ul>
        </div>
    </section>
    )
}

export default AddUser;