# My To Do List App

## React Highlights
- Components = reusable & separation of concerns
- Single Page Application (SPA) = we have one html file but can display many different "pages", React determines what content will be rendered in the div
- `index.js` is the first file to be executed, what is happening with this?
- Declarative approach = always define the desired target state(s) and let React figure out the actual JS DOM instructions (which is what you would have to do with vanilla JS)
- Transform code (look at static source files in dev tools)
- Best of both worlds! Easy to code/write and it is transformed for us behind the scenes
- Custom React elements MUST start with an upper case character
- Only one element can be returned from each component
- Pass data by adding an "attribute", called "props" aka properties in React
- A component in React is just a JS function!!
- Two different ways of writing the same component:

1. `const List = (props) => { }`
2. `function List(props) {}`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

