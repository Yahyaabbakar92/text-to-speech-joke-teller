# text-to-speech-joke-teller

Personal project

Live: ()

Date started: 13 January 2023

Date completed: 14 January 2023

## Objectives

When a user clicks the button, a joke is retrieved from the joke api. That joke is passed to a text to speech api and that will tell us the joke

## Screenshot

![Alt text](imgs/Screenshot%202023-01-14%20at%2020.10.53.png)

## Things I learned

- SDK vs API (https://www.reddit.com/r/explainlikeimfive/comments/1al2az/eli5_what_is_an_api_what_is_a_sdk_what_is_an_ide/)
  essentially SDK can be thought of as a tool box that contains the tools if for example its to build an RC car, the tools for that are what you would call SDK. API are interfaces that allows software to communicate with one another
- Using global variables in another js file allows access to it in another js file
- Calling an async function as a parameter of another function returns a promise

## Thought process

- Get jokes from joke api
- Store the joke in a variable to be used by the text-to-speech api
- Create a function that will deliver the joke to the text-to-speech api
- Add a click event to the button that will get the joke and make the joke be said by the text to speech api

## Need to refactor
