import { Check, Trash } from '@phosphor-icons/react'
import { ITask } from '../App'

import styles from './Task.module.css'

interface Props {
    task: ITask
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }:Props) {
    const isCompleted = true


    return(
        <div className={styles.tasks}>
            <button className={styles.checkContainer} onClick={()=> onComplete(task.id)}>
                {task.isCompleted ? <Check/> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.trashContainer} onClick={()=> onDelete(task.id)}>
                <Trash size={20}/>
            </button>
        </div>
    )
}