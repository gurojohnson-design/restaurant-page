import "./styles.css";
import "./menu.js";
import "./contact.js";

import { renderHome } from "./home.js";



const header = document.getElementById('header');
const body = document.getElementById('body');
const content = document.getElementById('content');

renderHome(content);

document.getElementById('homeBtn').addEventListener('click', () => {
    renderHome(content);
});

document.getElementById('menuBtn').addEventListener('click', () => {
    content.textContent = '';
});