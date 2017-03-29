# Angular Soccer Score
This is a tiny Angular2 component that loads data from a json webservice and displays the results in a fancy way.

![alt tag](https://raw.githubusercontent.com/AndresCL/AngularSoccerScore/master/demo.png)

## About

- **Transpiling ES6**: TypeScript compiled via npm script
    + Compiled from the `app/` folder to the `dist/` folder
- **Loading Imports**: SystemJS is the loader 
- **Serving**: [lite-server](https://github.com/johnpapa/lite-server) serves our dev server

## Requirements

- [node and npm](https://nodejs.org)

## Installation

- Install dependencies: `npm install`
- Start the app: `npm start`
- View the app: <http://localhost:3000>

## Data Source

We are going to use this end point:

`http://worldcup.sfg.io/matches`

Check out this great project serving our endpoint: https://github.com/estiens/world_cup_json

## Usage

- The Angular application is found in the `app/` directory