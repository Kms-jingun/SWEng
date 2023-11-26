//날짜, 요일, 시간, 시간대(아침, 점심, 저녁)를 구한 후,
//dateInfo 객체로 만들어 리턴한다.

export default () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array(
        "Sun.",
        "Mon.",
        "Tue.",
        "Wed.",
        "Thu.",
        "Fri.",
        "Sat."
    );
    const week = weekList[now.getDay()];
    const time = now.getTime();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let daytime = "";

    if(hour < 12) {
        daytime = 'morning';
    }
    else if(hour < 18) {
        daytime = 'afternoon';
    }
    else {
        daytime = 'evening';
    }

    const dateInfo = {
        month,
        date,
        week,
        time,
        daytime,
        hour,
        minute
    }
    return dateInfo
}