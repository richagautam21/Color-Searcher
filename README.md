# [Color Searcher]

An effortless color searcher which pulls color data and sort by similarity according to the provided color.

To calculate color similarity, it uses the pythagorean theorem in 3D to find the shortest distance from the RGB values of the color.

## Table of Contents

- Live Demo
- Features
- Clone this Repository
- Technology Stack
- Style

## Live Demo
Take a look at the live version here:
` https://color-searcher-ivory.vercel.app/`

## Features

It a single-page website in React that contains a color search tool. The tool
operates in the following way:

- Starts by doing a GET request to all colors from the XKCD colors JSON file:
  https://raw.githubusercontent.com/okmediagroup/color-test-resources/master/xkcd-colors.json
- Once the colors are fetched, it display them all in a large table containing information
  about each color.
- Allows the user to search the colors by inputting a CSS color code (Ie. “#FF0000”,
  “rgb(255,0,0)”) and hitting Enter.
- If the inputted color is valid, sort the colors by their similarity to the inputted
  color and display the top ~100 results.
- It utilises the pythagorean theorem in 3D to find the shortest distance from the RGB values of
  the  color.
- If the inputted colour is invalid and the user hits Enter, it displays an error message
  saying that the colour is invalid.
- If the initial fetch of the colours fails,it shows a Retry button that retries the fetch when
  clicked.

## Run the App
### Clone this Repository

``` 
git clone hhttps://github.com/richagautam21/ColorSearcher
```
### **Initial Setup**

Run the following when setting up the project for the first time:

```
npm run install
```
## Technology Stack

- React - Frontend Library
- TypeScript for type check
- React Hooks for Functional Components.
- Styled Components for styling
- Create-react-app for bundling.
- NPM to install the front-end libraries and the bundler.
- Colord to manage, install, and generate color profiles to accurately color manage input and output devices


## Style

- Valera Round - https://fonts.google.com/specimen/Varela+Round