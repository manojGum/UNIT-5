import logo from './logo.svg';
import './App.css';

function App() {
  
       const Mobileos =["Android","Blackberry","iPhone","Windows Phone"]
  const Mobilemanu = ["Samsung","HTC","Apple","Micromax"]
  return (
    <div className="App">
       <h1>Mobile Operating system</h1>
       {Mobileos.map((e)=>{
         return <Mobile manoj={e}/>
       })}
       <h1>Mobile Manufactures</h1>
       {Mobilemanu.map((e)=>{
          return <Mobile manoj = {e}/>
       })}
    </div>
  );
}

function Mobile(prop){
  return <ul><li className='bold'>{prop.manoj}</li></ul>
}

export default App;
