  export  class Question {
  static create(questions) {
   return   fetch('https://podcast-app-8f93b.firebaseio.com/question.json', {
         method: 'POST',
         body: JSON.stringify(questions),
         headers: {
             'Content-Type': 'application/json'
         }


     })

         .then( response => response.json())
         .then(responce => {
             questions.id = responce.name
             return questions
         } )
       .then(addtolocalstorage)
       .then(Question.renderliist)
  }
  static renderliist() {
      const  questions = getquestionfronLocalstorage()
      const html = questions.length
      ? questions.map(tocard).join('')
          : `<div class="mui--text-headline">Ви поки нічого не запитали</div>`
        const list = document.getElementById('list')
      list.innerHTML = html
  }
}

  function addtolocalstorage  (question) {
      const all = getquestionfronLocalstorage()
      all.push(question)
      localStorage.setItem('questions', JSON.stringify(all))
  }

  function getquestionfronLocalstorage () {
      return JSON.parse(localStorage.getItem('questions') || '[]')
  }
  
  function tocard (question) {
   
   return `
   <div class="mui--text-black-54">
               
    ${new Date(question.date).toLocaleDateString()}
      ${new Date(question.date).toLocaleTimeString()}
      </div> 
       <div>${question.text}</div>
       <br/> 
       `     
  }    
     
    


     



