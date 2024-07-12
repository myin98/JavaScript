/***************************************************
 * 비동기 통신 방법 (Ajax)
 * https://www.w3schools.com/js/js_ajax_intro.asp
 ***************************************************/
import { $async, $get } from "./ajax.js";

const model = [
    "https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/07/07/25/dog-7306691_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/18/13/03/cute-3162209_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/05/22/54/animal-1239398_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/15/09/12/underwater-3154726_1280.jpg",
    "./idk.jpg"
];

const view = (list) => {
    let html = "";
    for(let f of list){
        let url = f.domain + f.path;
        html += `<li>
                <img src="${url}">
            </li>`
    }
    document.getElementsByTagName("ul")[0].innerHTML = html;
    event(list);

}
const event2 = data => {
    let res = JSON.parse(data.response);
    if(res.status) {
        view(res.result);

    }
}

const event = (list) => {//이미지 이벤트 추가
    const lis = document.getElementsByTagName("li");
    for(let index = 0; index < lis.length; index++){
       lis[index].onclick = () => {
      //  view(list.toSpliced(index, 1));
      let url = `http://lh/json/no/${list[index].no}/type/${list[index].type}`;
      $get(url,{},event2);
       }
    }
}

const a = document.getElementsByTagName("a");
for(let tag of a) {
    const event = data => {
        //console.log(JSON.parse(data.response));
        const res = JSON.parse(data.response);
        if(res.status) {
            view(res.result);
    
        }
       
    }
     tag.onclick = (e) => {
        e.preventDefault();
        let type = Number(tag.id);
        // console.log(no, model[no]);
        let url = `http://lh/json/type/${type}`;
        $get(url,{},event);
     }


}