"use strict";

const number = document.getElementById('number_div');
const readMark = document.getElementById('read_para');
const markSection = document.querySelector('.mark_chat');
const angelaSection = document.querySelector('.angela_chat');
const jacobSection = document.querySelector('.jacob_chat');
const oneCircle = document.querySelector('.one_red');
const twoCircle = document.querySelector('.two_red');
const threeCircle = document.querySelector('.three_red');


readMark.addEventListener('click', () => {
    number.textContent = "0";
    markSection.style.backgroundColor = "#FFFFFF";
    angelaSection.style.backgroundColor = "#FFFFFF";
    jacobSection.style.backgroundColor = "#FFFFFF";
    oneCircle.style.display = "none";
    twoCircle.style.display = "none";
    threeCircle.style.display = "none";
});