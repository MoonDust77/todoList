import Mock from 'mockjs'
import list from './list'

Mock.mock(/\/list/, 'get', list.list)

export default Mock
