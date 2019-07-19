module.exports = {
    requestData: { // 参考机器人的传输数据类型
        "msgtype": "news",
        "news": {
             "articles" : [
                {
                    "title" : "不翘腿小助手",
                    "description" : "大家好，我是本群的“提醒不翘腿小助手”希望看到消息的人可以和我一起来把腿放下，及时防止脊椎变形( `д´) ！！！",
                    "url" : "https://www.zhihu.com/question/40943461",
                    "picurl" : "https://s2.ax1x.com/2019/07/05/ZdOkkj.png"
                }
            ] 
        }
    },
    url: '机器人地址',
    startDay: 1, // 可以发送的周内日期段 demo所示 是周一至周五 周日是7 
    endDay: 5,
    startHour: 20, // 可以发送的时间段 24小时制 demo所示 20-23点之间可以发送
    endHour: 23, // 结束发送的时间 24小时制
    during: 30000 // 持续间隔，即每隔多久推送一次信息，时间单位是毫秒
}
