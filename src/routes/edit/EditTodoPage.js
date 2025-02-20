import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {

    return(
        <>
        <h1>Here you can edit a TODO</h1>
        <TodoForm 
        label='Edit your TODO'
        submitText='Edit'
        submitEvent={console.log('The Edit TODO is submited')}
        />
        </>
    )
}

export { EditTodoPage };