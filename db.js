function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var PM = false;
    if (h > 12)
    {
        h = h - 12;
        PM = true;
    }
    else if (h == 0)
        h = 12;

    h = checkTime(h);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s + (PM ? " PM" : " AM");
    var t = setTimeout(startTime, 500);
}

function arrows(el)
{
    var list = document.getElementById(el);
    var pos = Math.round(list.scrollLeft);
    var left = 0;
    var right = Math.round(list.scrollWidth - list.clientWidth);
    var leftArrow = document.getElementById(el + "-left");
    var rightArrow = document.getElementById(el + "-right");
    console.log(el, pos, right);

    if (pos == left || pos == left - 1 || pos == left + 1)
    {
        leftArrow.style.display = "none";
    }
    else if (pos == right || pos == right - 1 || pos == right + 1)
    {
        rightArrow.style.display = "none";
    }
    else
    {
        leftArrow.style.display = "block";
        rightArrow.style.display = "block";
    }
}

function checkTime(i) 
{
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function showInfo(name)
{
    document.getElementById('page-mask').style.display = "block";
    document.getElementById(name + '-info').style.display = "block";
}

function hideInfo(name)
{
    document.getElementById('page-mask').style.display = "none";
    document.getElementById(name + '-info').style.display = "none";
}

var tid = 0;
var speed = 10;

function moveList(name, direction)
{
    scrollCon = document.getElementById(name);
    if (direction == "left")
    {
        scrollCon.scrollLeft -= 10;
    }
    else
    {
        scrollCon.scrollLeft += 10;
    }
}

function startList(name, direction)
{
    if (tid == 0)
        tid = setInterval(function () { moveList (name, direction); }, speed);
}

function stopList(name, direction)
{
    if (tid != 0)
    {
        clearInterval(tid);
        tid = 0;
    }
}