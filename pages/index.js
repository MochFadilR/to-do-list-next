import { useState, useEffect } from 'react'
import Tasks from '../components/tasks.tsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [tasks, setTasks] = useState([])
  // const [taskIndex, setTaskIndex] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [values, setValues] = useState([])
  // const [done, setDone] = useState([])

  const addTaskHandler = () => {
    const taskDetails = {
      id: tasks.length,
      value: inputValue,
      completed: false
    }

    setTasks([...tasks, taskDetails])
    // setDone([...done, false])
    setInputValue('')
  }

  // useEffect(() => {
  //   console.log(inputValue)
  // }, [inputValue])
  

  return (
    <div className={styles.container}>
      <header>
        <h2>TodoInput</h2>
      </header>
      <div className={styles.addTaskContainer}>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} on placeholder='New Todo'>
        </input>
        <button onClick={addTaskHandler} >
          Add new task
        </button>
      </div>

      <div className={styles.toDoList}>
        <h2>Todolist</h2>
        <div className={styles.filterButtons}>
          <button>All</button>
          <button>Done</button>
          <button>Todo</button>
        </div>
        
          {
            tasks ?
            tasks.map((task, id) => (
              <div key={id} className={styles.tasks}>
                <Tasks task={task}/>
              </div>
            ))
            : null
          }
      </div>
      <div className={styles.deleteButtons}>
        <button>Delete done tasks</button>
        <button>Delete all tasks</button>
      </div>
    </div>
  )
}
