/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-05 23:50:28
 * @LastEditTime: 2019-08-17 16:58:10
 * @LastEditors: Please set LastEditors
 */
const axios = require('axios');
const {
    requestData,
    url,
    startTime,
    endTime,
    during
} = require('./config')
const canSendMessage = () => {
    let time = new Date().getHours();
    console.log(time);
    time >= startTime && time <= endTime && axios({
        method: 'post',
        url,
        headers: {
            "content-type": "application/json",
        },
        data: JSON.stringify(requestData)
    })
}
// commit test 1;
setInterval(canSendMessage, during)

