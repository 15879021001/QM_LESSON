const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async () => {
  const db = cloud.database()
  const countResult = await db.collection('userInfo').count()
  const total = countResult.total
  const data = await db.collection('userInfo').get()
  return {
    total: total,
    data: data.data
  }
}