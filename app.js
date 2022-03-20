
const typing_info = document.querySelector("#typing_info");
const typing_user = document.querySelector("#typing_user");
const colorchanger = document.createElement("span");
const type_info = document.querySelector(".type-info");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#g2");
const area = document.querySelector("#typing_user");
const mins = document.querySelector("#mins");
const stop = document.querySelector("#stop");
const accuracy = document.querySelector(".cspeed");
const timer = document.querySelector(".time_left");
const refresh = document.querySelector("#refresh");
let minutes, seconds, interval, minz = mins.value;
mins.addEventListener("change", function () {
    area.disabled = true;
    minz = mins.value;
    area.value = "";
    error = 0;
    c = new Set();
    b.length = 0;
    c.length = 0;
    document.querySelector(".word_cnt").innerText = `${b.length}`;
    document.querySelector(".errors").innerText = `${c.length}`;
    for (let i = 0; i < text.length; i++) {
        let li = document.getElementsByClassName(`${i}`);
        li[0].classList.remove("green", "red", "black_imp");
    }
    accuracy.textContent = "";
    let value = mins.value / 60000;
    let value2 = mins.value % 60000;
    value = value < 10 ? "0" + value : value;
    value2 = value2 < 10 ? "0" + value2 : value2;
    clearInterval(interval);
    timer.innerText = `${value}:${value2}`;

})
console.log(mins);
let text;
let error = 0;
let b = [];


let c = new Set(), v;
area.disabled = true;
let arr = [
    "As he crossed toward the pharmacy at the corner he involuntarily turned his head because of a burst of light that had ricocheted from his temple, and saw, with that quick smile with which we greet a rainbow or a rose, a blindingly white parallelogram of sky being unloaded from the van",
    "a dresser with mirrors across which, as across a cinema screen, passed a flawlessly clear reflection of boughs sliding and swaying not arboreally, but with a human vacillation, produced by the nature of those who were carrying this sky, these boughs, this gliding façade",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat ipsam voluptatibus assumenda, ex quo nihil mollitia! Alias sequi, exercitationem consequuntur, officia reiciendis earum repellat beatae molestias quaerat, cumplaceat ? ",
    "On offering to help the blind man, the man who then stole his car, had not, at that precise moment, had any evil intention, quite the contrary, what he did was nothing more than obey those feelings of generosity and altruism which"
]
let rand = Math.floor(Math.random() * 3);

let text1 = arr[rand];
text = text1.split("").join("");
for (let i = 0; i < text.length; i++) {
    let p = document.createElement("li");
    p.classList.add(`${i}`);
    if (text[i] === " ") { p.innerText = " "; }
    else { p.innerText = `${text[i]}`; }
    type_info.append(p);
}
function error_cnt(t) {
    for (let i = 0; i < text.length; i++) {
        let li = document.getElementsByClassName(`${i}`);

        if (li[0].classList.contains("red")) {
            c.add(i);
            error += 1;
        }
    }
    for (let i = 0; i < c.length; i++) {
        let li = document.getElementsByClassName(`${c[i]}`);
        console.log(c[i]);
        if (li[0].classList.contains("green")) {
            console.log(c[i]);
        }
    }
    c.forEach(function (i) {
        let li = document.getElementsByClassName(`${i}`);
        console.dir(li);
        if (!li[0].classList.contains("red")) {
            c.delete(i);
        }
    })
    return c.size;
}

