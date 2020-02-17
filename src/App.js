import React, { Component } from 'react';
import './App.css';
import Header from './Components/Layouts/header';
import Footer from './Components/Layouts/footer';
import MainGrid from './Components/Layouts/mainGrid';
import { categories, todos } from './data';

class App extends Component {

  state = {
    todos,
    category: ''
  }

  categorySelectHandler = group => {
    this.setState({
      category: group
    })
  }

  createTodoHandler = todo => {
    this.setState(({ todos }) => ({
      todos: [
        ...todos,
        todo
      ]
    }))
  }

  render() {

    const todos = this.state.todos;
    const category = this.state.category;
    
    return (
      
      <div className="App">
        <Header onTodoCreate={this.createTodoHandler}></Header>
        <div className='Content'>
          <MainGrid 
            todos={todos}
            category={category}
          />
        </div>
        <Footer
          category={category}
          categories={categories}
          onSelect={this.categorySelectHandler}
        />
      </div>
    );
  }
}

export default App;
