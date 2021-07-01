const getFormattedDate = (sep = ':') => {
  const date = new Date();
  var hour = date.getHours();
  hour = hour > 9 ? hour : '0' + hour;
  var min = date.getMinutes();
  min = min > 9 ? min : '0' + min;
  var sec = date.getSeconds();
  sec = sec > 9 ? sec : '0' + sec;
  
  return hour + sep + min + sep + sec;
}

exports.getFormattedDate = getFormattedDate;