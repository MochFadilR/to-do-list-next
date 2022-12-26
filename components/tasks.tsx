import React from 'react'

import styles from '../styles/Task.module.css'
import { BsTrashFill } from "react-icons/Bs";
import { AiFillEdit } from "react-icons/Ai";


const Tasks = ({ task, done, setDone }) => {
  return (
    <div className={styles.task}>
        <span>
            <h3>
                { task }
            </h3>
        </span>
        <div className={styles.editButton}>
          <input type="checkbox" />
          <BsTrashFill onClick={() => {console.log('i am clicked')}} />
          <AiFillEdit onClick={() => null}/>
        </div>
    </div>
  )
}

export default Tasks