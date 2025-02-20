import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id)
    const {
        stateUpdaters,
        state
    }=useTodos();
    const { editTodo }=stateUpdaters;
    const { 
        getTodo,
        loading
    } = state;
    
    let todoText;
    if (location.state?.todo) {
        todoText = location.state.todo.text    
    }else if (loading) {
        return <h1>Loading</h1>    
    }else {
        const todo = getTodo(id)
        todoText = todo.text;
    }

    return(
        <>
        <h1>Here you can edit a TODO</h1>
        <TodoForm 
        label='Edit your TODO'
        defaultTodoText={todoText}
        submitText='Edit'
        submitEvent={(newText) => editTodo(id, newText)}
        />
        </>
    )
}

export { EditTodoPage };