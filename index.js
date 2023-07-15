// the z index deals with how different elements of html will overlay each other when styled by css.  This is important with elements that will overlap others like drop down navigation bars.  The z index determines which item will be in front of the other.  Th element has to be positioned with fixed, absolute, sticky, relative, the parent will overlap base on the height, and children take on the z index of the closest parent.

// floats purpose are to position elements within a container.  By floating an image for example you can position it within the container horizontally, saying left or right and the other content will flow around it.  This has been mostly outdated by flexbox and grid, but there are still a few examples of where it can be used.
// It's important to be mindful of what happen
// 
// yes I have used handlebars before.  I like it because it allows me to create dynamic html content.  It's easier read, more organized, and easier manipulate data.  Overall it helps with clarity, and efficiency when using.

// I really like it because it helps with better code organization, more readable syntax, and it's easier manipulate data when using.  Overalll it's just more efficient for developing software.

// progressive rendering is when you have the browser load the webpage in blocks to improve the perceived load time of the web page.  This helps to improve user exprience and engagement by presenting the most useful content first that the user will interact with before loading content or data structures that don't add to the initial viewing experience.  For example with something like gmail you would load the emails first before loading other ui features like chat or notifications.

// css selector specifity helps to 

// using the srcset image tag can benefit the user's overall experience by having the provide the optimal image resolution and size based on the conditions of the user's device.  The browser takes in the conditions 

// data attributes are great for storing local data on the html elements for the javascript to access without the need to use the DOM which can be resource intensive.  Overall it helps with code efficiency and organization when storing data.

// they are all client side ways of storing data, but each one has different uses.  cookies stores smaller data and sends it to the server, while session storage stores larger data that only lasts until the browser is closed.  Local storage maitnains this even when the browser closes.  It's important for the developer to be aware of what goals they are trying to accomplish when choosing the ways to store the data.

// html 5 helps to provide a robust, standardized web development platform using css, html and javascript.  By using these together we can build rich, responsive websites.

// input type = email, url, number, tel, date, time
//  textarea, select
// they all need name or the server won't know what to do with them

// with flexibile media within a respnsive web design you want the media whcih can be something like an image or video to automatically resize within it's container 
//  to maintain the proper viewing aspect ratio for an optimal viewing experience

// not, and, only but only is not supported on html4 so not great to use right now

// no they are mark up languages, they do not have the computational abiliities define programming languages, and do not have the ability to perform logic handling
// they perform no logic handling, and can not manipulate data
//  they rely on JS for complex functionalities
// they specify what should be done not how

// <audio controls volume "0.5"

// the join method combines an array into a string ", "

// the replace method takes in a search pattern and then replaces it with a string

// splits up a string into an array of substrings

// strong and b.  strong has semantic meaning for screen readers where bold is just stylistic

// form action="" method get
// label for 
// select id multiple
// option selected disabled name id value
// button type=submit

//  <a href = "emailTo:bbeck8123@gmail.com"

// audio controls volume -"0.5" muted autoplay loop load ="auto,metadata, preload"
// source src =jazz.org type=audio/ogg

// Dl
// dt then dd


// semantics is meant to give the elements and it's content meaning and purpose.  It is helpful for 
// browser, screen readers and other coders to understand the purpose of the content making it easier to undersand

// Math is a built in object in Javascript that acts as namespace for mathematical methods to be stored in.
// often referred as a namespace
// min, max, round, floor, ceil, random, abs, sqrt, pow


// constructor is a special method for a class.  It helps to initialize by creating the initial data space for the different properties.  It is automatically executed with the new keyword when calling the object.
//  it also helps with state of the object when called, and can also help with setup logic

// index start, # of indexes, replace elements

// polymorphism replaces the need for if/else statements

// when there are spaces and you are calling the object or special characters otherwise you use dot notation

// z index is a css property that deals with the stacking of elements along the z index, essentialy which elements will go in front of another.
// This is important when you are building a website with overlaying elements like a drop down navigation bar.
//  if you aren't familiar with the stacking conext it can make for some difficulities with the layout of the webpage
// for stacking context you can only apply them to a positioned element: being fixed, absolute, sticky, 
// the stacking index is ap
//  setting a z index value on an element creates a new stacking context affecting the stacking of the children.  The children take on the z index of the closest parent with a z index value

// it is generally a good idea put css at the head of the html for improved user experience because as the html loads you want the style to be rendered along with it
//  or the user will be seeing the content without styling which can be unappealing.
//   ANd put javascript at the end you avoid blocking the critical rendering path which can affect the loading time of the page.  Again this can affect the users expericence.

// clear: both 
// clearfix{
//     content: "",
//     table: ,
//     c
// }
// overflow: auto

// when reaching a global audience and building out multilingual site, you have to be aware of more than just the translation of the language.
// certain languages like german have longer words, so you need to make sure there is enough space in containers so it can accomdate it.  Some langauages like arabic read RTL, and being mindful of certain cultural sensitivies for images and icons.  
// Overall this helps to make a more inclusive and universally enjoyable experience

// each browser comes with default css styling, and resetting and normalizing both seek to address this.  Resetting completly resets the css styling of the browser, and then is filled in by the developer where normalizing seeks to standardize the stylings across different browsers.  I pref

// when serving a page with content in multiple languages there are a few things you can do.
// You can detect the users preference with HTTP headers, or have a drop down menu the user can choose from to serve localized content in the preferred lanaguage.
//  when building the website you can use the technique internationalization to improve the ability of serving multiple different langauages
// you can store text in files that are easily translated so you don't have to change source code, you can also use built in international properties like international time in javascript


// document type decalaration is used to let the browser know which version of html will be runned so that the browser can render it correclty
// if it is not declared the browser can have rendering issues that create website layout issues
// the browser may go into quirk mode to try and fill in the gaps
// doctype ensures consistent rendering across different browsers and allows for the html to be rendered correctly.


// all 3 deal with how javascript is loaded and executed.  They are important for a developer to understand,
//  for improving user experience and page load time.
// script, blocks and renders async, doesn't block but loads when done and defer doesn't block and waits for the whole doc to load
// script when it needs to run for things like a navigation bar to work correctly
// async when it doesn't matter when it is loaded and is not essential to the page
//  defer when you need the javascript to load in a specific order

// flash of unstyled content

// http headers, internationalization (store in files to easily be translated), locale-based content: use 

























