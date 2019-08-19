import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div><input value={this.state.inputValue} onChange={this.handleInputChange} ref={(input) => {this.input = input}} /><button onClick={this.handleBtnClick}>提交</button></div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
        <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />
      )
    })
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    // const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick = () => {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete = (index) => {
    // const list = [...this.state.list]
    // list.splice(index, 1)

    // this.setState({
    //   list: list
    // })

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

}
