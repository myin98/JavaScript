import { createEvent, dataEvent, model} from "./data.js"; 

const info = {
    history : [0],
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
        let point1 = info.history[0]; //현재위치
        let point2 = info.history[1]; //이동한 위치
        let point3 = 0; //앞으로 이동할 위치
        switch (e.keyCode) {
            case 37: // 왼쪽
                if(point1 > 0) point3 = (point1 - 1);
                if(point1 % 5 == 0 && point1 >= 0) {
                    localStorage.setItem("id", (localStorage.getItem("id") + 2) % 3);
                 point3 = (point1 + 4);
                }
                break;
            case 38: // 위쪽
                if(point1 > 4) point3 = (point1 - 5);
                else point3 = (point1 + 20);
                break;
            case 39: // 오른쪽
                if(point1 < 24) point3 = (point1 + 1);
                if((point1 + 1) % 5 == 0 && point1 <= 24){
                    localStorage.setItem("id", (localStorage.getItem("id") + 1) % 3);
                    point3 = (point1 - 4);
                } 
                break;
            case 40: // 아래쪽
                if(point1 < 20) point3 = (point1 + 5);
                else point3 = (point1 - 20);
                break;
        }
        if(checkEvent(point3)) {
            info.history = [point3, point1];
            dataEvent();
        } else {
            info.history = [point1, point2];
        }
    }
}
createEvent(info, keyEvent);