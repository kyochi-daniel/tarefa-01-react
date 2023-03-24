import styles from './MainTasks.module.css'

import clipboardImage from '../assets/clipboard.png'
import { ITask } from '../App'
import { Task } from './Task'

interface Props {
    tasks: ITask[]
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function MainTasks({ tasks, onDelete, onComplete }:Props) {
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter((task)=> task.isCompleted).length

    return(
        <main className={styles.container}>
            <div className={styles.rowTask}>
                <strong className={styles.createdTasks}>
                    Tarefas criadas
                    <span>{tasksQuantity}</span>
                </strong>
                <strong className={styles.completedTasks}>
                    Concluídas
                    <span>{completedTasks} de {tasksQuantity}</span>
                </strong>
            </div>
            
            <div className={styles.list}>
                {tasks.map((task)=> (
                    <Task 
                      key={task.id} 
                      task={task} 
                      onDelete={onDelete}
                      onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                <section className={styles.sectionEmpty}>
                    <img src={clipboardImage} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </section>
                )}
            </div>
        </main>
    )
}