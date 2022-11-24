import {useState} from 'react';

function App() {
  const [toDo,setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
    // 새로운  투두의 arr로 리턴하고 있는것임. 
    setToDo("")
    // input 통해 작성한 toDo와 아무것도 들어있지 않은 빈 arr element 더해짐
    
  }
  return (
    <>
    <h1>My To Dos({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} 
      value={toDo} 
      type="text" 
      placeholder="Write your to do" />
    <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
    {toDos.map((item,index)=>(
      <li key={index}>{item}</li>
    )
    )}
    </ul>
    </>
  );
}
export default App;
