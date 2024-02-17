import { useEffect, useState } from "react"
import Navbar from "./component/navbar"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
function App() {

  
  const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);
const [showFinished, setshoFinished] = useState(true);
useEffect(()=>{
  let todoString = localStorage.getItem("todos")
  if(todoString){
let todos = JSON.parse(localStorage.getItem("todos"))
}
setTodos(todos)
}, [])

const saveToLS = (e) =>{
  localStorage.setItem("todos",JSON.stringify(todos))
}

  const handleAdd = () =>{
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }

  const handleEdit = (e, id) =>{
   let t = todos.filter(i=>i.id === id)
   setTodo(t[0].todo)

//    let newTodos = todos.filter(item =>{
// return item.id!==id
//    });
   setTodo(newTodos)
   saveToLS()
   
  }

  const handleDelete = (e, id) =>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
   
    setTodos(newTodos)
    console.log(`the id is ${id}`);
    saveToLS()
  }

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) =>{
    let id = e.target.name;
    console.log(`the id is ${id}`);
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    console.log(index)
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos, todos)
    saveToLS()
  }
  
  const toggleFinished = (e)=>{
setshoFinished(!showFinished)
  }

  return (
    <>
<Navbar/>
    <div className="md:container mx-3 md:mx-auto bg-violet-100 rounded-xl p-5 my-5 min-h-[80vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl">iTask - Manage your todos at one place</h1>
  <div className="addTodo my-5 flex flex-col gap-4">
    <h2 className="text-lg font-bold">Add a Todo</h2>
    <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5 py-1" />
    <button onClick={handleAdd} disabled={todo.length<= 3} className="bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-2 py-1 text-white text-sm font-bold rounded-md ">Save</button>
    
    </div>

    <input onChange={toggleFinished} type="checkbox" className="my-4" checked={showFinished}/>Show finished
  <h2 className="text-lg font-bold">Your Todos </h2>
  <div className="todos">
  {todos.length === 0 && <div className="m-5">No Todo display </div>}
    {todos.map(item =>{
      return(
  (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 my-3 justify-between">
      <div className="flex">
      <input className="mx-3" type="checkbox" name={item.id} onChange={handleCheckbox} value={item.isCompleted} id=""/>
      <div className={item.isCompleted? "line-through":""}>{item.todo}</div>
      <div className="buttons flex h-full">
        <button onClick={(e)=>handleEdit(e, item.id)} className="  bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-1 "><FaEdit /></button>
        <button onClick={(e)=>{handleDelete(e, item.id)}} className="  bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-1"><AiFillDelete /></button>
      </div>
      </div>
    </div>
       )
      })}
  </div>
    
    </div>
    </>
  )
}

export default App
