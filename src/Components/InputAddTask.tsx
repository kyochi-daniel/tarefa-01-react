import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from './InputAddTask.module.css'

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function InputAddTask({ onAddTask }:Props) {
    const [title, setTitle] =  useState('')

    function handleAddTask(event: FormEvent) {
        event.preventDefault()

        onAddTask(title)
        setTitle('')
    }

    function onchangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return(
        <form className={styles.inputDecoration} onSubmit={handleAddTask}>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa"
              onChange={onchangeTitle}
              value={title}
            />
            <button >
                Criar 
                <PlusCircle size={20}/> 
            </button>
        </form>
    )
}