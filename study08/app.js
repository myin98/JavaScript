import { createEvent, pointEvent, model, dataEvent, data } from "./data.js"; 

const info = {
    //history : [0],
    divs : document.getElementsByTagName("div"),
    ul : document.getElementsByTagName("ul")[0],
    btns : document.getElementsByTagName("button")
}
const checkEvent = (point3) => {
    let id = 1;
    if(localStorage.getItem("id")) id = localStorage.getItem("id");
    let data = model[id].data;
    let y = Math.floor(point3 / 5);
    let x = (point3 % 5);
    if(data[y][x] == 1) return false;
    return true;
}
const keyEvent = (e) => {
    if(info.ul.firstChild.childNodes.length > 0) {
        let history = data.getData();
        let point1 = history[0];
        let point2 = history[1];
        let point3 = 0;
        let id = 1;
        if(localStorage.getItem("id")) id = Number(localStorage.getItem("id"));
        switch (e.keyCode) {
            case 37: // 왼쪽
                if(point1 > 0) point3 = (point1 - 1);
                if(point1 % 5 == 0 && point1 >= 0) {
                     point3 = (point1 + 4);
                     // 화면 이동 법칙 : 0 > 2, 1 > 0, 2 > 1
                     /* /* 1번 방식
                     id = id - 1;
                     if(id < 0) id = 2;
                     */
                     /* 2번 방식 (삼항 연산자) 
                     id = (id - 1 < 0) ? 2 : id - 1;
                     */
                     id = (id + 2) % 3;
                     localStorage.setItem("id", id);
                }
                break;
            case 38: // 위쪽
                if(point1 > 4) point3 = (point1 - 5);
                else point3 = (point1 + 20);
                break;
            case 39: // 오른쪽
                if(point1 < 24) point3 = (point1 + 1);
                if((point1 + 1) % 5 == 0 && point1 <= 24) {
                    point3 = (point1 - 4);
                    // 화면 이동 법칙 : 0 > 1,  1 > 2,  2 > 0
                    /* 1번 방식
                    id = id + 1;
                    if(id == 3) id = 0;
                    */
                    /* 2번 방식 (삼항 연산자)
                    id = (id + 1 == 3) ? 0 : id + 1;
                    */
                    id = (id + 1) % 3;
                    localStorage.setItem("id", id);
                } 
                break;
            case 40: // 아래쪽
                if(point1 < 20) point3 = (point1 + 5);
                else point3 = (point1 - 20);
                break;
        }
        if(checkEvent(point3)) {
            history = [point3, point1];
            data.setData(history);
            //pointEvent();
            dataEvent();
        } 
    }
}
createEvent(info, keyEvent);