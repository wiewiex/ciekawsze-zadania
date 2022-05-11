import React, {useState} from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([
        {
            name: "Rzecz do zrobienia1",
            done: false
        },
        {
            name: "Rzecz do zrobienia2",
            done: true
        },
        {
            name: "Rzecz do zrobienia3",
            done: true
        },
        {
            name: "Rzecz do zrobienia4",
            done: false
        }

    ]);

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prevState => {
            return [
                ...prevState,
            {
                name: inputValue,
                done: false
            }
            ]
        });
        setInputValue(" ");
    };

    const handleClick = (index) => {
        setTasks(prevState => {
            const array = [...prevState];
            array[index] = {
                ...array[index],
                done: !array[index].done
            }
            return array;
        })
    }

    return (
        <div className="toDoList">
            <form className="header" onSubmit={handleSubmit}>
                <h2>Twoja lista zadań</h2>
                <input onChange={handleChange} value={inputValue} type="text" placeholder="np. Zrobić zakupy"/>
                <button className="btn-add" type="submit">Dodaj</button>
            </form>
            <ul>
                {tasks.map((el, i) => {
                    return <li onClick={e => handleClick(i)} key={i} className={el.done ? "done" : ""}>{el.name}</li>
                })}
            </ul>
        </div>
    )
}