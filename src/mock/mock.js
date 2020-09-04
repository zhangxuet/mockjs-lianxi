import Mock from 'mockjs'
// var Mock = require('mockjs')

// var data = Mock.mock({
//   'list|1-10': [{
//     'id|+1': 1
//   }]
// })

// var data = Mock.mock({ 'data|1-4': '哑巴' })

// var data = Mock.mock('@province')

const url = {
  tableDataOne: 'http://20181024Mock.com/mode1/tableDataOne',
  tableDataTwo: 'http://20181024Mock.com/mode1/tableDataTwo',
  tableDataThi: 'http://20181024Mock.com/mode1/tableDataThi'
}

var data = Mock.mock(url.tableDataOne, {
  'dataSource|1-9': [{
    'key|+1': 1,
    'mockTitle|1': ['青春有你', '创造营2020', '明日之子'],
    'mockContent|1': ['是我站的还不够高吗', '淡黄的长裙，蓬松的头发', '我的小提琴手'],
    'mockAction|1': ['love', 'pick', '喜欢']
  }]
})
// console.log(data)
export { data }
