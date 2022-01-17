rankcheck();
function swap( a, b )
{
    let temp;
    temp = document.getElementById("score"+a).textContent;
    document.getElementById("score"+a).textContent = document.getElementById("score"+b).textContent;
    document.getElementById("score"+b).textContent = temp;

    temp = document.getElementById("name"+a).textContent;
    document.getElementById("name"+a).textContent = document.getElementById("name"+b).textContent;
    document.getElementById("name"+b).textContent = temp;
}
function rankcheck()
{
    for(let i=1; i<=10; i++){
        for(let j=i+1; j<=10; j++){
            let a = document.getElementById("score"+i).textContent;
            let b = document.getElementById("score"+j).textContent;
            if( parseInt(a) < parseInt(b) )
                swap(i, j);
        }
    }
}
function changebg()
{
    const images = [
        'url("meme_background.jpg")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("5.jfif")',
        'url("6.jpg")',
        'url("9.jpg")',
        'url("10.jpg")',
        'url("11.png")'
    ]
    const section = document.querySelector("body");
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

var a=setInterval(changebg, 2000);

function setback(x)
{
    const images = [
        'url("1.jpg")',
        'url("4.png")',
        'url("7.jpg")',
        'url("8.jpg")'
    ]
    const section = document.querySelector("body");
    const bg = images[x];
    section.style.backgroundImage = bg;
    clearInterval(a);
    if(x==1){
        document.getElementById("blackman").focus();
    }
    if(x==3){
        document.getElementById("hotpot").focus();
    }
    if(x==0){
        document.getElementById("hornydog").focus();
    }
    if(x==2){
        document.getElementById("squidgame").focus();
    }
}
function loadSearches()
{
    var length = localStorage.length; // number of key-value pairs
    tags = []; // create empty array

    // load all keys
    for (var i = 0; i < length; ++i) 
    {
        tags[i] = localStorage.key(i);
    } 
    let n=1;
    var makeup = '<h2>排行榜</h2><table style="width: 100%;"><thead><th>排名</th><th>名稱</th><th>分數</th></thead><tbody>';
    for (var tag in tags) 
    {
        var query = localStorage.getItem(tags[tag]);
        const myArr = JSON.parse(query);
        makeup +=   "<tr><td>" + n + "</td><td id='name"+ n +"'>" + myArr.username + "</td><td id='score" + n + "'>" + myArr.point + "</td></tr>";
        n++;
    } 
    makeup += "</tbody></table>";
    console.log(makeup);
    document.getElementById("block1").innerHTML = makeup;
}
function saveSearch()
{
    var name = document.getElementById("booktitle").value;//todo
    var score = document.getElementById("author").value;//todo
    var nowtime = new Date().getTime();
    const obj = { username : name, point : score};
    const myJSON = JSON.stringify(obj);
    localStorage.setItem("ntou-"+nowtime, myJSON);

    loadSearches();
}

function difficulity(x){
    if(x==0){
        document.getElementById("easy").focus;
    }
    if(x==1){
        document.getElementById("normal").focus;
    }
    if(x==2){
        document.getElementById("hard").focus;
    }
}
function start() {
    document.getElementById("StartScreen").style.display = "none";
    //rankcheck();
}
//<img src = "mouse.png" style = "width: 100px;">