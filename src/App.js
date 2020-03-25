import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {
                name: 'Hristo',
                age: 25
            },
            {
                name: 'Krasi',
                age: 22
            },
            {
                name: 'Stephanie',
                age: 32
            }
        ],
        otherState: 'Test state prop'
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                {
                    name: 'Hristomir',
                    age: 25
                },
                {
                    name: 'Krasi',
                    age: 22
                },
                {
                    name: 'Stephanie',
                    age: 24
                }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
