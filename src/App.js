import React, { Component } from 'react';
import './App.css';
import Header from './Components/Layouts/header';
import Footer from './Components/Layouts/footer';
import MainGrid from './Components/Layouts/mainGrid';
import { categories, todos } from './data';

class App extends Component {

  state = {
    todos
  }

  // getTodosByCategory () {
  //   return Object.entries(this.state.todos.reduce((todos, todo) => {
  //     const { category } = todo

  //     todos[category] = todos[category]
  //       ? [...todos[category], todo]
  //       : [todo]

  //     return todos
  //   }, {})
  //   )
  // }

  render() {

    const todos = this.state.todos

    console.log(todos)

    return (
      
      <div className="App">
        <Header></Header>
        <div className='Content'>
          <MainGrid todos={todos}>

          </MainGrid>
        </div>
        <Footer categories={categories}></Footer>
      </div>
    );
  }
}

export default App;
