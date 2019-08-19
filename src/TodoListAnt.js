import React, { Component } from 'react'
import 'antd/dist/antd.css'

import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    // axios.get('/list').then(({data}) => {
    //   const { data: listData } = data
    //   const action = initListAction(listData)
    //   store.dispatch(action)
    // })
    const action = getListAction()
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}
