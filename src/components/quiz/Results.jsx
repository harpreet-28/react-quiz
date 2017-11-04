import React, {Component} from 'react';

export default class Results extends Component{
	render(){
		var percent = (this.props.score/this.props.questions.length *100);
		if(percent > 80){
			var message = 'Awesome Job!!';
		}else if(percent<80 && percent >60){
			var message= "You did OK";
		}else{
			var message= "Scores were not impressive";
		}
		return(
				<div className="well">
					<h3>You got {this.props.score} out of {this.props.questions.length} Correct</h3>
					<h1> {percent}% - {message}</h1>
					<hr />
					<a href="/app">Take the test Again</a>
				</div>
			)
	}
}