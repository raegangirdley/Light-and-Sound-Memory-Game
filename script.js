//global constants
const clueHoldTime = 1000; //how long to hold clue light/sound
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//global variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

//starts game
function startGame() {
  //initializes game variables
  progress = 0;
  gamePlaying = true;
  //swaps start with stop
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

//stops game
function stopGame() {
  gamePlaying = false;
  //swaps stop with start
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// sound synthesis functions
const freqMap = {
  1: 400,
  2: 500,
  3: 450,
  4: 466
}
function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn) {
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lights and clears buttons
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//plays clue
function playSingleClue(btn) {
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//plays sequence of clues
function playClueSequence() {
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

//if user wins game
function winsGame() {
  startGame();
  alert("Game Complete. You won!")
}

//if user loses game
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//checking user's guess
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) {
        winsGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
  else {
    loseGame();
  }
}