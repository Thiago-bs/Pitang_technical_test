const isValidDate = (date: any) => {
    return date && Object.prototype.toString.call(date) === "[object Date]" && date !== null && !isNaN(date);
}

const formatDate = (date: any) => {
    var d = date,
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [day, month, year].join('/');
}
const formatHour = (date: any) => {
    var d = date,
    hour = '' + d.getHours(),
    minute = '' + d.getMinutes()
    if (hour.length < 2) 
        hour = '0' + hour;
    if (minute.length < 2) 
        minute = '0' + minute;
    return [hour, minute].join(':');
}
export{
    isValidDate,
    formatDate,
    formatHour
}