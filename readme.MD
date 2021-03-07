# Challenge

This repository contains a simple solution for an automation challenge.

___
# Steps to run the solution
## 1. Pre-requisites
Make sure you have installed:
- git
- Node.js, in case you don't have it check this [link](https://nodejs.org/en/)
- Chrome version 89

## 2. Run the solution and generate the report
In order to run the solution you have to:
- Clone the repository from [here](https://github.com/gcalvoCR/challenge-auto)
- Install the dependencies:
  - First, open a new terminal or CMD.
  - Navigate to the root of your project `(using cd)`.
  - Type `npm install` and hit enter.
- Run the automation by typing `npm run test`.
- Generate the report `npm run report` and voilà.
___

# Explanation of the solution

I am proposing to use WebdriverIO for the following reasons:
- Ease of set up and configure.
- It aligns with the technologies that the company works with.
- It is front-end friendly. Due to its javascript nature, front-end developers could easily contribute to the project.
- It uses selenium under the hood but we don't need deal with it directly.
- It is less verbose than Java.
- It integrates with many libraries easily.
- It has great documentation / support.
___

# The code structure

The code structure is the following:

    ├── data                    # We store and generate data for the automation in this folder
    ├── pages                   # PageObjects 
    ├── test                    
    │   ├── specs               # Testsuites
    ├── package.json            # Metadata, dependencies, scripts, versioning
    ├── wdio.conf.js            # Configuration file
    └── README.md

- Under the `data/` folder I intend to have different json objects defining constants needed for the project. I would also define "faker objects" that generate random data to promote test independency and to avoid harcoded test-data for the the testcases.
- Under `pages/`, the idea is to define the page-objects used throughout the project. In this case it only contains the definition of the `HomePage`, but it could have several classes. 
- Under `test/specs/` I will place the different testsuites of the automation project.

___

# Notes

## Making things easy
- I added some 2 scripts to the package.json to make the execution easy.
  - `"test": "npx wdio run ./wdio.conf.js"`
  - `"report": "npx allure generate allure-results && npx allure open"`


## Steps I am not taking into account
- `Environment` That is something we should care about and plan for it, I would probably use and ENV variable to adjust the environment appropiately if there's more than one environment to test. i.e. `qa, dev, staging`.


## Why not other frameworks and comments

I left aside:
- Java and selenium because:
  - The framework needs some additional effort to be able to start automating (the proper way).
  - It is a little bit more verbose.
  - If front-end developers want to help and they have no Java experience. There would be a learning curve that we should take into account.
  - The structure is a little bit more complicated, something I tried to avoid for this exercise.


I also considered using Cypress because:
- It is easy and fast to setup / start automating.
- Its structure is well defined. (even if it's very opinionated)
- It is easy to debug.
- It is front-end friendly.
- It eliminates some of the problems that Selenium have, due to the way it was developed (to work in the browser).


___

### by Gabriel Calvo Vargas

¿Do you have questions or comments? Let's talk! 

Also, feel free to contact me over LinkedIn --> [here](https://www.linkedin.com/in/gcalvoCR)! 





