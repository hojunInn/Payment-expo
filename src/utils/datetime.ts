export const returnDate = (date: Date) => {
    let dateString = '';
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDate());

    dateString = year + '년 ' + month + '월 ' + day + '일';

    return dateString;
};
