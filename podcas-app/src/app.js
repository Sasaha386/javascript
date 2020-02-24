import  './style.css';
import {isvalid} from "./utilits";
import {Question} from './database'

const form = document.getElementById('form')
const input = form.querySelector('#ques-input')
const subscribe = form.querySelector('#submit')

form.addEventListener('submit', submitformHander)
   input.addEventListener('input',() => {
       subscribe.disabled = !isvalid(input.value)
   })

function submitformHander (event) {
    event.preventDefault()

    if (isvalid(input.value)) {
        const questions = {
            text: input.value.trim(),
            date: new Date().toJSON()
        };
           subscribe.disabled = true

        Question.create(questions).then(() => {
            input.value = ''
            input.className = ''
            subscribe.disabled = false
        } )


    }
}
