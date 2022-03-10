import template from './login.hbs';
import {data} from './login.data';

document.addEventListener('DOMContentLoaded', () => {
    console.log(typeof template); // string
    document.body.innerHTML = template(data);
})