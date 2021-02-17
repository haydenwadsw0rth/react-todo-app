import React, {useState, useEffect, useRef} from 'react'
import {TiEdit} from 'react-icons/ti'
import {IoMdAdd} from 'react-icons/io'

function TodoForm(props) {
    // Set input + Set edit input for update
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    //Focus on ref (autofocus)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
            <IoMdAdd className='add-icon'/>
            </button>
          </>
        )}
      </form>
    )
}

export default TodoForm
