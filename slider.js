const sliderImg=document.getElementById('slider-img');
const sliderQuote=document.getElementById('slider-quote');
const namePerson=document.querySelector('.name');
const job=document.querySelector('.job');

/*BUTTONS*/
const btnLeft=document.getElementById('btn-left');
const btnRight=document.getElementById('btn-right');

let count=0;

const people=[
    {
        name:'Tanya Sinclair',
        job:'UX Engineer',
        message:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        img:'images/image-tanya.jpg'
    },
    {
        name:'John Tarkpor',
        job: 'Junior Front-end Developer',
        message:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        img:'images/image-john.jpg'
    }
];


const loadSlider = ()=>{
    sliderImg.setAttribute('src',people[count].img);
    sliderQuote.textContent=`${people[count].message}`;
    namePerson.textContent=`${people[count].name}`;
    job.textContent=`${people[count].job}`; 
}


btnRight.addEventListener('click',()=>{
    if(count<1){
        count++;
        loadSlider();
    }else{
        count=0;
        loadSlider();
    }
});

btnLeft.addEventListener('click',()=>{
    if(count>0){
        count--;
        loadSlider();
    }else{
        count=1;
        loadSlider();
    }
});


loadSlider();