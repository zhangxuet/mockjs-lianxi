const express = require('express')
// import express from 'express'
const Mock = require('mockjs')

var app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use('/mode2/DataOne', (req, res) => {
  res.json(Mock.mock({
    'dataSource|1-9': [{
      'key|+1': 1,
      'mockTitle|1': ['青春有你', '创造营2020', '明日之子'],
      'mockContent|1': ['是我站的还不够高吗', '淡黄的长裙，蓬松的头发', '我的小提琴手'],
      'mockAction|1': ['love', 'pick', '喜欢']
    }]
  }))
})
app.listen('4000', () => {
  console.log('app is running')
})
