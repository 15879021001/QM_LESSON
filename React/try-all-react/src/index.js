import React from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'taokun'
        }
        // setTimeout(() => {
        //     this.setState({
        //         username:'111'
        //     })
        // }, 2000);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                Hello {this.state.username}
                <input type="text" value={this.state.username} onChange={(e)=>{this.handleChange(e)}} />
            </div>
        );
    }
    handleChange(e){
        console.log(this);
        
        this.setState({
            username:e.target.value
        })
        console.log(this.state.username);
        
    }
}
ReactDOM.render(<HelloUser />, document.getElementById('root'));
