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
- Clone the repository from [here]
- Install the dependencies:
  - First, open a new terminal or CMD.
  - Navigate to the root of your project `(using cd)`.
  - Type `npm install` and hit enter.
- Run the automation by typing `npm run test`.
- Generate the report `npm run report` and voila.
___

# Explanation of the solution

I am proposing to use WebdriverIO for the following reasons:
- Ease of set up and configure.
- It is front-end friendly. Due to its javascript nature, front-end developers could easily contribute to the project.
- It uses selenium under the hood but we don't need deal with it directly.
- I also wanted to generate a report, I found Allure very easy to integrate and that also made lean towards WebdriverIO.
___

# The code structure

The code structure is the following:

    ├── data                    # Information needed for the automation
    ├── pages                   # PageObjects 
    ├── test                    
    │   ├── specs               # Testsuites
    ├── package.json            # Metadata, dependencies, scripts, versioning
    ├── wdio.conf.js            # Configuration file
    └── README.md

- Under the `data/` folder I intend to have different json objects defining constants needed for the project. I would also define a "faker objects" that generate random data to promote test independency and to avoid harcoded test-data for the the testcases.
- Under `pages/`, the idea is to have the pageObjects used throughout the project. In this case it only contains the `HomePage`, but it could have several pages. 
- Under `test/specs/` we will place the different testsuites of the automation project.

___

# Notes

## Steps I am not taking into account
- `Environment` That is something we should care about and plan for it, I would probably use and ENV variable to adjust the environment appropiately if there's more than one environment to test. i.e. QA $ DEV.


## Why not other frameworks and comments

I left aside:
- Java and selenium because:
  - The framework needs some additional effort to be able to start automating (the proper way)
  - It is a little bit more verbose.
  - If the front-end developers want to help and they have no Java experience. There would be a learning curve that we should take into account.
  - The structure is a little bit more complicated and the tests are a little bit more verbose.


I also considered using Cypress because:
- It is easy to setup and start automating.
- It's structure is well defined. (even if it's very opinionated)
- It is easy to debug.
- It is front-end friendly.
- It eliminates some of the problems that Selenium have, due to the way it was developed (to work in the browser).



