import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'
import ToDoList from './TodoList'

const App = () => (
    <>
        <div id="app" className="app">
            <ErrorMessage />
            <Header />
            <ToDoList />
        </div>
    </>
)
export default App