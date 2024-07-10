let info = {}
export const model = [
    {
        point : 12,
        data : [[1,0,1,0,1],[0,0,0,0,0],[1,1,0,1,1],[0,0,0,0,0],[1,0,1,0,1]]
    },{
        point : 17,
        data : [[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1]]
    }, {
        point : 22,
        data : [[1,0,0,0,1],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[1,0,0,0,1]]
    }
];
export const pointEvent = () => {
    let history = data.getData();
    const p1 = history[0];
    const p2 = history[1];
    info.divs[p1].className += " bg3";
    if(p2 != undefined) {
        let styles = info.divs[p2].className.split(" ");
        info.divs[p2].className = styles[0];
    }
    console.log(p1, p2);
}
export const dataEvent = () => {
    let html = "";
    let id = 1;
    if(localStorage.getItem("id")) {
        id = localStorage.getItem("id");
    }

    let history = data.getData();
    if(!history) {
        // history 초기값 넣어 보자.
        history = [0];
        data.setData(history);
    }
    // 이동되는 대상 초기 위치 설정!!
    if(history[1] == undefined)  history[0] = model[id].point;
    data.setData(history);

    for(let row of model[id].data) {
        let temp = "";
        for(let col of row) {
            temp += `<div class="${(col == 1) ? "bg1" : "bg2"}"></div>`;
        }
        html += `<li>${temp}</li>`;
    }
    info.ul.innerHTML = html;
    pointEvent();
}
export const btnEvent = (e) => {
    localStorage.setItem("id", e.target.id);
    dataEvent();
}
export const createEvent = (data, keyEvent) => {
    info = data;
    for(let btn of info.btns) btn.onclick = btnEvent;
    window.addEventListener("keydown", keyEvent);
    dataEvent();
}
export const data = {
    setData : (data) => {
        localStorage.setItem("history", JSON.stringify(data));
    },
    getData : () => {
        let h = localStorage.getItem("history");
        return JSON.parse(h);
    }
}