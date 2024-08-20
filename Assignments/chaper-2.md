# Chapter 02 - - Igniting our App

## Section 1: Theory | Questions and Answers

### Question 1

**Q:** What is NPM?  
**A:** npm (Node Package Manager) is a package manager for JavaScript, primarily used for managing dependencies in Node.js projects. It allows developers to install, update, and manage libraries and tools that their projects depend on.

#### Key Features of npm:

- **Package Management**: Easily install and manage project dependencies.
- **Version Control**: Keep track of the versions of installed packages.
- **Scripts**: Define custom scripts to automate tasks like testing, building, and deploying.

#### Example:

```sh
# Initialize a new project
npm init

# Install a package
npm install <package-name>

# Run a script defined in package.json
npm run <script-name>

npm is an essential tool for modern JavaScript development, making it easier to manage project dependencies and automate various tasks.
```

### Question 2

**Q:** What is Parcel/Webpack? Why do we need it?  
**A:** Parcel and Webpack are module bundlers for JavaScript applications. They take modules with dependencies and bundle them into a single file or a few files that can be included in a web application.

#### Key Features:

- **Code Splitting**: Split code into smaller chunks for better performance.
- **Hot Module Replacement**: Update modules in the browser without a full reload.
- **Asset Management**: Handle assets like images, fonts, and stylesheets.

#### Example:

```sh
# Install Parcel
npm install --save-dev parcel-bundler

# Bundle the application
parcel index.html

We need module bundlers to optimize and manage the dependencies and assets of our applications, improving performance and maintainability.
```

### Question 3

**Q:** What is `.parcel-cache`?  
**A:** The `.parcel-cache` directory is used by Parcel to store intermediate build results. This cache speeds up subsequent builds by reusing previously computed results, reducing the time it takes to bundle the application.

#### Key Features:

- **Faster Builds**: Speeds up the build process by caching intermediate results.
- **Incremental Builds**: Only rebuilds the parts of the application that have changed.

#### Example:

```sh
# Clean the cache
rm -rf .parcel-cache

The .parcel-cache directory helps improve the efficiency of the build process by caching results and reducing redundant computations.
```

### Question 4
**Q:** What is `npx`?  
**A:** `npx` is a package runner tool that comes with npm (Node Package Manager) version 5.2.0 and higher. It allows you to execute binaries from npm packages without globally installing them. This is particularly useful for running one-off commands or scripts from packages.

#### Key Features:
- **Execute Packages**: Run packages without installing them globally.
- **Avoid Version Conflicts**: Use the exact version of a package required for a project.
- **Convenience**: Simplifies the process of running commands from npm packages.

#### Example:
```sh
# Run a package without installing it globally
npx create-react-app my-app

# Run a specific version of a package
npx create-react-app@3.4.1 my-app

npx is a convenient tool for running npm package binaries, ensuring you use the correct version and avoiding global installations. 
```

### Question 5
**Q:** What is the difference between `dependencies` and `devDependencies`?  
**A:** In a Node.js project, `dependencies` and `devDependencies` are two types of dependencies listed in the `package.json` file. They serve different purposes:

#### `dependencies`:
- **Purpose**: These are the packages required for the application to run in production.
- **Installation**: Installed when you run `npm install`.
- **Example**: Libraries like React, Express, or Lodash that your application needs to function.

#### Example:
```json
{
  "dependencies": {
    "react": "^17.0.2",
    "express": "^4.17.1"
  }
}
```

#### `devDependencies`:
- **Purpose**: These are the packages needed only during the development and testing phases.
- **Installation**: Installed when you run `npm install` or `npm install --only=dev`.
- **Example**: Tools like Webpack, Babel, or Jest that are used for building, testing, or linting your code.

#### Example:
```json
{
  "devDependencies": {
    "webpack": "^5.38.1",
    "babel-core": "^6.26.3",
    "jest": "^27.0.6"
  }
}
```

Understanding the difference between dependencies and devDependencies helps in managing the packages efficiently and ensures that only necessary packages are included in the production build.

