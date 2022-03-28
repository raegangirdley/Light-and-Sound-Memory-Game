# Light-and-Sound-Memory-Game
light and sound memory game prework for codepath SITE program (summer internship). tests user's memory of following a pattern created by developer

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Raegan Girdley

Time spent: **2** hours spent in total

Link to project: https://glitch.com/~light-and-sound-memory-game---raegan-girdley

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
-https://www.w3schools.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I have worked with HTML and CSS slightly before, so it was relatively easy to understand a lot of the content when creating the project. However, I am not familiar with JavaScript at all, so figuring out the functions and how they work with each other, and other parts of the project as a whole was incredibly difficult but rewarding. The constants (like const clueHoldTime) and variables (like var gamePlaying) were easier to immediately grasp since I already knew the concept of variables and constants, but it was interesting to see how integers, Booleans, etc. are not separately defined. The functions, however, were more difficult to follow, specifically the sound functions that were provided such as playTone, startTone, and playClueSequence. The init sound synthesizer starting with var AudioContext and ending with o.start(0) was also hard to understand. I fidgeted around with different values for a few different variables like var pattern and the button frequencies when clicked on to see the results to get a better understanding of what each thing does. I also removed and added different elements to the functions, like the “hidden” attribute of the start and stop buttons. Since the purpose of the project was to get introduced to the languages and understand the basics of coding, I dedicated myself to reading through them and seeing the purpose of each implemented idea, but I still would love to get more experience and concrete knowledge on all the languages in the future.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Since JavaScript is very unfamiliar to me, I would love to get to know the language more. While HTML and CSS can make a website pretty, JavaScript is what can ultimately make it look more modern and user friendly, so I find it incredibly important to add it as a skill to my repertoire. A question I have about web development specifically is: where can I learn more about JavaScript, as in what applications, programs, websites, etc. could teach about it in a simple yet effective manner? Another question I have is: How do you publish a website for the public to see? Whenever I take a course on front-end development or watch a video on creating a website, they always say to buy a domain or that you are done after the code is done, but the details are never explicitly gone into.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would spend it on cleaning up the website and adding some more functions. First, I would deepen my knowledge on HTML/CSS and JavaScript by using sites like Codecademy and StackOverflow so that I could learn of any functions that I did not previously know about that could make the game more enjoyable and modern-looking. As of now, it looks mainly like a beginner’s project, but I would have enjoyed making either the instructions or the title “type itself out” like GitHub did with their sign-up/welcome page. Another function I would add is that people can choose either from a selection or input their own hex code so that the color of each button is whatever they wish. This could ramp up the difficulty for those who want more of a challenge, as they would only be able to go off sound. Similarly, the user could choose their own sounds from a selection for each button. I would also implement the optional features in the README template provided. As of now I do not have the knowledge to implement all of them, but I did style the website differently and use different pitches.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Raegan Girdley

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
