import React,{useState} from 'react'
export default function TextForm(props){
    //the below line defines our state using hooks as the given component is a function based component 
    //rather than the state based component.
    const [count,setcount] = useState("");
  

    const handleUpClick = ()=>{
        console.log("On click");
        let newtext = count.toUpperCase();
       setcount(newtext)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setcount(event.target.value)
    }
    const len = ()=>{
        console.log("length checked");
        var line = count.length
        return line;
    }
    const wordlen=()=>{
        console.log("wordlength");
        if(count.length == 0){
            return 0;
        }
        var b = 0;
        var flag = true;
        var idx = -1;
        for(let f = 0;f<count.length;f++){
            if(count[f] != ' '){
                idx = f;
                break;
            }
        }
        if(idx ==-1){
            return 0;
        }
        for(let x = idx;x<count.length;x++){
            let ch = count[x];
            if(flag == true && x == count.length-1){
                b++;
                break;
            }
             if(ch == ' ' && flag == true){
                b++;
                flag = false;
             }
             else if(flag == false && ch != ' '){
                flag = true;
             }
        } 
        return b;
       
    }
    const handleDownClick=()=>{
        let newtext = count.toLowerCase();
        setcount(newtext)
        
    }
    const cleartext=()=>{
        let t = count;
        t = "";
        setcount(t);
    }
    const rev = ()=>{
        let t = count;
        let s = "";
        for(let x = count.length-1;x>=0;x--){
            s+=count[x];
        } 
        
        setcount(s);
    }
    const [mystyle,setmystyle] = useState({
        color:'Black',
         backgroundColor : 'White',
         margin:'20px',
         align:'center'
    })

    const [btntext,setbtntext] = useState("Enable Dark Mode")
    const toggledark = ()=>{
       console.log(mystyle.color);
        if(mystyle.color == 'white'){
           props.showalert("Dark mode enabled","success");
            document.body.style.backgroundColor = 'white';
            setmystyle(
                {
                    color:'black',
                     backgroundColor : 'white',
                     margin:'20px',
                     align:'center'
                }
            )
            setbtntext("Enable Dark Mode")
            
        }
        else{
            props.showalert("Light mode enabled","success")
            document.body.style.backgroundColor = 'black';
            setmystyle(
                {
                    color:'white',
                     backgroundColor : 'black',
                     margin:'20px',
                     align:'center'
                }
            )
            setbtntext ("Enable Light Mode")
        }
    }
    return(
<div className = "container" style={mystyle}>
    <h1>{props.heading}</h1>
<div className="mb-2">
  
  <textarea className ="form-control" value = {count} onChange  = {handleOnChange} id="MyBox" rows="8" style = {mystyle}>Babu</textarea>
  <div>
    <br></br>
    <button className="btn btn-primary mx-4 my-2" onClickCapture={handleUpClick} style = {mystyle}>Convert to uppercase</button>  
    <button className="btn btn-primary mx-4" onClickCapture={handleDownClick} style={mystyle}>Convert to lowercase</button>
    <button className="btn btn-primary mx-4" onClickCapture={cleartext} style={mystyle}>Clear text</button>
    <button className="btn btn-primary mx-4" onClickCapture={rev} style={mystyle}>Reverse text</button>  
    <div className="form-check form-switch my-4" style={mystyle} >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable Green Mode</label>
</div>
  </div>
  <div className='container my-4'>
  <button className='btn btn-primary' type="button" onClick= {toggledark} >{btntext}</button>
  </div>
  <div classname = "container mx-2">
    <h1>Your text summary</h1>
     { <p>{wordlen()} words and {len()} characters</p> }
     <br></br>
     <h2>Preview</h2>
        <p>{count}</p>
  </div>
</div>
</div>

    )
}
