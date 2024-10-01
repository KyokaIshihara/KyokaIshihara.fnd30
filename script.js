"use strict";

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let week = date.getDay();
let weekItems = ["日", "月", "火", "水", "木", "金", "土"];
let dayOfWeek = weekItems[week];

document.getElementById("today").innerText = ("今日は「" + year + "年" + month + "月" + day + "日" + "」です。"); 

const showMessage = () => {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    const output = "(" + year + "/" + month + "/" + day + ") " + inputValue;

    document.getElementById("output-message").innerHTML = output;
  }

  const add = document.getElementById("add");
  add.addEventListener("click", function() {
    let div = document.querySelector("div");
    div.before(document.getElementById("output-message").innerHTML);
  }
)
