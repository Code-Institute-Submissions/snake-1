Drawing canvas:
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it

Detecting keypresses:
https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript

BUG: rapid pressing of direction keys results in snake eating itself
tried: setInterval on event listener
setTimeout
storing keypresses in queue
measuring time since last keypress
RESOLVED: moved keydownHandler into event listener and added if statement to check time since last keypress
https://stackoverflow.com/questions/14667010/limit-how-many-times-an-event-listener-can-trigger-every-second

Sound function:
https://www.w3schools.com/graphics/game_sound.asp

Free sounds:
https://freesound.org/home/

Canvas tutorial:
https://www.youtube.com/watch?v=EO6OkltgudE&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=1

Color wheel:
https://color.adobe.com/create/color-wheel

Sorting scores:
https://www.javascripttutorial.net/javascript-array-sort/

Guidance on how to handle game loops:
https://developer.mozilla.org/en-US/docs/Games/Anatomy

Preventing setInterval repeating on game restart:
https://stackoverflow.com/questions/29836686/code-in-setinterval-executing-more-than-once

Random int (min, max):
https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

Dynamic canvas font size:
https://stackoverflow.com/questions/22943186/html5-canvas-font-size-based-on-canvas-size

Prevent scrolling on mobile:
https://stackoverflow.com/questions/10592411/disable-scrolling-in-all-mobile-devices#:~:text=document.-,body.,behaviour%20prevented%20should%20be%20scrolling.

Hammer.js:
https://hammerjs.github.io/

Glowing text:
https://www.w3schools.com/howto/howto_css_glowing_text.asp

Seconds to HMS converor:
https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096923

Arrow functions and this:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this

Checkbox restyling:
https://dev.to/proticm/styling-html-checkboxes-is-super-easy-302o

Avoid clicks:
https://css-tricks.com/almanac/properties/p/pointer-events/


# Cyber Snake

![alt text](responsive.jpg "Responsive sample")

