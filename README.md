# Cyber Snake

![alt text](responsive.jpg "Responsive sample")

**[Live demo](https://edb83.github.io/snake/)**

---

<span id="top"></span>

## Index

- <a href="#context">Context</a>
- <a href="#ux">UX</a>
  - <a href="#ux-overview">Overview</a>
  - <a href="#ux-stories">User stories</a>
  - <a href="#ux-wireframes">Wireframes</a>
  - <a href="#ux-design">Design</a>
- <a href="#features">Features</a>
  - <a href="#features-current">Current</a>
  - <a href="#features-future">Future</a>
- <a href="#technologies">Technologies Used</a>
- <a href="#testing">Testing</a>
  - <a href="#testing-auto">Automated</a>
  - <a href="#testing-manual">Manual</a>
  - <a href="#testing-responsive">Responsiveness</a>
  - <a href="#testing-resolved">Resolved issues</a>
  - <a href="#testing-unresolved">Unresolved issues</a>
- <a href="#deployment">Deployment</a>
- <a href="#credits">Credits</a>

---

<span id="context"></span>

## Context

Cyber Snake is an homage to the Nokia version of the game, which many of us will remember fondly from the advent of mobile gaming. While Nokia's monochrome version wasn't released until 1998, the Snake game concept dates back to 1976 when [Blockade](<https://en.wikipedia.org/wiki/Blockade_(video_game)>) first appeared in arcades. Since then, there have been hundreds of versions released, and for good reason. It is considered a classic in terms of design and even appears in New York's Museum of Modern Art alongside the likes of Minecraft, Pong and Tetris.

This version offers classic Snake gameplay, a clean interface, satisfying graphical feedback, and the kind of 'personality' typified by games of the 90s. If you feel any pangs of nostalgia then it has achieved its aim!

The game concept is simple:

- Guide your snake by changing its direction up, down, left or right in order to eat as many food blobs as you can
- Every time you eat some food you score one point, your snake grows by one segment and a new food spawns in a random location
- The game ends when your snake's head collides with its body or, if walls are enabled, you hit a wall.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
<span id="ux"></span>

## UX

<span id="ux-overview"></span>

### Overview

The game has been designed with no 'fluff' to distract players from having some fun. All design decisions have been made with the following goals in mind:

- Mobile-first
- Customisable code
- Simplicity
- Intuitive navigation
- Crisp controls
- Satisfying feedback
- Replayability

<span id="ux-stories"></span>

### User stories

#### As a player I want:

- To be able to jump straight into the game without needing further instructions
- A clean, uncluttered interface with all elements of the game within easy reach
- To be able to play on any device with simple, responsive controls
- To have options for both casual or more challenging gameplay
- To know how well I am doing
- Satisfying audio and visual feedback
- To have a reason to keep playing

#### As a site owner I want:

- To be able to customise the look and feel of the game easily

Several individuals contributed to testing the game and provided feedback on its gameplay, responsiveness and aesthetics at various points in development.

<span id="ux-wireframes"></span>

### Wireframes

The full suite of wireframes for **desktop**, **tablet** and **mobile** devices, plus a **sitemap**, can be accessed [here](wireframes/).

Overall the wireframes were successfully converted into a functioning application, however there were some deviations from the plan. These were:

1. Statistics menu - this was intended to live on a separate menu screen but was moved entirely to the scores menu. Rather that being able to pull up a screen showing, for example, the average score per game, this information is instead provided in comments such as "Your average score per game is X" or "You have been playing for X minutes in total"

2. Advanced image manipulation - the initial idea was to have a more flashy landing screen which would respond to user mouse movements, and to have other visuals passing behind the game area during play, either using the HTML canvas or CSS animations. This feature was outside the scope of the project and would have ultimately been an unnecessary distraction if not handled elegantly

<span id="ux-design"></span>

### Design choices

#### Colours

The theme of the game is a blend of retro, cyber and neon, with the colour palatte intended to illicit thoughts of a futuristic cityscape at dusk. The background dominates most of the screen and is punctuated by shocks of fluorescent glows. Web-safe colours have been chosen for the core elements of the game (as far as possible), while more leeway has been given to the supporting colours.

##### Core

The colours used for the core game aspects are easy on the eyes when concentrating but give sufficient contrast for easily identifying the game pieces. The snake (Phlox) on the background (Cetacean Blue) is the most frequent combination and is highly evocative of the overall futuristic/neon theme. The pure white text is bright but not overpowering, and is further broken up by sparing use of Neon Carrot and Screamin' Green (used also in the sparks' palette) to differentiate desktop and mobile controls. The enigmatic "the messier things become" in Phlox matches the colour of the snake.

The border of the game area is Deep Carmine Pink if walls are enabled, or Wageningen Green is they are not. This difference is intuitively suggesting green for safe and red for danger. Without this distinction it would be difficult to immediately convey whether or not walls were enabled, so the colours are as close to primary as possible.

- ![#001440](https://via.placeholder.com/15/001440/000000?text=+) #001440 (Cetacean Blue)
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) #ffffff (White)
- ![#DF00FE](https://via.placeholder.com/15/DF00FE/000000?text=+) #df00fe (Phlox)
- ![#FF3333](https://via.placeholder.com/15/FF3333/000000?text=+) #ff3333 (Deep Carmine Pink)
- ![#339933](https://via.placeholder.com/15/339933/000000?text=+) #339933 (Wageningen Green)

##### Food & Sparks

In keeping with the neon/cyber them, a fluorescent colour palette has been used which lends itself well to the glow effect on food and spark objects. A large number of colours has been used to amplify the spark effects, which can be quite dramatic in higher-scoring games. The temptation to include pink and purple hues (which are especially prominent in neon colour palettes) was resisted, so as to distinguish the neon purple snake.

- ![#ff355e](https://via.placeholder.com/15/ff355e/000000?text=+) #ff355e (Radical Red)
- ![#fd5b78](https://via.placeholder.com/15/fd5b78/000000?text=+) #fd5b78 (Wild Watermelon)
- ![#ff6037](https://via.placeholder.com/15/ff6037/000000?text=+) #ff6037 (Outrageous Orange)
- ![#ff9966](https://via.placeholder.com/15/ff9966/000000?text=+) #ff9966 (Atomic Tangerine)
- ![#ff9933](https://via.placeholder.com/15/ff9933/000000?text=+) #ff9933 (Neon Carrot)
- ![#ffcc33](https://via.placeholder.com/15/ffcc33/000000?text=+) #ffcc33 (Sunglow)
- ![#ffff66](https://via.placeholder.com/15/ffff66/000000?text=+) #ffff66 (Laser Lemon)
- ![#ccff00](https://via.placeholder.com/15/ccff00/000000?text=+) #ccff00 (Electric Lime)
- ![#66ff66](https://via.placeholder.com/15/66ff66/000000?text=+) #66ff66 (Screamin' Green)
- ![#aaf0d1](https://via.placeholder.com/15/aaf0d1/000000?text=+) #aaf0d1 (Magic Mint)
- ![#50bfe6](https://via.placeholder.com/15/50bfe6/000000?text=+) #50bfe6 (Blizzard Blue)

##### Headings

For the glowing headings, a combination of brighter neon pink/purple is used to cement the feeling of a futuristic cyberscape.

- ![#e60073](https://via.placeholder.com/15/e60073/000000?text=+) #e60073 (Red-Purple)
- ![#ff4da6](https://via.placeholder.com/15/ff4da6/000000?text=+) #ff4da6 (Brilliant Rose)

#### Fonts

[Orbitron](https://fonts.google.com/specimen/Orbitron#about) - for consistency and simplicity this is the only font used. The blend of robotic straight lines and biologic curves is decidedly sci-fi and particularly fitting for Cyber Snake. This was chosen over more hard-edged retro typefaces because it hints at something more organic and less robotic, in the same way that the snake's hard edges are juxtaposed with the exploding food globs.

#### Audio

The balance between adding a touch of ambience and the very real posibility of irritating players is a fine one. There are only three sound used in the game: menu change, eat food and game over, and if the player is not won over then the game can easily be muted.

- Menu change: a subtle mechanical click gives a touch of physicality even when out of the game
- Eat food: an retro pop/burst to bring about a positive response in the player for scoring points, with a suggestion of biological origins
- Game over: a shuddering halt/mechanical glitch in keeping with the futuristic theme

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="features"></span>

## Features

<span id="features-current"></span>

### Current

**1. Menu screens**

| Menu    | Description                                                                                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Main    | Shows controls for both desktop and mobile, and briefly explains how to play. There is also a hint of the game's 'personality', which is realised more fully on the scores screen                                   |
| Options | Sound toggle, walls toggle and choice of slow, medium or fast game speed                                                                                                                                            |
| Scores  | Shows the five top scores of the session plus some light-hearted encouragement based on the most recent score. If the last score was in the top five then a subtle animation effect indicates where the score ranks |

- **Main**: shows controls for both desktop and mobile, and briefly explains how to play. There is also a hint of the game's 'personality', which is realised more fully on the scores screen
- **Options**: sound toggle, walls toggle and choice of slow, medium or fast game speed
  - The options menu is also displayed while the game is paused but only game sound can be changed. The remaining options are still visible but appear disabled. This allows players to mute the game if they wish, but prevents them from 'cheating' by changing other settings mid-game and from possibly becoming confused by an 'extra' menu
- **Scores**: shows the five top scores of the session plus some light-hearted encouragement based on the most recent score. If the last score was in the top five then a subtle animation effect indicates where the score ranks

**2. Accessible layout**

- In portrait mode the canvas is pushed to the top of the screen so that players do not obscure the view of the game with their fingers, while in landscape mode the canvas is centred to allow for a two-thumbed control style either side of the canvas
- The game has been designed to always fit within a single screen, no matter its size or the menu content, to give it the feeling of a standalone application. There should never be an occasion where the player has to scroll or zoom, and for this reason these features have been disabled
- The menu buttons allow any menu to be accessed with just one click/tap. They always appear in the same position to give a physicality to the menu, and to prevent the player from having to reposition their cursor/finger unnecessarily

**3. Responsive HTML canvas**

- The core game (including the current score and high score) exists entirely in an HTML canvas element and could appear as a standalone element in another environment
- Whatever the display size or screen orientation, the canvas adapts instantly to fill the maximum possible screen area while preserving its resolution and aspect ratio. This extends not just to the size of the snake and food, but to the font-size of the scoreboard and to the size, velocity and gravity of particle effects

**4. Responsive/intuitive input**

- The game can be controlled with either a keyboard (and mouse) or touch-screen swipe gestures, using just one hand
- Player input responses are crisp and reliable at any game speed, thanks to directional changes being passed through a validator
- On mobile, panning gestures (via HammerJS) are recognised across the entire screen to prevent missed gestures
- Thanks to panning gesture recognition, sharp turns can be achieved with ease, even on mobile
- The game can be paused by either hitting spacebar or tapping the screen with two fingers simultaneously. The options menu is displayed while the game is paused but only game sound can be changed. The remaining options are still visible but appear disabled. This allows players to mute the game if they wish, but prevents them from 'cheating' by changing other settings mid-game and from possibly becoming confused by an 'extra' menu
- On desktop a new game can intuitively be started from the scores menu by pressing spacebar

**5. Playstyles**

A good mobile game caters to both casual and more engaged playstyles. The various game speeds should cater to all types of players, with the option to turn on walls providing an additional challenge and a more traditional Snake experience

**6. Game personality**

- In order to inject some personality in keeping with games from the 90s, text feedback is given to the player based on how well the game deems they have performed. This is a collection of around 30 comments (which appear in various combinations on the scores menu) intended to amuse, encourage and ridicule players as they attempt to beat their high score
- This approach was adopted rather than relying on dramatic music/audio or flashy visuals, with the aim of keeping players intruiged by what the game might say on reaching the next score milestone. The intended effect is that the game is judging the player's performance, giving them an incentive to prove it wrong

**7. Visual effects**

This is what the phrase "and the messier things become", refers to on the main menu screen. A simple physics particle effect showers the game board with multi-coloured sparks each time food is eaten. As more food is eaten, the number and velocity of sparks increases until the screen is awash with colour. This serves as both a reward for good play and in the later stages a pleasant distraction from the job at hand

**8. Audio**

The Web Audio API (via HowlerJS) provides reliable sound effects on all devices

**9. Local high score save**

The high score is saved to the device's local storage and will remain between game sessions, providing cookies are not deleted. This is a fundamental feature for giving players a reason to return

**10. Object Oriented Programming**

To improve the syntax of the code, Object Oriented Programming has been used as far as possible. The game is built with the following objects:

| Object     | Role                                                                                                                        |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Gameboard  | Handles the canvas and its resizing                                                                                         |
| Snake      | Constructor to handle the snake's location, trajectory and size                                                             |
| Food       | Constructor to handle the food's location                                                                                   |
| Spark      | Constructor to handle spark generation and randomisation (separate functions handle the spark array population and updates) |
| Game       | Handles game state changes, DOM element styling, game settings, collision detection and updates                             |
| Stopwatch  | Handles game time played (used only for stats updates)                                                                      |
| Stats      | Handles local storage of statistics                                                                                         |
| Scoreboard | Handles session scores and the score award text passed to the DOM                                                           |

- **Gameboard**: handles the canvas and its resizing
- **Snake**: a constructor to handle the snake's location, trajectory and size
- **Food**: a constructor to handle the food's location
- **Spark**: a constructor to handle spark generation and randomisation (separate functions handle the spark array population and updates)
- **Game**: handles game state changes, DOM element styling, game settings, collision detection and updates
- **Stopwatch**: handles game time played (used only for stats updates)
- **Stats**: handles local storage of statistics
- **Scoreboard**: handles session scores and the score award text passed to the DOM

**11. Customisation**

Rather than being hard-coded, visual and gameplay variables have been extracted to facilitate tweaks to the look and feel of the game. This enables much easier customisation on the developer's part

<span id="features-future"></span>

### Future

**Improved score-keeping system**

- Recording walls on/off and game speed alongside scores. After all, 200 points on slow with no walls is less of an achievement than 200 on fast with walls enabled

**Online leaderboard**

- A global/regional leaderboard to give a true sense of competition

**Gameplay modes/customisation**

- Special food changing playstyle - e.g. speed, points multiplier, extra food objects, altering size of snake body
- Different game modes - e.g. obstacles within the play area, a maze
- Graphical options - e.g. choice of snake colour, themes, particle effects

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="technologies"></span>

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - [HammerJS](https://hammerjs.github.io/) - mobile gesture recognition for responsive controls
  - [HowlerJS](https://howlerjs.com/) - handling of audio elements using Web Audio API

### Project management

- [Balsamiq](https://balsamiq.com/wireframes/) - Wireframe creation tool
- [GitHub](https://github.com/) - Version control and deployment
- [GitPod](https://gitpod.io/) - IDE used to code the game

### Style and theme

- [Autoprefixer](https://autoprefixer.github.io/) - to add CSS vendor prefixes
- [Google Fonts](https://fonts.google.com/) - Orbitron

### Online resources

- [Title](https://#)

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="testing"></span>

## Testing

<span id="testing-auto"></span>

### Automated testing

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - audit summary for both desktop and mobile:

- Performance = **Average**
- Accessibility = **Good**
- Best Practices = **Good**
- SEO = **Good**

[W3C - HTML](https://validator.w3.org/) - Summary - **PASS**

[W3C - CSS](https://jigsaw.w3.org/css-validator/) - Summary - **PASS**

- [CSS Lint](http://csslint.net/) - 0 errors, 0 warnings - **PASS**
- [Unicorn revealer - overflow](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - tested all pages and no evidence of overflow - **PASS**

[JS Hint](https://jshint.com/) - Summary - **PASS**

<span id="testing-manual"></span>

### Manual testing

**Summary**:

Text

The following scenarios were tested to ensure that the game functions as expected:

**1. Element 1**

- From each page
  - check zxy - **PASS**

**2. Element 2**

- From each page
  - check zxy - **PASS**

<span id="testing-responsive"></span>

### Responsiveness

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

Code was modified from the following sources:

- [Title](https://#)

### Content

- All text within the game is original content.

- The Deployment section was based on Richard Wells' README.md ([Source](https://github.com/D0nni387/Luxury-Door-Solutions/blob/master/README.md)).

### Acknowledgements

- Jonathan Munz (Code Institute Mentor) - for his sage advice, prompts to find solutions, and calm reassurances during the project

- The Code Institute Slack Community - for many tips and tricks discovered while browsing

### Disclaimer

This game was developed for educational purposes.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<!-- Drawing canvas:
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

Crayola fluorescent color palette:
https://colorswall.com/palette/360/

-->
