import {Sequelize, db} from '../lib/sequelize'

const Todolist = db.define('api_todolist', {
  content: { // 事项内容
    type: Sequelize.STRING(1000)
  },
  is_complete: { // 是否完成
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    type: Sequelize.STRING(30)
  },
  updated_at: {
    type: Sequelize.STRING(30)
  },
  timestamp_at: {
    type: Sequelize.BIGINT
  }
},
{
  timestamps: false,
  comment: '事项列表信息表'
})
// 创建表结构
// Todolist.sync({force: true})

export default Todolist
