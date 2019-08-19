import React from 'react'
import { Input, Button, List } from 'antd'

// export default class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <Input
//           placeholder="todo info"
//           style={{ width: '300px', marginRight: '10px' }}
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
//         <List
//           style={{ width: '480px', marginTop: '10px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input
        placeholder="todo info"
        style={{ width: '300px', marginRight: '10px' }}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
      <List
        style={{ width: '480px', marginTop: '10px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDelete(index) }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI
