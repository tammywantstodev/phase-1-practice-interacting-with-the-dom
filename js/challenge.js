const counter=document.getElementById("counter");
const plusOne=document.getElementById("plus");
const minusOne=document.getElementById("minus");
const heart=document.getElementById("heart");
const likes=document.querySelector('.likes');
const commentInput=document.getElementById("comment-input");
const comments=document.getElementById('comment-list');
const submit=document.getElementById("submit");
const pause=document.getElementById("pause");

let counterInit=0;
let clickCount=0


let intervalId = setInterval(() => {
    counterInit++;
    counter.textContent = counterInit;
}, 1000);

pause.onclick = function() {
    if (pause.innerText === 'pause') {
        clearInterval(intervalId);
        pause.innerText = 'resume';
    } else {
        intervalId = setInterval(() => {
            counterInit++;
            counter.textContent = counterInit;
        }, 1000);
        pause.innerText = 'pause';
    }
};

plusOne.addEventListener("click",()=>{
  counterInit++
counter.textContent=counterInit;
  clickCount=0
})

minusOne.addEventListener("click",()=>{
counterInit--
counter.textContent=counterInit;
})



heart.onclick=()=>{
   clickCount++
    const numLiked= document.createElement('li');
    numLiked.textContent=`${counterInit} has been liked ${clickCount} times `;
    likes.appendChild(numLiked);
}


submit.addEventListener('click',(e)=> {
    e.preventDefault()
    const newComment=document.createElement('li');
    newComment.textContent=commentInput.value;
        comments.appendChild(newComment);
    document.getElementById("comment-input").value = "";
})