function wordcount(v) {
    let s = "";
    b = [];
    for (let i = 0; i < v.length; i++) {
        s += v[i];
        if (v[i] === " ") {
            b.push(s);
            s = "";
        }
    }
    if (v[v.length - 1] !== " ") {
        return b.length + 1;
    }
    return b.length;
}
function check(v) {
    //console.log(v);
    if (v.length === 0) {
        for (let m = 0; m < text.length; m++) {
            let li = document.getElementsByClassName(`${m}`);
            li[0].classList.remove("green", "red");
        }
    }
    else if (v.length > 0) {
        for (let j = 0; j < v.length; j++) {
            let li = document.getElementsByClassName(`${j}`);
            //console.dir(v);
            if (v[j] === li[0].innerText) {
                li[0].classList.add("green");
                li[0].classList.remove("red", "black_imp");
            }
            else if (v[j] !== li[0].innerText && v[j].innerText !== null) {
                li[0].classList.remove("green", "black_imp");
                li[0].classList.add("red");
            }
        }
        let k = v.length;
        while (k !== text.length - 1) {
            let li = document.getElementsByClassName(`${k}`);
            li[0].classList.add("black_imp");
            ++k;
        }
    }
}
/*function timer_display(state, value) {
    while (state !== "stop") {
        setInterval(function () {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                timer.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }, 1000)
    }
}*/
function timer_display(duration, state) {
    var timer1 = duration / 1000;

    interval = setInterval(function () {

        minutes = parseInt(timer1 / 60, 10)
        seconds = parseInt(timer1 % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.textContent = minutes + ":" + seconds;
        --timer1;
        if (timer1 === -1) {
            area.disabled = true;
            clearInterval(interval);
        }


    }, 1000);



}

btn1.addEventListener('click', function stop() {
    area.disabled = false;
    //timer_display(parseInt(mins.value), "start");
    timer_display(minz);
    setTimeout(function func() {

        accuracy.innerText = (((v.length - error_cnt(v)) / v.length) * 100);
        console.log(v.length);
        console.log(error_cnt(v));
        console.log((((v.length - error_cnt(v)) / v.length) * 100));
    }, parseInt(mins.value));
    accuracy.textContent = "";


});
area.addEventListener("input", function keep_track(e) {
    v = e.target.value;
    check(v);
    document.querySelector(".word_cnt").innerText = `${wordcount(v)}`;
    document.querySelector(".errors").innerText = `${error_cnt(e.target.value)}`;


})
refresh.addEventListener("click", function () {

    area.value = "";

    for (let i = 0; i < text1.length; i++) {
        var elements = document.getElementsByClassName(`${i}`);

        elements[0].parentNode.removeChild(elements[0]);
    }

    text1 = arr[Math.floor(Math.random() * 4)];
    text1 = text1.toString();
    console.log(typeof (text1));
    text = text1.split("").join("");
    console.log(text);
    for (let i = 0; i < text.length; i++) {
        let p = document.createElement("li");
        p.classList.add(`${i}`);
        if (text[i] === " ") { p.innerText = " "; }
        else { p.innerText = `${text[i]}`; }
        type_info.append(p);
    }
    c = new Set();
    b.length = 0;
    c.length = 0;
    document.querySelector(".word_cnt").innerText = `${b.length}`;
    document.querySelector(".errors").innerText = `${c.length}`;
    area.disabled = true;
    accuracy.textContent = "";
    let value = mins.value / 60000;
    let value2 = mins.value % 60000;
    clearInterval(interval);
    value = value < 10 ? "0" + value : value;
    value2 = value2 < 10 ? "0" + value2 : value2;
    minutes = value;
    seconds = value2;
    timer.innerText = `${value}:${value2}`;
})

stop.addEventListener("click", function stop() {
    area.disabled = true;
    timer.textContent = minutes + ":" + seconds;

    minz = parseInt((minutes * 60 + seconds) * 1000);
    clearInterval(interval);
    accuracy.textContent = "";


})
btn2.addEventListener("click", function reset() {
    area.disabled = true;
    area.value = "";
    error = 0;
    c = new Set();
    b.length = 0;
    c.length = 0;
    document.querySelector(".word_cnt").innerText = `${b.length}`;
    document.querySelector(".errors").innerText = `${c.length}`;
    for (let i = 0; i < text.length; i++) {
        let li = document.getElementsByClassName(`${i}`);
        li[0].classList.remove("green", "red", "black_imp");
    }
    accuracy.textContent = "";
    let value = mins.value / 60000;
    let value2 = mins.value % 60000;
    value = value < 10 ? "0" + value : value;
    value2 = value2 < 10 ? "0" + value2 : value2;
    minz = mins.value;
    clearInterval(interval);
    timer.innerText = `${value}:${value2}`;
})