### Question 6
**Q:** What is Tree Shaking?  
**A:** Tree Shaking is a term commonly used in the context of JavaScript bundlers like Webpack and Rollup. It refers to the process of eliminating dead code (unused code) from the final bundle. This optimization technique helps reduce the bundle size and improve the performance of the application.

#### Key Features:
- **Dead Code Elimination**: Removes code that is not used anywhere in the application.
- **Static Analysis**: Analyzes the code statically to determine which parts of the code can be safely removed.
- **Improved Performance**: Reduces the size of the final bundle, leading to faster load times and better performance.

#### Example:
Consider the following code:
```javascript
// utils.js
export function usedFunction() {
  console.log('This function is used');
}

export function unusedFunction() {
  console.log('This function is not used');
}

// main.js
import { usedFunction } from './utils';

usedFunction();
```

In this example, unusedFunction is never called in main.js. Tree shaking will remove unusedFunction from the final bundle, resulting in a smaller and more efficient bundle.

Tree shaking is an essential optimization technique for modern JavaScript applications, ensuring that only the necessary code is included in the final bundle. 

### Question 7
**Q:** What is Hot Module Replacement?  
**A:** Hot Module Replacement (HMR) is a feature in module bundlers like Webpack that allows modules to be updated in the browser without a full page reload. This improves the development experience by preserving the application state and providing faster feedback during development.

#### Key Features:
- **State Preservation**: Maintains the application state between updates.
- **Faster Development**: Provides immediate feedback by updating only the changed modules.
- **Improved Productivity**: Reduces the time spent waiting for the application to reload.

#### Example:
Consider a React application where you are developing a component:
```javascript
// App.js
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```
With HMR enabled, if you make a change to the App component, only the modified component will be updated in the browser, and the current state (e.g., the count value) will be preserved.

#### Enabling HMR in Webpack:
To enable HMR in a Webpack configuration, you need to add the `HotModuleReplacementPlugin` and set up the dev server:
```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ... other configurations
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
```
Hot Module Replacement is a powerful feature that enhances the development workflow by allowing real-time updates and preserving the application state.

### Question 8
**Q:** List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words  
**A:** My favorite 5 superpowers of Parcel are:

1. **Zero Configuration**
2. **Fast Performance**
3. **Hot Module Replacement (HMR)**
4. **Tree Shaking**
5. **Built-in Support for Multiple Languages**

#### Descriptions:

1. **Zero Configuration**: Parcel requires no configuration to get started. It automatically detects the entry point of your application and sets up the necessary build process. This makes it incredibly easy to start new projects without spending time on configuration files.

2. **Fast Performance**: Parcel is designed to be fast. It uses worker threads to parallelize the build process, which significantly speeds up the compilation time. Additionally, Parcel's caching mechanism ensures that only changed files are recompiled, further improving build performance.

3. **Hot Module Replacement (HMR)**: Parcel supports Hot Module Replacement out of the box. This feature allows you to see changes in your application in real-time without a full page reload. It preserves the application state, making the development process smoother and more efficient.

Parcel's superpowers make it a powerful and user-friendly tool for modern web development, enhancing productivity and reducing the complexity of the build process.

### Question 9
**Q:** What is `.gitignore`? What should we add and not add into it?  
**A:** A `.gitignore` file is used in Git to specify which files and directories should be ignored by Git. This helps keep the repository clean and free from unnecessary files.

#### What to Add:
- **Node Modules**: `node_modules/`
- **Build Artifacts**: `dist/`, `build/`
- **Environment Variables**: `.env`
- **Log Files**: `*.log`
- **System Files**: `.DS_Store`, `Thumbs.db`

#### What Not to Add:
- **Source Code**: `.js`, `.html`, `.css`, etc.
- **Configuration Files**: `package.json`, `webpack.config.js`, etc.
- **Documentation**: `README.md`

#### Example:
```plaintext
# Node modules
node_modules/

# Build output
dist/
build/

# Environment variables
.env

# Log files
*.log

# OS-specific files
.DS_Store
Thumbs.db
```
Using a .gitignore file helps maintain a clean and efficient repository by excluding unnecessary files and directories from being tracked by Git.

### Question 10
**Q:** What is the difference between `package.json` and `package-lock.json`?  
**A:** 

