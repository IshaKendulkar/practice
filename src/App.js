import logo from './logo.svg';
import './App.css';
import React from 'react';
//Functional component
/*function App() {
  let firstVariable=5
  console.log("firstVariable:"+firstVariable)

   firstVariable=6
  console.log("firstVariable:"+firstVariable)

  const secondVariable="abc"
  console.log("secondVariable:"+secondVariable)

  var thirdVariable=true
  console.log("thirdVariable:"+thirdVariable)


  const myFunction=() =>
  {
    console.log("This is my function!!")
  }
  myFunction()

  const functionArgument=()=>
  {
    console.log("This is my functionArgument" )
    return true
  }

  const myFunction1=(variable)=>
  {
    console.log(variable)
    console.log("This is my function1!!")
    if(variable())
    {
      console.log("the condition is true")
    }
    else{
      console.log("the condition is false")
    }
  }
  myFunction1(functionArgument)

  class student
  {
    id
    name
    rollNumber
    address
    emailId

    constructor (id,tempName, tempRoll, tempaddress, tempemail)
    {
      this.id = id
      this.name =   tempName
      this.rollNumber =  tempRoll
      this.address =   tempaddress
      this.emailId =  tempemail
    }
    print()
    {
      console.log("id",this.id)
      console.log("name",this.name)
      console.log("rollNumber",this.rollNumber)
      console.log(" address",this.address)
      console.log("emailId",this.emailId)
    }
  }
  const Student1 = new student (111,"Nikita",1110, "mandleshwar","nikita@21.email.com")
  Student1.print()



class Monitor extends student
{
  batch
  constructor(batchTemp, id,tempName, tempRoll, tempaddress, tempemail )
  {
    super(id ,tempName, tempRoll, tempaddress, tempemail)
    this.batch=batchTemp
  }
  print()
  {
    super.print()
    console.log("Batch:"+this.batch)
  }


}
let ravi=new Monitor("2-3pm",222, "Ravi prakash", 1111, "mandleshwar", "shiv@gmail.com")
console.log("ravi:",ravi)
ravi.print()
let variable=<div>Hello world!!</div>

return (
    <div>Hello{firstVariable}<br/>{variable}</div>
  );
}*/
//class component
/*class App extends React.Component
{
  buttonClickHandle()
  {
      console.log("Click the button!!")
      //console.log(this.buttonClickHandle)
  }
  render()
  {
    return  <div>
       <p>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <button onClick={()=>this.buttonClickHandle()}>click Me!</button>
      </p>
    </div>

     /*return React.createElement
    (
      "div",
      null,
      React.createElement("p",null,"This is simple react element"),
      React.createElement("ul",null,),
      React.createElement("li",null," List item 1"),
      React.createElement("li",null," List item 2"),
      React.createElement("li",null," List item 3"),
    )
   
     
  }
}*/
// const App =(props)=>
// {
//   console.log("props:",props)
//   console.log("props color: ", props.color)
//   console.log("props size: ", props.size)
//   console.log("clickEvent: ", props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is App component
//     <button onClick={props.clickEvent}>click me</button>
//     </div>
// }

class App extends React.Component
{
   state = {counter: 0,
   Component: <ChildComponent/>
   }

  constructor(props)
  {
    super(props)
    console.log("consructor of app component")
  }

  static getDerivedStateFromProps()
  {
console.log("getDerivedStateFromProps")
  }

  incrementcounter = () =>
  {
    this.setState({counter:this.state.counter + 1})
  }
  
  componentDidMount()
  {
    console.log("componentDidMount")
  }

  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate")
    return false
  }

  getSnapshotBeforeUpdate(prevProps , prevState)
  {
    console.log("inside the getSnapshotBeforeUpdate")
    return true
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate")
    return true
  }

  unmountChild=()=>
  {
    this.setState({
      counter: this.state.Component,
      Component: "this child component is gone/unmounted"
    })
  }

  render()
  {
    //console.log(this.props.color)
    console.log("render method")
    return <div style={{backgroundColor:this.props.color}}>
      HELLO
      <button onClick={this.props.clickEvent}>click me</button>
    
    <br></br>
      
      counter: {this.state.counter}

      <button onClick={this.incrementcounter}>Increment counter</button>
      <br/>
      Mounting Child component <br/>
      --------------------------<br/>
      {/* <ChildComponent/><br/> */}
      {this.state.Component}
      -----------------------<br/>
      <button onClick={this.unmountChild}>unmount Child component</button>
      </div>
  }
}
  class ChildComponent extends React.Component
  {
    componentWillUnmount()
    {
      console.log("Unmounting Child component")
    }
   
    render()
    {
      return <div>THis is my Child component</div>
    }

  }



export default App;