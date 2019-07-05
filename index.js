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
setInterval(canSendMessage, during)

