# Employee Summary Template Engine
![GitHub repo size](https://img.shields.io/github/repo-size/malex19889/Employee-Summary-Template-Engine?style=for-the-badge)

A Node CLI app that takes in information about employees and generates an HTML webpage that displays summaries for each person. The app will use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company, and then will generate a `team.html` file

## Table of Contents
* [User story](#User_story)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Submissions](#Submissions)
## User story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Installation

First in your terminal use  $`cd "path to app directory"` then run `npm i` to install all packages.The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. Once packages are installed run `node app.js` to launch the app.

## Usage 

The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.  When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.


## Tests

Test are located in the test forlder in the main app directory


## Submissions

You are required to submit the following:

GitHub repository: https://github.com/malex19889/Employee-Summary-Template-Engine.git

video demonstrating the entirety of the app's functionality: https://drive.google.com/file/d/1XSvPgbpzNW7znD1mwu3gf9JmKImK1-vO/view
