import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const {
        stateUpdaters
    }=useTodos();
    const {addTodo} =stateUpdaters

    return(
        <>
        <h1>Here you can add a new TODO</h1>
        <TodoForm 
        label='Write a new TODO'
        submitText='Add'
        submitEvent={(text) => addTodo(text)}
        />
        </>
    )
}

export { NewTodoPage };