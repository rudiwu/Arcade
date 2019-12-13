//novel starts!
//music
var opening = new Audio('images/start.mp3')
var succeed = new Audio('images/succeed.mp3')
var lose = new Audio('images/lose.mp3')
opening.play();


//Section 1
document.write('<div class="format"><p><br>This is a visual novel which your selections are pivotal to the ending of the game!</p><br><img class="picturefit" src="images/giphy.gif"></img>');
document.querySelector(".button1").addEventListener("click", function(){
//Section 2
document.querySelector(".storywindow").innerHTML="<p><br>Willy is a sleepy brat who has an all-F grade and zero participation in class. He does nothing but to lay down and enjoy his daydreams.<br> BUT!!! Today is exam week! Although Willy gives no fluff about the exams, it is hardly possible to sleep during an exam. Under such pressure, Willy has an idea in mind that can keep him to sleep.<br><br>Hmmmmm I should:<br> <span class = 'red'>A:Wear Sunglasses to hide your eyes during class</span><br><span class = 'blue'>B:Call Ms. Sue and pretend you're ill</p></span>";
document.querySelector(".button1").classList.add("invisible");
document.querySelector(".format").classList.add("invisible");
document.querySelector(".choice1-btn").classList.remove("invisible");
document.querySelector(".choice2-btn").classList.remove("invisible");

})

document.querySelector(".choice1-btn").addEventListener("click", function(){
//Section 2
succeed.play();
document.querySelector(".storywindow").innerHTML="<p><br>Willy: Okay, this would work<br> Willy left his home with confidence.<br>It is now first period, which was one of the hardest classes to sleep: Calculus. Since Willy sits right in front of Mr. Robert, it is impossible to just lay down and sleep, especially when there is a test going on.<br><img class='picturefit' src='images/calculus.jpg'></img><br><br>Willy: Ok Robert, I accept your challenge. I will.....<br> <span class = 'red'>A.Finish all the questions in 15 minutes and enjoy a 70 minute nap.</span><br> <span class = 'blue'>B.Hold up your head and pretend to think while hiding your eyes behind the sunglasses.</p></span>";
document.querySelector(".choice1-btn").classList.add("invisible");
document.querySelector(".choice2-btn").classList.add("invisible");
document.querySelector(".choice1-2-btn").classList.remove("invisible");
document.querySelector(".choice2-2-btn").classList.remove("invisible");

})
document.querySelector(".choice2-btn").addEventListener("click", function(){
//Section 2
lose.play();
document.querySelector(".storywindow").innerHTML="<p><br>Willy picked up the phone.<br>Willy: (cough)umm, Ms. Sue, I'm not feeling well today, I think I might have to take the day off.<br>???: Willy, I've been expecting you.<br>Willy: Huh? Who is this? wait, this voice, it can't be!<br>Pamela: YOU THINK YOU CAN JUST PRETNED TO BE ILL AND DE DE TAKE A DAY OFF LIKE YOU DON'T CARE? YOU ARE SENIOR AND YOU SHOW ME SUCH BEHAVIOR? I WILL EXPELL YOU!!!!<br><br>Well I guess this isn't the first time Willy tried calling, try again :)</p><br><img class='picturefit' src='images/pamela.jpg'></img>";
document.querySelector(".choice2-btn").classList.add("invisible");
})

document.querySelector(".choice1-2-btn").addEventListener("click", function(){
//Section 3
lose.play();
document.querySelector(".storywindow").innerHTML="<p><br>Oh come on now, you know Willy isn't a prodigy. How can you possibly think this is gonna happen =_= <br>Try agian<br><img class='picturefit' src='images/dizzy.jpg'></img></p>";
document.querySelector(".choice1-2-btn").classList.add("invisible");
})

