const begin = document.querySelector('#begin');
const p = document.querySelector('h1 +  p');
const section = document.querySelector('section');
const next = document.querySelector('#next');
const show = document.querySelector('#score');
const restart = document.querySelector('#restart');
const questions = [
  {question:'Which one is an inline element?',
  answer1: 'div',
  answer2: 'strong',
  answer3: 'section',
  correct: 'strong'
},
{question:'How I can change the color of the text in CSS?',
  answer1: 'color',
  answer2: 'text-color',
  answer3: 'background-color',
  correct:'color'
},
{question:'Inside wich element in HTML we put Javascript extern file?',
  answer1: 'Javascript',
  answer2: 'script',
  answer3: 'link',
  correct:'script'
},
{question:'Which one is a correct variable name in Javascript?',
  answer1: '2bread',
  answer2: '$wrong',
  answer3: '%right',
  correct:'$wrong'
},
{question:'When do we have the workshop day?',
  answer1: 'Monday',
  answer2: 'Friday',
  answer3: 'Wednesday',
  correct:'Wednesday'
}
]

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let randomQuestion = shuffle(questions);
let labelAll = document.querySelector('#first');
let reply1 = document.querySelector('label[for="first1"]');
let reply2 = document.querySelector('label[for="first2"]');
let reply3 = document.querySelector('label[for="first3"]');
let option1 = document.querySelector('#first1');
let option2 = document.querySelector('#first2');
let option3 = document.querySelector('#first3');

begin.addEventListener('click', start);
let beginNum = 0;
function start(){
  labelAll.innerText = randomQuestion[beginNum].question;
  reply1.innerText = randomQuestion[beginNum].answer1;
  reply2.innerText = randomQuestion[beginNum].answer2;
  reply3.innerText = randomQuestion[beginNum].answer3;
  option1.value = randomQuestion[beginNum].answer1;
  option2.value = randomQuestion[beginNum].answer2;
  option3.value = randomQuestion[beginNum].answer3;
  section.classList.remove('hidden');
  p.classList.add('hidden');
  begin.classList.add('hidden');
  next.classList.remove('hidden');
}

next.addEventListener('click', nextOne);
let score =0;
function nextOne () {
  if (option1.checked){
    if (option1.value == randomQuestion[beginNum].correct){
    alert('you are right');
    score += 20;}
    else{
      alert('you are wrong');
    }
    option1.checked = false;
  }
  if (option2.checked){
    if (option2.value == randomQuestion[beginNum].correct){
    alert('you are right');
    score +=20;}
    else{
      alert('you are wrong');
    }
    option2.checked = false;
  }
  if (option3.checked){
    if (option3.value == randomQuestion[beginNum].correct){
    alert('you are right');
    score +=20;}
    else{
      alert('you are wrong');
    }
    option3.checked = false;
  }
  ++beginNum;
  if (beginNum < 5){
  labelAll.innerText = randomQuestion[beginNum].question;
  reply1.innerText = randomQuestion[beginNum].answer1;
  reply2.innerText = randomQuestion[beginNum].answer2;
  reply3.innerText = randomQuestion[beginNum].answer3;
  option1.value = randomQuestion[beginNum].answer1;
  option2.value = randomQuestion[beginNum].answer2;
  option3.value = randomQuestion[beginNum].answer3;
  }
  if (beginNum === 5){
  section.classList.add('hidden');
  next.classList.add('hidden');
  show.classList.remove('hidden');
  p.classList.remove('hidden');
  p.innerText = 'You have finished all the question. Do you want to know your scores?';
  }
}
show.addEventListener('click', event => {
  if (score < 60){
    p.innerText = `You got ${score}. Don't be upset, it will get better next time!`;
  } 
  else if (score >= 60 && score <= 80) {
     p.innerText = `You got ${score}. Not bad, it will get better next time!`;
  }
  else {
    p.innerText = `You got ${score}. You are a genius!`;
  }
  show.classList.add('hidden');
  restart.classList.remove('hidden');
})

restart.addEventListener('click', () =>{
    location.reload();
})