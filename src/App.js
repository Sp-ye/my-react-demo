import React, { Component } from 'react'

import InputNumber from './components/InputNumber';
import confirm from './components/Confirm'
export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  value2 = ''
  
  render() {
    return (
      <div>
        <div style={{ width: '300px', margin: '50px auto' }}>
          <InputNumber value={this.state.value} onChange={e=>{this.setState({ value:e.target.value })}} min={1}/>
          <br/>
          <InputNumber defaultValue={this.value2} onChange={e=>{}} max={10}/>
        </div>
      </div>
    )
  }
  componentDidMount(){
    let res = confirm("确定删除吗?")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
  }
}


// function App(){
//   const [value,setValue] = useState('aaa')
//   return (
//       <div>
//       <InputNumber value={value} onChange={e=>{}}/>
//       <InputNumber defaultValue={value} onChange={e=>{}}/>
//       </div>
//   )
// }
