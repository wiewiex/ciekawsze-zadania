import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

const Register = () => {
    const [inputValues, setInputValues] = useState({});
    const [isCorrect, setIsCorrect] = useState({});
    const [clicked, setClicked] = useState(false);
    const [submittedValues, setSubmittedValues] = useState({});

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: "450px"
    }

    const handleChange = (key, value) => {
        setInputValues(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setClicked(true);

        const validEmail = (e) => {
            let filter;
            filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
            return String(e).search(filter) != -1;
        }

        const v = inputValues;

        setIsCorrect({
            name: v.name ? v.name.length >= 5 : null,
            email: validEmail(v.email),
            password: v.password ? v.password.length >= 4 : null,
            password2: v.password2 ? v.password2.length >= 4 : null,
            address: v.address ? v.address.length >= 3: null,
            postCode: v.postCode ? v.postCode.length === 5 || v.postCode.length === 6 : null,
            city: v.city ? v.city.length > 2 : null,
            passwordCompliance: v.password === v.password2
        })

        setSubmittedValues({...inputValues});
    }

    const showIfTrue = () => {
        const v = isCorrect;
        const s = submittedValues;
        if (v.name && v.email && v.password && v.password2 && v.address && v.postCode && v.city && v.passwordCompliance) {
            return (
                <div style={{...style, height: "300px"}}>
                    <h1>Twoje dane:</h1>
                    <span>{s.name}</span>
                    <span>{s.email}</span>
                    <span>{s.address}</span>
                    <span>{s.postCode}</span>
                    <span>{s.city}</span>
                </div>
            )
        }
        else {
            return (
                <ul style={{border: "1px solid red"}}>
                {v.name ? null : <li>Wprowadź poprawne imię i nazwisko.</li>}
                {v.email ? null : <li>Popraw adres email.</li>}
                {v.password ? null : <li>Pierwsze hasło jest niepoprawne.</li>}
                {v.password2 ? null : <li>Błędne hasło potwierdzające.</li>}
                {v.address ? null : <li>Wpisz prawidłowy adres.</li>}
                {v.postCode ? null : <li>Popraw kod pocztowy.</li>}
                {v.city ? null : <li>Nieprawidłowe miasto.</li>}
                {v.passwordCompliance ? null : <li key={7}>Hasła nie są zgodne.</li>}
                </ul>
            )
        }
    }

    return (
        <>
        <form style={style} onSubmit={handleSubmit}>
            <span>Acount data:</span>
            <input type="text" placeholder="Name and surname" onChange={e => handleChange("name", e.target.value)}/>
            <input type="email" placeholder="Email" onChange={e => handleChange("email", e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => handleChange("password", e.target.value)}/>
            <input type="password" placeholder="Confirm password" onChange={e => handleChange("password2", e.target.value)}/>
            <select>
                <option>Men</option>
                <option>Woman</option>
            </select>
            <span>Shipping details:</span>
            <input type="text" placeholder="Address" onChange={e => handleChange("address", e.target.value)}/>
            <input type="text" placeholder="Post code" onChange={e => handleChange("postCode", e.target.value)}/>
            <input type="text" placeholder="City" onChange={e => handleChange("city", e.target.value)}/>
            <button type="submit">Zapisz</button>
        </form>
            {clicked ? showIfTrue() : null}
        </>
    )

}

ReactDOM.render(
  <Register/>,
  document.getElementById("app")
);
