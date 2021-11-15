# News Narwhal

A newsreader app made for an assignment using the news API from newsapi.org. 
<br>
News Narwhal was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Goal
The goal is to make a newsreader. I'm better at the other Frameworks (Polymer/Vue), but I've chosen to use React 
to show my React skills. This is also why I've also chosen to make all the React elements myself. 
Making use of the basic html elements. 

The newsreader will (hopefully) be fully responsive. From mobile to desktop views.
I also wanted to make sure that you could link articles/sections to other people with the url.

## Design
I chose an animal that started with the N for the name and an accompanying icon with some colors for the color scheme. 
I'm not a very good visual designer, but this works. I chose a font that works well in big blobs of texts (Roboto).

### UX
* **Drawer** - For the subject sections. My original plan was that you could add/remove your own sections. 
This would mean the length of the list would vary and thus placing them in the header would not work. Unfortunately 
I could not finish the adding/removing subjects in time. <br>
(A small remnant of this is that you can still fetch your own subject by using the url. Try /gaming for example)
* **Images** - Not every image would load and the contrast would vary. This is why I chose not to do text inside the images
like some 'competitors' did. To ensure the readability of the text. I also implemented a placeholder, since some 
articles lacked an image url.
* **Article Card** - It should contain the image, published time and the title. I also tried including the description
in it as well, but the length of title+description varied too much. This led to cut off descriptions that did not make 
sense. Hence, I stuck to title and time only.
* **Full article** - I made sure to include all the given information and bring attention to the most important parts
(title and description). I also linked to the original source of the article. I added some Lorem ipsum to make it look 
like the full articles.
* **Loading/Errors** - The user will be shown when the page is loading or if something went wrong. I created a small loading
animation that is also in the about page if you have fast internet.
* **Article published time** - Internal Javascript date/time functionality gives too much detail for the cards. I created a small function
to give a shorter more readable presentation.

### Linking problem
There is no article ID that points to a specific article. This means that linking/sharing articles to other 
people now only works if the article is already loaded once before. The linking is fixable, but not in reach within the 
timeframe for this project.

### Animations/transitions
I made a loading animation and a small drawer animation. Transitions between pages would slow the interaction down too much 
in my opinion. The next thing I would integrate is loading placeholders.

### Performance
I made sure the requested data caches and not including big external libraries for fast loading. This bottleneck now is
Newsapi.org itself.

### SEO
I made sure that the website has good performance, good accessibility, img alt keywords and good html tag usage 
(h1, button etc).

### Testability
I created one test to test if all the elements were visible on the page.

## How to run this app

### `npm install`
Run npm install to install all the dependencies.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

