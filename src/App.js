import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state =
    {
      persons: [ 
      {id:"asf", name:"Max", age:22},
      {id:"s", name:"Manu", age:29},
      {id:"dds", name:"Stephanie", age:2}
    
      ],
      otherState:"some value",
      showPersons: false,

    } 
  

nameChangedHandler = (event, id ) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
  ...this.state.persons[personIndex]};
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({ persons: persons})
}

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}



render () {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor:"pointer",
    ':hover': {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.nameChangedHandler(event, person.id)}/>
      })}
      
      </div> 
    );
    // style.backgroundColor= "red";
    // style[':hover'] = {
    //   backgroundColor: "salmon",
    //   color: "black"
    // }
  }

  const classes = [];
  if(this.state.persons.length <= 2) {
    classes.push("red"); //red
  }
  if(this.state.persons.length <= 1) {
    classes.push("bold"); //red,bold
  }

  return ( 

      <div className="App">
      <h1>Hi</h1>
      <p className={classes.join("  ")}>This is really working</p>
      <button
      className="button"
      onClick={this.togglePersonsHandler}>Switch Name</button> 
      {persons} 
      

    </div> 

    
    );
  }
 
}

export default App;



