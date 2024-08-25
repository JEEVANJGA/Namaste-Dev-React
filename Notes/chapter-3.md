# npm scripts

- inside package.json, within scripts object add cli commands that you want to run.
- ex : "Scripts: {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }

- to run the script added, run 
- --> npm run start / npm start 
- --> npm run  build


# React Element
- React elements are kind of equivalent to dom-elements.
- it is an object and when this gets rendered to dom , it gets changed to html element.

# JSX
- developed by facebook developers.
- it is a JS syntax which is easier to create React Elements.
- JSX is not part of React, it makes react development easier.
- jsx is not html inside JS. jsx is html like syntax.
- jsx is used to create React elements with ease.
- browsers doesnt understand jsx as it is not pure JS.
- the jsx code gets transpiled before it reaches th JS engine by the transpiler/compiler babel or the one used in setup.
- attributes in JSX are written in camelCase.
- 