#### `package.json`:
- **Purpose**: Lists the project's dependencies, scripts, and metadata.
- **Usage**: Defines the packages required for the project and their version ranges.
- **Example**:
  ```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
      "start": "node index.js"
    },
    "dependencies": {
      "express": "^4.17.1"
    }
  }
  ```

#### `package-lock.json`:
- **Purpose**: Records the exact versions of dependencies installed.
- **Usage**: Ensures consistent installs across different environments by locking the dependency tree.
- **Example**:
  ```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
      "express": {
        "version": "4.17.1",
        "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
        "integrity": "sha512-..."
      }
    }
  }
  ```
In summary, package.json defines the dependencies and scripts for the project, while package-lock.json locks the exact versions of those dependencies to ensure consistency. 

### Question 12
**Q:** Why should I not modify `package-lock.json`?  
**A:** You should not modify `package-lock.json` manually because it is automatically generated by npm to lock the exact versions of dependencies. Modifying it can lead to inconsistencies and potential issues with dependency resolution.

### Question 13
**Q:** What is `node_modules`? Is it a good idea to push that on Git?  
**A:** `node_modules` is a directory where npm installs the project's dependencies. It is not a good idea to push `node_modules` to Git because it contains a large number of files and can be easily regenerated using `package.json` and `package-lock.json`.

### Question 14
**Q:** What is the `dist` folder?  
**A:** The `dist` folder (short for "distribution") contains the compiled and minified version of your source code, ready for production deployment. It is generated by build tools like Webpack or Parcel.

### Question 15
**Q:** What is `browserslist`?  
**A:** `browserslist` is a configuration file that specifies which browsers your project supports. It is used by tools like Babel and Autoprefixer to ensure compatibility with the specified browsers.

#### Example:
```plaintext
# .browserslistrc
> 1%
last 2 versions
not dead
```
### Question 16
**Q:** What are the script types in HTML?  
**A:** In HTML, the `<script>` element can have different types, specified by the `type` attribute. The `type` attribute defines the scripting language of the embedded or external script.

#### Common Script Types:

1. **JavaScript (Default)**:
   - **Type**: `text/javascript` (default, can be omitted)
   - **Usage**: Embeds or links to JavaScript code.
   - **Example**:
     ```html
     <script src="script.js"></script>
     ```

2. **Module**:
   - **Type**: `module`
   - **Usage**: Allows the use of ES6 modules, enabling import/export functionality.
   - **Example**:
     ```html
     <script type="module" src="module.js"></script>
     ```

3. **JSON**:
   - **Type**: `application/json`
   - **Usage**: Embeds JSON data within a script tag.
   - **Example**:
     ```html
     <script type="application/json">
     {
       "name": "example",
       "version": "1.0.0"
     }
     </script>
     ```

4. **WebAssembly**:
   - **Type**: `webassembly`
   - **Usage**: Embeds or links to WebAssembly modules.
   - **Example**:
     ```html
     <script type="webassembly" src="module.wasm"></script>
     ```

5. **Other Types**:
   - **Type**: Custom types for specific use cases or libraries.
   - **Example**:
     ```html
     <script type="text/babel" src="script.jsx"></script>
     ```

#### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script Types Example</title>
</head>
<body>
  <!-- Default JavaScript -->
  <script src="script.js"></script>

  <!-- ES6 Module -->
  <script type="module" src="module.js"></script>

  <!-- JSON Data -->
  <script type="application/json">
  {
    "name": "example",
    "version": "1.0.0"
  }
  </script>
</body>
</html>
```
Different script types in HTML allow for various functionalities and integrations, enhancing the capabilities of web applications.

## Section 2: Coding Tasks

- In your existing project

  - [x] Initialize `npm` into your repo
  - [x] Install `react` and `react-dom`
  - [x] Remove CDN links of React
  - [x] Install Parcel
  - [x] Ignite your app with Parcel
  - [x] Add scripts for “start” and “build” with Parcel commands
  - [x] Add `.gitignore` file
  - [x] Add `browserslist`
  - [x] Build a production version of your code using `parcel build`



## Section 3: References

- [Creating your own create-react-app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [BrowsersList](https://browserslist.dev/)
