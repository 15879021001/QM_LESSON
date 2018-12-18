import React, { Component } from 'react';
import './App.css';
import Modal from './modal/modal'

class App extends Component {

  state = {
    visible:false
  }

  showModal = () => {
    this.setState({
      visible:true
    })
  }
  closeModal=()=>{
    console.log('通知了父组件，关闭了')
  }
  confirm=()=>{
    console.log('通知了父组件，点击了确定')
  }
  render() {
    const {visible} = this.state
    return (
      <div className="App">
        <button onClick={this.showModal}>Click here</button>
        <Modal 
          visible={visible} 
          title="自定义标题" 
          children="111" 
          onClose={this.closeModal}
          confirm={this.confirm}
          >
          这是自定义组件
          </Modal>
      </div>
    )
  }
}

export default App
