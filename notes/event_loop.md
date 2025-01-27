# event loop in JS

- **JS can do only one thing at time**
- **The call stack**
  - _for every function call a new floor in the call stack is built_
  - _Overflow of stack is their_
- **blocking**
  - _Things that are slow and are in the stack are blocking_
  - _Problem because of the browser_
- **browser is different**
  - _set timeout is somewhere else and runs differently_
- **Event loop**
  - An event loop is a stack where functions are stored before their executions.
  - For an async function the script use the browser support to perform like a multi thread language.
  - The browser is used to track the time of exexution of a function and then it is sent to the queue.
  - Where it is then stored till the stack of the event loop empties and once the chance is spotted the the functions are executed.
