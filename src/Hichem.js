import React , { Component } from 'react';
import './index.css' ; 


class App extends Component  {

constructor () {
super () ; 
this.state = { 
    message : 'hello hichem ' , 
    newTodo : '' ,
    todos : [{
        title : '' , 
        done : false  
    }]
} ;  
 }

 newTodoChanged (event) 
 {
this.setState({
    newTodo : event.target.value 
}) ; 
    
 }

 
 formSubmitted (event)

 {
     event.preventDefault () ; 
    this.setState({
        newTodo: '' , 
        todos : [...this.state.todos , { title :this.state.newTodo ,
        done : false  }]  
    }) ; 
 }

 toggleTodoDone(event,index ) {
    const todos = [...this.state.todos] ;
    todos[index] = {...todos[index]} ; 
    todos[index].done = event.target.checked ;  
    this.setState({
    todos 
 }) 
}
removeTodo(index)
{
const todos= [...this.state.todos] ; 
todos.splice(index , 1) ; 
this.setState (

    {
        todos 
    }
)
}
render () {
return (

<div className="App" >
 <h3> {this.state.message} </h3> 
 <form onSubmit={(event) => this.formSubmitted(event)} >
<label htmlFor="newTodo"> new Todo  </label>
<input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}/> 
<button type="submit" > new todo </button>
 
</form>
<ul>
{this.state.todos.map((todo , index) => {
    return <li key={todo.title}> <input onChange={(event) => this.toggleTodoDone(event,index)} type="checkbox"/>
    <span className={todo.done ? 'done': '' }>{todo.title} </span>
    <button onClick={() => this.removeTodo(index)}> Remove Todo task  </button>
    </li>
})}

</ul>
</div>
) ;  
}

}


 
export default  App 
