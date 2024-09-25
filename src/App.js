import React from 'react'
import './App.css'
import { useState } from 'react'
let real = 0;
let loops=0;
let arrays = [];
function App() {  
  let o=0;
  let arrays1 = ["https://img.freepik.com/free-vector/ace-diamonds-playing-card-isolated_1308-79356.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717113600&semt=ais_user",
    "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200137/49319599-single-playing-cards-vector-king-of-hearts.jpg",
    "https://img.freepik.com/free-vector/two-hearts-playing-card-isolated_1308-78625.jpg",
    "https://img.freepik.com/free-vector/ace-diamonds-playing-card-isolated_1308-79356.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717113600&semt=ais_user",
    "https://img.freepik.com/free-vector/two-hearts-playing-card-isolated_1308-78625.jpg",
    "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200084/49319465-single-playing-cards-vector-jack-of-hearts.jpg",
    "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200137/49319599-single-playing-cards-vector-king-of-hearts.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/819px-Playing_card_heart_5.svg.png",
    "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200084/49319465-single-playing-cards-vector-jack-of-hearts.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/819px-Playing_card_heart_5.svg.png",
  ]
  let incre=0;

    let [arrays2,setarrays2]  = useState(Array(arrays1.length).fill(""))
  if(loops == 0 ){
      loops++;
        arrays = [...arrays2]
  
            let randm = ()=>{
              return parseInt(Math.random()*10)
            }
  
            while(incre < arrays1.length){
              let indr = randm();
              if(arrays[indr]==""){
                arrays[indr] = arrays1[incre++]
              } 
            }  
  }


    let [Card1,setCard1] = useState(Array(10).fill("")) 
    let [value1,setvalue1] = useState(null)
    let [value2,setvalue2] = useState(null)
    let [ind,setind] = useState(null)
    let [count,setCount] = useState(0)
    
   

    let Showing = (inx)=>{
      if(Card1[inx]!=="" || value1!=null && value2!=null){return}
      setCount(count+1);
      let copy = [...Card1];
      copy[inx] = arrays[inx];
      setCard1(copy);
     
      if(value1===null){
        setvalue1(arrays[inx])
        setind(inx)
      }else{
        setvalue2(arrays[inx])
        if(value1!==arrays[inx]){
          setTimeout(() => {
            let clean = [...Card1]
            clean[ind]="";
            clean[inx]=""
            setCard1(clean)
            setvalue1(null);
            setvalue2(null);
          },1000);
        }else{
          setvalue1(null);
          setvalue2(null);
        }
    }
  }
   
  
(function (){
    let valueget = sessionStorage.getItem("storess")
    real = JSON.parse(valueget);
})();

  for(let j=0;j<arrays.length;j++){
    if(Card1[j]!==""){
      o++;
    }
  }
  
  if(o===10){
      let store = count;
      if(real>count || real==null){
        sessionStorage.setItem("storess",JSON.stringify(store));
      }
    
  }
    return (
      <>  
      <nav>
      <div className='beauti'>
      <h3>High Score</h3>
      <p>{real}</p>
      </div>
      <div className='beauti'>
        <h3>Move</h3>
        <p>{count}</p>
      </div>
      </nav>
      
    <div className="container">
      {
        Card1.map((el,inx)=>{
          return (<h1 key={inx} onClick={()=>Showing(inx)}>
            <img src={el} alt="" />
          </h1>)    
        })   
      }       
    </div>
    <div id='buttons'>
     <a href="App.js">Reset</a>
    </div>
   </>
  )
}
export default App