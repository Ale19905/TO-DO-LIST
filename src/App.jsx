import { useState, useRef } from 'react'
import Task from '../Components/Task'

function App() {
  const [state, setState]  = useState('')
  const [list, setList] = useState([])
  const inputRef = useRef()
  const handleChangeTitle = (e) => {
    setState(e.target.value)  
  }

  const handleDelete = (e) => {
    setList('')  
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, state])   
  }
  
  
  
  return (
    <>
      <main>
        <h1 className='text'>TO-DO-LIST</h1>

       
        <form action="submit" onSubmit={handleSubmit} className='form'>
          <p className='label'>Task:</p>
          <input type="text" onChange={handleChangeTitle} className='input'/>
          <button className='btn'>Submit</button> 
        </form>

       {/*
       <Task title={task.title} text={task.task}/> 
        */} 

        <ul>
          {list && list.map((item, index) =>(
            
            <li style={{listStyleType:"none"}} key={index} className='elements'>
                <Task title={item} />
                
            </li>
          ))}
        </ul>
        
          <button className='delete_btn' onClick={handleDelete}>Delete All</button>
  

      </main>

    </>
  )
}

export default App