**[Live site](https://edb83.github.io/snake/)**

---

<span id="top"></span>

## Index

- <a href="#context">Context</a>
- <a href="#ux">UX</a>
  - <a href="#ux-stories">User stories</a>
  - <a href="#ux-wireframes">Wireframes</a>
  - <a href="#ux-theme">Theme</a>
- <a href="#features">Features</a>
  - <a href="#features-all">Site wide</a>
  - <a href="#features-pages">Pages</a>
  - <a href="#features-future">Still to implement</a>
- <a href="#technologies">Technologies Used</a>
- <a href="#testing">Testing</a>
  - <a href="#testing-auto">Automated</a>
  - <a href="#testing-manual">Manual</a>
  - <a href="#testing-responsive">Responsiveness</a>
  - <a href="#testing-resolved">Resolved issues</a>
  - <a href="#testing-unresolved">Unresolved issues</a>
  - <a href="#testing-bugs">Known bugs</a>
- <a href="#deployment">Deployment</a>
- <a href="#credits">Credits</a>

---

<span id="context"></span>

## Context

Cyber Snake is an attempt to recreate the Nokia version of the game, which many of us will remember fondly from the advent of mobile gaming. While Nokia's monochrome version wasn't released until 1998, the Snake game concept dates back to 1976 when [Blockade](<https://en.wikipedia.org/wiki/Blockade_(video_game)>) first appeared in arcades. Since then, there have been hundreds of versions released, and for good reason. It is considered a classic in terms of design and even appears in New York's Museum of Modern Art alongside the likes of Minecraft, Pong and Tetris.

This version offers classic Snake gameplay, a clean interface, satisfying graphical feedback, and the kind of 'personality' typified by games of the 90s. If you feel any pangs of nostalgia then it has achieved its aim!

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
<span id="ux"></span>

## UX

### Overview

Simplicity
Easy to navigate
Crisp controls
Visual feedback
Replayability
Engagement / dialogue

<span id="ux-stories"></span>

### User stories

For ease of reference, the means by which a user's expectations have been met are summarised in the tables below:

| As a **site owner** I want                                   | How this is achieved                                                                                                    |
| :----------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| To be able to customise the look and feel of the game easily | Core variables can be manipulated easily to change both look and feel, e.g. colors, particle physics, speed, board size |

| As a **user** I want                                                          | How this is achieved                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :---------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To know how well I am doing                                                   | During play, the only information available is the current score and the all-time high score for the device/browser. The session scoreboard shows the five most recent scores since the browser was opened, while the all-time high score is saved to local storage. Assuming cookies are not deleted, players can return to try to beat their previous high-score. On the gameover/scores screen a message is displayed based on the most recent (and even previous) performance, offering words of 'encouragement'. |
| To have some gameplay options                                                 | Players can choose from three speed settings (slow, medium, fast) for very different playing experiences. Additionally, enabling walls provides a more classic style of gameplay and doubles up as a 'hard mode'.                                                                                                                                                                                                                                                                                                     |
| Satisfying visual feedback                                                    | A simple particle effect system showers the game board with multi-coloured sparks each time food is eaten. As more food is eaten, the number and velocity of sparks increases until the screen is awash with colour. This serves as both a reward for good play and in the later stages a pleasant distraction from the job at hand.                                                                                                                                                                                  |
| To have a reason to keep playing                                              | Beyond beating highscores (which are saved to local storage), there are increasing particle effects for scoring higher and a catty 'commentary' at gameover, with a number of possible outcomes.                                                                                                                                                                                                                                                                                                                      |
| To be able to play on any device with simple controls                         | Hammer js touch controls allow for responsive play on mobile, equal to (and perhaps even surpassing) the desktop control system. Both mobile and desktop can be controlled using only one hand, and the game can be paused.                                                                                                                                                                                                                                                                                           |
| A clean, uncluttered interface with all aspects of the game within easy reach | The design approach is very simple, with four possible screens: instructions, options, score and the play state. Each menu screen is just one click away from the others, however only the options screen can be accessed directly from the play state (using space bar or two-finger tap). The only options available are to toggle audio, in-game walls and game speed. Walls and game speed cannot be changed from the pause menu to prevent confusion or 'cheating'.                                              |

Several individuals contributed to testing the game and provided feedback on its gameplay, responsiveness and aesthetics at various points in development.

<span id="ux-wireframes"></span>

### Wireframes

Overall the wireframes were successfully converted into a functioning application, however there were some deviations from the plan. These were:

1. Statistics menu
2. Advanced image manipulation via the canvas

The full suite of wireframes for **desktop**, **tablet** and **mobile** devices, plus a **sitemap**, can be accessed [here](wireframes/).

### Theme

Retro
Cyber
Neon

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="features"></span>

## Features

<span id="features-all"></span>

### Site-wide

**1. Responsive HTML canvas**

- The fundamental aspects of the game (including the current score and high score) are represented through an HTML canvas and could appear as a standalone element in another environment. The canvas itself adapts to fill the maximum possible screen area while preserving its graphical resolution and aspect ratio. Providing a strong mobile experience was an essential requirement, and every effort has been made to ensure the game scales as far as possible without the need for extensive CSS styling.

<span id="features-future"></span>

### Features left to implement

- Global leaderboard

  _Details_

- Gameplay customisations
  _Beyond the classic implementation: Difficulty levels, special food, obstacles, graphical options_

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="technologies"></span>

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - [HammerJS](https://hammerjs.github.io/) - modal gallery

### Project management

- [Balsamiq](https://balsamiq.com/wireframes/) - Wireframe creation tool
- [GitHub](https://github.com/) - Version control and deployment
- [GitPod](https://gitpod.io/) - IDE used to code the site

### Style and theme

- [Autoprefixer](https://autoprefixer.github.io/) - Post CSS plugin which parses CSS and adds vendor prefixes
- [Color Scheme Designer](https://colorschemedesigner.com/csd-3.5/) - Complimentary color scheme for the site
- [Google Fonts](https://fonts.google.com/) - Orbitron

### Online resources

- [Title](https://#)

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="testing"></span>

## Testing

<span id="testing-auto"></span>

### Automated testing

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - ran an audit for both desktop and mobile.

Summary:

- Performance = **Average**

  - Details

- Accessibility = **Good**
  - Details
- Best Practices = **Good**
  - Details
- SEO = **Good**
  - Details

Mobile scores:

- [JS Hint](https://jshint.com/) - Summary - **PASS**
- [CSS Lint](http://csslint.net/) - 0 errors, 0 warnings - **PASS**
  - Details
- [W3C - HTML](https://validator.w3.org/) - Summary - **PASS**
  - Details
- [W3C - CSS](https://jigsaw.w3.org/css-validator/) - Summary - **PASS**
  - Details
- [Unicorn revealer - overflow](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - tested all pages and no evidence of overflow - **PASS**

<span id="testing-manual"></span>

### Manual testing

**Summary**:

Text

The following scenarios were tested to ensure that the site is functioning as expected:

**1. Element 1**

- From each page
  - check zxy - **PASS**

**2. Element 2**

- From each page
  - check zxy - **PASS**

<span id="testing-responsive"></span>

### Responsiveness

The site has been designed with a mobile-first ph

The following issues arose and have each been addressed:

| Issue | Solution |
| :---- | :------- |
| Text  | Text     |

#### Browsers

Tested on:

- Chrome
- Edge
- Firefox
- Safari (iOS)

#### Screen sizes

Tested with Chrome DevTools using profiles for:

- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5 SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro

... and also using the responsive profiles of:

- Mobile S (320px)
- Mobile M (375px)
- Mobile L (425px)
- Tablet (768px)
- Laptop (1024px)
- Laptop L (1440px)

Real world testing on:

- iPhone 6S
- iPhone 11 Pro
- Asus ZenBook
- Dell XPS 7590

### Issues and resolutions

<span id="testing-resolved"></span>

#### Resolved

- **Issue**

  - Resolution

<span id="testing-unresolved"></span>

#### Unresolved

- **Issue**

  - Resolution

<span id="testing-bugs"></span>

### Known bugs

- None at present

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="deployment"></span>

## Deployment

There is just one branch of this project (master) and the deployed version of this site is the most current version in the repository.

### How to deploy

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/Edb83/snake), the following steps were taken:

1. From the menu items near the top of the page, select **Settings**
2. Scroll down to the **GitHub Pages** section
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page will be automatically refreshed and the website is now deployed
5. Scroll back down to the **GitHub Pages** section in **Settings** to retrieve the link to the deployed website. It may take a short time to go live, but typically less than 60 seconds

### How to run locally

To clone this project from GitHub:

1. Under the repository name, click **Clone or download**
2. In the **Clone with HTTPs** section, copy the clone URL for the repository
3. In your local IDE open Git Bash
4. Change the current working directory to the location where you want the cloned directory to be made
5. Type `git clone`, and then paste the URL you copied in Step 2

```console
git clone https://github.com/Edb83/snake.git
```

6. Press Enter. Your local clone will be created

Further reading and troubleshooting on cloning a repository from GitHub can be found [here](https://help.github.com/en/articles/cloning-a-repository).

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="credits"></span>

## Credits

Code was either directly copied or modified from the following sources:

- [Title](https://#)

### Content

Text

The Deployment section was based on Richard Wells' README ([Source](https://github.com/D0nni387/Luxury-Door-Solutions/blob/master/README.md)).

### Acknowledgements

- Jonathan Munz (Code Institute Mentor) - for his sage advice, prompts to find solutions, and calm reassurances during the project

- The Code Institute Slack Community - for many tips and tricks discovered while browsing

### Disclaimer

This application was developed for educational purposes.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
