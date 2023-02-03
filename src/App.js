import { useState } from 'react';
import {
   evaluate
} from 'mathjs'
import './App.css';

function App() {

const [displayContent,setDisplayContent]=useState("0");





const handleclear=()=>{
  
  setDisplayContent("0");

  
}

const handleClickedNumber=(Event)=>{
if(displayContent==="0"){

setDisplayContent(Event.target.textContent)
}

else{
  
  setDisplayContent(prevState=>prevState+Event.target.textContent)
}

}
const handleOperator=(Event)=>{
  
function term(str, char) {
  var xStr = str.substring(0, str.length - 1);
  return xStr + char;
}

  const operator=Event.target.textContent
  const last=displayContent.length-1;
  
  switch(operator){
    case "+" :
      if((displayContent[last]==='+')){
        setDisplayContent(prevState=>prevState)
      }
      else if((displayContent[last]==='.')||(displayContent[last]==='/')||(displayContent[last]==='*')||(displayContent[last]==='-')){
        setDisplayContent(preString=>term(preString,operator))
      }
      else{
        setDisplayContent(preString=>preString+operator)
      }
        
       break;
       case "*":
        if((displayContent[last]==='*')){
          setDisplayContent(prevState=>prevState)
        }
        else if((displayContent[last]==='.')||(displayContent[last]==='/')||(displayContent[last]==='+')||(displayContent[last]==='-')){
          setDisplayContent(preString=>term(preString,operator))
        }
        else{
          setDisplayContent(preString=>preString+operator)
        }
        break;
        case "/":
         if((displayContent[last]==='/')){
            setDisplayContent(prevState=>prevState)
          }
          else if((displayContent[last]==='.')||(displayContent[last]==='+')||(displayContent[last]==='*')||(displayContent[last]==='-')){
            setDisplayContent(preString=>term(preString,operator))
          }
          else{
            setDisplayContent(preString=>preString+operator)
          }
          break;
          case "-":
            if((displayContent[last]==='-')){
              setDisplayContent(prevState=>term(prevState,'+'))
            }
            else{
           setDisplayContent(preString=>preString+operator)
            }
           break;
           //case ".":
            //if(displayContent.includes("+") ){
              //const indexOfLastOperator=Math.max(displayContent.lastIndexOf("+"),displayContent.lastIndexOf("-"),displayContent.lastIndexOf("/"),displayContent.lastIndexOf("*"))
              //console.log(indexOfLastOperator);
              //console.log("entered")
           // }
           // break;
            
       
      default:
        setDisplayContent("Error");
        
  }
}
const finalAnswer=()=>{
  let final=displayContent.slice();
  while(final.includes("//")||final.includes("/*")||final.includes("/+")||final.includes("++")||final.includes("+*")||final.includes("+/")||final.includes("**")||final.includes("*/")||final.includes("*+")){
  if(final.includes("**")){
    final=final.replace(/\*\*+/g,"*")
      console.log(final)
  } 
   else if(final.includes("*/")){
    final=final.replace(/\*\/+/g,"/")
    console.log(final)
  }
  else if(final.includes("*+")){
    final=final.replace(/\*\++/g,"+")
      console.log(final)
  }
  
   else if(final.includes("++")){
      final=final.replace(/\+\++/g,"+")
      console.log(final)

    }
    else if(final.includes("+/")){
      final=final.replace(/\+\/+/g,"/")
      console.log(final)
    }
    else if(final.includes("+*")){
      final=final.replace(/\+\*+/g,"*")
      console.log(final)
    }
    else if(final.includes("//")){

      final=final.replace(/\/\/+/g,"/")
      console.log(final)
    }
    else if(final.includes("/+")) {
      final=final.replace(/\/\++/g,"+")

      console.log(final)
    }
    else if(final.includes("/*")){
      final=final.replace(/\/\*+/g,"*")

      console.log(final)
  }
  else{
    return final
  }
  }
  
  
  
  setDisplayContent(evaluate(final))
 


}
const handleDecimal=(Event)=>{
  console.log(Event.target.textContent)
  
 if(displayContent.includes("+")||displayContent.includes("-")||displayContent.includes("/")||displayContent.includes("*")){
  console.log("entered")
  
  const indexOfLastOperator=Math.max(displayContent.lastIndexOf("+"),displayContent.lastIndexOf("-"),displayContent.lastIndexOf("/"),displayContent.lastIndexOf("*"))
            
           console.log(indexOfLastOperator);
            
           const lastString = displayContent.substring(indexOfLastOperator+1)
           console.log(lastString)
           
     if(!lastString.includes(".")){
      setDisplayContent(prevState=>prevState+Event.target.textContent)
     }


 }
 else if(!displayContent.includes(".")){
   setDisplayContent(prevState=>prevState+Event.target.textContent)
 }
 
}

  return (
   <div className='container'>
    
    <div className='grid-item' id="display">{displayContent} </div>
    <div className='grid-item' onClick={handleClickedNumber} id="one">1</div>
    <div className='grid-item' onClick={handleClickedNumber} id="two">2</div>
    <div className='grid-item' onClick={handleClickedNumber} id="three">3</div>
    <div className='grid-item' onClick={handleClickedNumber} id="four">4</div>
    <div className='grid-item' onClick={handleClickedNumber} id="five">5</div>
    <div className='grid-item' onClick={handleClickedNumber} id="six">6</div>
    <div className='grid-item' onClick={handleClickedNumber} id="seven">7</div>
    <div className='grid-item' onClick={handleClickedNumber} id="eight">8</div>
    <div className='grid-item' onClick={handleClickedNumber} id="nine">9</div>
    <div className='grid-item' onClick={handleClickedNumber} id="zero">0</div>
    <div className='grid-item' onClick={handleOperator} id="add">+</div>
    <div className='grid-item' onClick={handleOperator} id="subtract">-</div>
    <div className='grid-item' onClick={handleOperator} id="multiply">*</div>
    <div className='grid-item' onClick={handleOperator} id="divide">/</div>
    <div className='grid-item' onClick={finalAnswer}id="equals">=</div>
    <div className='grid-item' onClick={handleDecimal} id="decimal">.</div>
    <div className='grid-item' onClick={handleclear} id="clear">AC</div>

   </div>
  );
}

export default App;
