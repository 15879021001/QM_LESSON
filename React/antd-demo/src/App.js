import React, { Component } from 'react';
import './App.css';
import { 
  Form, Icon, Input, Button 
} from 'antd';

const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem 
          validateStatus={userNameError?'error':''}
          help={userNameError || ''}
        >
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      } else {
        console.log(err);
      }
    })
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
// console.log(WrappedHorizontalLoginForm);

class App extends Component {
  render () {
    return (
      <div >
        <WrappedHorizontalLoginForm /> 
      </div>
    );
  }
}

export default App;














// import React, { Component } from 'react'
// import './App.css'

// import { Table, Form, Icon, Input, Button } from 'antd';
// const FormItem = Form.FormItem
// class App extends Component {
//   state = {
//     loading: false,
//     iconLoading: false
    
//   }
//   enterLoading = () => {
//     this.setState({
//       loading: true
//     })
//   }
//   enterIconLoading = () => {
//     this.setState({
//       iconLoading: true
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//   }
//   render() {
//     const columns = [{
//       title: '姓名',
//       dataIndex: 'name',
//       key: 'name'
//     }, {
//       title: '年龄',
//       dataIndex: 'age',
//       key: 'age'
//     }, {
//       title: '住址',
//       dataIndex: 'address',
//       key: 'address'
//     }
//     ]
//     const dataSource = [{
//       key: '1',
//       name: '胡八一',
//       age: 32,
//       address: '光明顶'
//     }, {
//       key: '2',
//       name: '唐三',
//       age: 25,
//       address: '史莱克'
//     }, {
//       key: '3',
//       name: '金庸',
//       age: 90,
//       address: '香港'
//     }
//     ]
    
//     return (
//       <div>
//         <Form layout="inline" onSubmit={this.handleSubmit}>
//         {/* 插槽 */}
//           {/* <FormItem> */}
//             <Input placeholder="Username"  prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}/>
//             <Input type="password" placeholder="Password"  prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}/>
//             <Button type="primary" htmlType="submit">Login</Button>
//           {/* </FormItem> */}
//         </Form>
//         <Table columns={columns} dataSource={dataSource} />
//         <Button type="primary" loading={this.state.loading} >Loading</Button>
//         <br />
//         <hr />
//         <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
//         <br />
//         <hr />
//         <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!!</Button>
//       </div>
//     );
//   }
// }

// export default App