document.querySelector(".choice2-2-btn").addEventListener("click", function(){
//Section 3
succeed.play();
document.querySelector(".storywindow").innerHTML="<p><br><img class='picturefit' src='images/sunglass.jpg'></img><br>With the brilliant scheme, Willy was able to sleep for the entire test time, yet this is Willy we are talking about, such short nap wouldn't suffice.<br> It is now period 2, which is an easier class to sleep but then again, it is exam week. Willy entered the Biology class, hoping he can have a rest this period.<br>Ms.B: Alright, everyone we will start our test<br>Willy: She is not suspicious, maybe I can sleep very well this period.<br><br>It was all calm at the  beginning, but after 30 minutes Ms.B was bored, so she stood out of her desk and decided to walk around.<br><br>===============<br>25 minutes ago ~~<br><br>Willy: Steve, if Ms.B came up to our direction, you have to wake me up.<br>===============<br><br>Steve: Now is the time!! I should<br> <span class = 'red'> A. kick Willy</span><br> <span class = 'blue'>B. punch Willy's xxxxx</span>";
document.querySelector(".choice1-2-btn").classList.add("invisible");
document.querySelector(".choice2-2-btn").classList.add("invisible");
document.querySelector(".choice1-2-3-btn").classList.remove("invisible");
document.querySelector(".choice2-2-3-btn").classList.remove("invisible");

})
document.querySelector(".choice1-2-3-btn").addEventListener("click", function(){
//Section 4
lose.play();
document.querySelector(".storywindow").innerHTML="<p><br>Willy is in basketball team, he is hella bulky, such small impact would not affect him. He needs a big blow.<br> Try again :)<br><img class='picturefit' src='images/bulky.jpg'></img></p>";
document.querySelector(".choice1-2-3-btn").classList.add("invisible");
})
document.querySelector(".choice2-2-3-btn").addEventListener("click", function(){
//Section 4
succeed.play();
document.querySelector(".storywindow").innerHTML="<p><br>AHHHHHHHHHH,Willy stood up with pain. Though everyone was distracted by 2 minutes and jeered at Willy, he successfully passed the class time.<br><img class='picturefit' src='images/awake.jpg'></img><br>On to the next class, it is now time for AP physics.<br>Ms.Liu: Hello Willy, I'm expecting you to do well on this test, else I might have to drop you.<br> Willy: Of course of course.<br> Now Willy is in a dilemma<br> Oh man, although I really want to sleep, I can't dissapoint Ms.Liu and her lovely smile. <br> OKAY! I will...<br> <span class = 'red'>A. Try my best once in my entire life.</span><br> <span class = 'blue'>B. Close my eyes for 105 minutes.</span>";
document.querySelector(".choice1-2-3-btn").classList.add("invisible");
document.querySelector(".choice2-2-3-btn").classList.add("invisible");
document.querySelector(".choice1-2-3-4-btn").classList.remove("invisible");
document.querySelector(".choice2-2-3-4-btn").classList.remove("invisible");
})
document.querySelector(".choice2-2-3-4-btn").addEventListener("click", function(){
//Section 5
lose.play();
document.querySelector(".storywindow").innerHTML="<p><br>Come on, even though he is a bit slaggy, Willy still cares about his high school diploma, he's in pacific american school you know. 800k a year isn't a joke.<br> Try agian.<br><img class='picturefit' src='images/money.gif'></img></p>";
document.querySelector(".choice2-2-3-4-btn").classList.add("invisible");
})
document.querySelector(".choice1-2-3-4-btn").addEventListener("click", function(){
//Section 5
succeed.play();
document.querySelector(".storywindow").innerHTML="<p><br>Even though Willy didn't finish the entire test in time and he only knew a quarter of the content, he felt good for trying once.<br><img class='picturefit' src='images/confidence.jpg'></img><br> But exhaution soon struck him.<br>Willy: Ahh my body, it's too tired!!! Thank god I have study hall next period<br> As Willy entered the classroom, something soon felt wrong.<br>Louis: Willy! I WILL BE THE SUBSTITUTE TEACHER THIS PERIOD, NO SLEEP!!!!! I WATCH CAREFUL YOU !!<br> What!! Now Willy faced the greatest problem this day. The class that was meant to be the chillest became the hardest one.<br> Willy: Ok Louis, if you want to play games, I can, too.<br><br> Got it! I will...<br> <span class = 'red'>A. Hide myslef behind my computer and sleep<br> </span><span class = 'blue'>B. RKO Mr. Louis.</span>";
document.querySelector(".choice1-2-3-4-btn").classList.add("invisible");
document.querySelector(".choice2-2-3-4-btn").classList.add("invisible");
document.querySelector(".choice1-2-3-4-5-btn").classList.remove("invisible");
document.querySelector(".choice2-2-3-4-5-btn").classList.remove("invisible");
})
document.querySelector(".choice1-2-3-4-5-btn").addEventListener("click", function(){
//Section 6 final
succeed.play();
document.querySelector(".storywindow").innerHTML="<p><br>With such simple mechanics, Willy was able to sleep for the entire Study hall, and since Louis is extremely busy, he had to leave the class room several times which gave Willy a lot of free time to sleep.<br><br> For gamer: You let Willy slept through all the classes successfully, his body is healthier than ever! Even though he failed all 3 tests today but he felt happier than ever. Being able to sleep through the exam week was one of the hardest tasks to have ever be done in PAS.<br><img class='picturefit' src='images/sleep.jpg'></img>";
document.querySelector(".choice1-2-3-4-5-btn").classList.add("invisible");
document.querySelector(".choice2-2-3-4-5-btn").classList.add("invisible");
document.querySelector(".review").classList.remove("invisible");
})
document.querySelector(".choice2-2-3-4-5-btn").addEventListener("click", function(){
//Section 6 final
lose.play();
document.querySelector(".storywindow").innerHTML="<p><br>Willy is definitely not Randy Orton, and if he is he cannot just RKO a person because it is <br>1. Highly impolite<br> and <br> 2. Extremely Dangerous.<br><img class='picturefit' src='images/rko.jpg'></img>";
document.querySelector(".choice2-2-3-4-5-btn").classList.add("invisible");
})
document.querySelector(".review").addEventListener("click", function(){
//REVIEW
var reviewscore = parseFloat(prompt("Rate us a score out of 10 :) Please don't type something weird."));
if (reviewscore>=0&reviewscore<=10) {
  if(reviewscore>5){
    document.querySelector(".storywindow").innerHTML="<p><br>A "+reviewscore+" ? That's higher than expected.<br><img class='picturefit' src='images/happy.jpg'></img>";
    document.querySelector(".review").classList.add("invisible");
  }
  else if (reviewscore<=5){
    document.querySelector(".storywindow").innerHTML="<p><br>Oh come on, I'm sure its not that bad for you to give a "+reviewscore+"<br><img class='picturefit' src='images/sad.jpg'></img>";
    document.querySelector(".review").classList.add("invisible");
  }}
else if(reviewscore<0||reviewscore>10){
  document.querySelector(".storywindow").innerHTML="<p><br>YEP, you're that type of a person are you<br>NOT FUNNY.<br><img class='picturefit' src='images/hmm.jpg'></img>";
  document.querySelector(".review").classList.add("invisible");
}
})
