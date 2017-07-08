# Website Optimization Portfolio with Grunt
The goal of this project was to optimize very slow website portfolio using techniques learnt in the course.
- Optimize CRP and avoid render blocking scripts
- Optimize images
- Manipulate the script to achieve 60 fps during animation
- Use Task runner (Grunt in my case) to automate optimizations and minifications

*The optimized version of the project can be found here :* [Mobile-Portfolio-Grunt](https://sakela.github.io/mobile-portfolio-grunt/) *hosted with GitHub Pages!*

## Getting Started
* All the development source code is located in ```src/``` folder.
* Production code is located in ```dist/``` folder.

Download the Github repo of the project or clone it to your computer
```sh
$ cd to the folder you want to save project
$ git clone https://github.com/Sakela/mobile-portfolio-grunt.git
```
To work with Grunt you will need to use Node Package Manager (NPM) that you can use by downloading [NodeJS](https://nodejs.org/en/).
You can learn on how to get started with [Grunt here](https://gruntjs.com/getting-started)
```sh
npm install -g grunt-cli                      //Install Grunt CLI globally
npm install grunt --save-dev                  //Install grunt
npm install grunt-contrib-imagemin --save-dev //Install dependencies
npm install grunt-contrib-cssmin --save-dev   
npm install grunt-contrib-jshint --save-dev   
npm install grunt-contrib-uglify --save-dev    
npm install grunt-contrib-watch --save-dev    
grunt watch                                   //To run only one task
grunt                                         //To run all grunt tasks
```
#### Tasks ran with Grunt
- imagemin (minify all images)
- cssmin (minify CSS files)
- uglify (optimize JS files)
- jshint (lint free JS files)
- watch (watch changes and automatically perform optimizations above)

## Rubric demands
#### Part 1 PageSpeed score above 90 for landing page

To check current PageSpeed Insights score after optimizations follow the link [Score Results](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsakela.github.io%2Fmobile-portfolio-grunt%2F&tab=mobile)
* 95 - Mobile
* 96 - Desktop

 * Firstly to reduce the loading time, I moved all script tags to the end of the body tag and since Google Fonts take enourmous time to get response I loaded WebFont asynchronously.

 * Applied ```async``` attribute to load Analytics script and ```media = "print"``` to load print CSS file and avoid render blocking unless file is set to print.

 * I minified all the images using online png and jpeg image optimization tools, and rest minification is done with Grunt imagemin plugin

 * And lastly I cleared unnecessary CSS in ```style.css``` file, minified it and inlined CSS into ```index.html```.

#### Part 2 Get 60 FPS on scroll in Pizza.html and time to resize pizza elements takes less than 5ms
* Average time to resize pizzas is 1ms
* Average time to generate pizzas on load is approx. 50-55ms
* Scrolling consistent 60 FPS with average scripting time to generate last 10 frames, no more than 0 - 0.1ms

I tried avoid changing in the initial project, such as number of pizzas on load etc. and optimize the website as it was initially configured.

 * Firstly, to get the time on resizing pizzas, I updated the ```changePizzaSizes(size)``` so that it takes simply the width it needs and sets it to percentage ( instead of all unnecessary calculations it did). Thanks to Cam and quiz 10.

 * Throughout optimizations in ```main.js``` I excluded out of the loop all possible DOM queries and instead of making calculations in the loop I tried save precalculated results in variables. So for example it iterates through an array instead of creating each loop image element, add class .mover and then append it. All these steps helped me unload the function that listened to DOMContentLoad.

 * Looked for best ways to store reference to DOM nodes, such as ```document.getElementsByClassName``` etc.

 * Added ```will-transform``` property to .mover class, so that they take their own layer and do not cause the whole page to repaint.
