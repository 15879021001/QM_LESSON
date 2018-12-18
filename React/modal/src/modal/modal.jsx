import React,{Component} from 'react'
import './modal.css'

class Modal extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible:true
    }
  }
  componentWillReceiveProps(props){
    this.setState({
      visible:props.visible
    })
  }
  componentDidMount(){
    this.setState({
      visible:this.props.visible
    })
  }
  maskClick=()=>{
    console.log('点击了蒙层')
    this.setState({
      visible:false
    })
  }
  closeModel=()=>{
    const { onClose } = this.props
    onClose && onClose()
    this.setState({
      visible:false
    })
    // console.log('通知了父组件，关闭了')
  }
  confirm=()=>{
    const { confirm } = this.props
    this.setState({
      visible:false
    })
    // console.log('通知了父组件，点击了确定')
  }
  render(){
    const { visible } = this.state
    const {title,children} = this.props
    return(
      visible && <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button className="modal-operator-close" onClick={this.closeModel}>取消</button>
            <button className="modal-operator-confirm" onClick={this.confirm}>确定</button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick}></div>
      </div>
    )
  }
}

export default Modal