import React, { Component } from 'react'
// import { Button } from 'antd'
import Sidebar from './Sidebar'

class Main extends Component {
    render() {
        return (
            <div>
                {/* <Button type="primary">按钮</Button> */}
                <Sidebar/>
            </div>
        )
    }
}

export default Main