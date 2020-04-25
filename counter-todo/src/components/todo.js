import React, { Component } from 'react';

class Todo extends Component {

    displayTasks(tasks, visibility) {
	if(visibility === "active") return tasks.filter(t => !t.complete );
	else if(visibility === "complete") return tasks.filter( t => t.complete);
	else return tasks;
    };
  
    render() {

	let task = this.displayTasks(this.props.task.tasks, this.props.task.visibility);
	let tasks = task.map(t => {
	    return(
		<li key={t.id} style={{textDecoration: t.complete? "line-through": "none"}}
		    onClick={() => this.props.toggleTask(t.id)}>
		  {t.task}
		</li>
	    );
	});
	
	return(
	    <div>
	      <input ref={node => {this.input = node;}}/>
		<button onClick={() => {
		      this.props.addTask(this.input.value);
		      this.input.value = "";
		  }}>add task</button>
		<ul>
		  {tasks}
		</ul>
		<p>
		  show:
		  <button onClick={() => this.props.all()}>all</button>
		  <button onClick={() => this.props.complete()}>complete</button>
		  <button onClick={() => this.props.active()}>active</button>
		</p>
	    </div>
	);
    }
}

export default Todo;
