const axios = require('axios');
const {
    requestData,
    url,
    startDay,
    endDay,
    startHour,
    endHour,
    during
} = require('./config');
let time = null,
    day = null,
    hour = null;
const canSendMessage = () => {
    time = new Date();
    day = time.getDay();
    day = day === 0 ? 7 : day; // 修正周日逻辑
    hour = time.getHours();
    day >= startDay && day <= endDay && hour >= startHour && hour <= endHour && axios({
        method: 'post',
        url,
        headers: {
            "content-type": "application/json",
        },
        data: JSON.stringify(requestData)
    })
}
setInterval(canSendMessage, during)

