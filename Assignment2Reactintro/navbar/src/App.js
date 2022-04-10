import logo from './logo.svg';
import './App.css';

function App() {
  const midnavigation =["Service","Project","About"]
  return (
    <div className="App">
      
       <div className='middiv'>
      <img src='https://img.freepik.com/free-vector/bakery-logo-template_441059-118.jpg?w=740'></img> 


    <div className='midnavdiv'>
      {midnavigation.map((elem)=>{
        // console.log(elem)
        return <Navlink manoj={elem}></Navlink>
      })}
    </div>
      <button>Contact</button>

       </div> 

    </div>
  );
}
function Navlink(Promis){
 return <div className='divcen'>{Promis.manoj}</div>
}

export default App;
