var a = 1;
var b = 5;

var c = (a + b);
console.log(c);

console.log(a + " + " + b + " = " + c);

console.log(`${a} + ${b} = ${c}`);

for(let i = 1; i < 10; i++){
    let html = `<div>${i}</div>` ;
    console.log(html);
}

let html = `
<body>
    <div></div>
    <ul>
        <li>${a}</li>
    </ul>
</body>
`;

console.log(html);