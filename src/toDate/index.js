export const transformToDate = (messages) => {
  messages.map((message) => {
    message.year = message.timestamp.toDate().getFullYear();
    message.month = ("0" + (message.timestamp.toDate().getMonth() + 1)).slice(-2);
    message.date = ("0" + message.timestamp.toDate().getDate()).slice(-2);
    message.hour = ("0" + message.timestamp.toDate().getHours()).slice(-2);
    message.min = ("0" + message.timestamp.toDate().getMinutes()).slice(-2);
    return message.timestamp = `${message.year}/${message.month}/${message.date} ${message.hour}:${message.min}`;
  })
}
