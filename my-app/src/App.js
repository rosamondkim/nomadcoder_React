import {useEffect, useState} from "react"
function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  // 첫번째 아이템이 value 이고 두번째 아이템이 그 value를 modify 하는 funciton
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev)=>prev+1);
  console.log('i run all the time')

  useEffect(() => {
    console.log('call the API..')},[]);
    // 리액트가 지켜볼게 없으니까 한번만 실행되고
  useEffect(()=>{
    if(keyword !=="" && keyword.length > 5){
      console.log("search for..",keyword)
    }
  },[keyword]);
  // counter change 되어도 keyword 바뀌지 않고, 뒤에 빈 arr 써주었을때 코드 단 한번만 실행되는 이유임
  return (
    <div className="App">
      <input onChange={onChange} // 이벤트리스너연결. function 작동할때 argument로 evnet 받기
      //이벤트 발생시킨 인풋에서 벨류 받고 keyword에 넣어준 후, input의 value로 사용
      value ={keyword} 
      type="text" placeholder="Search here.."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
