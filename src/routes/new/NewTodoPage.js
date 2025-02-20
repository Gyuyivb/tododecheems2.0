import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {

    return(
        <>
        <h1>Here you can add a new TODO</h1>
        <TodoForm 
        label='Write a new TODO'
        submitText='Add'
        submitEvent={console.log('The new TODO is submited')}
        />
        </>
    )
}

export { NewTodoPage };