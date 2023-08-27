# Episode 1 : Execution Context

- Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs.
  It is an abstract concept that hold info about the env. within the current code is being executed.
  ![Execution Context](../assets/execution-context.jpg "Execution Context")

- In the container the first component is **memory component** and the 2nd one is **code component**
  ## 1. Memory Component (Variable Environment):

- Memory component has all the variables and functions in key value pairs. It is also called **Variable environment**.
  
  The memory component, also known as the variable environment, holds all the variables, functions, and their respective values that are defined in the current scope. This includes global variables, function arguments, and locally defined variables. When a new execution context is created (such as when a function is called), a new memory space is allocated for that context.
  
  **Example:**
  ```javascript
  var globalVar = "I am global";
  
  function exampleFunction(x) {
    var localVar = "I am local";
    console.log(globalVar); // Accessing globalVar from memory
    console.log(x);        // Accessing argument x from memory
    console.log(localVar); // Accessing localVar from memory
  }
  
  exampleFunction(5);
  ```
  
  In this example, the memory component of the execution context for the `exampleFunction` contains the `x` argument and the `localVar` variable.
  
  ### 2. Code Component (Thread of Execution):

- Code component is the place where code is executed one line at a time. It is also called the **Thread of Execution**.
  
  The code component, also known as the thread of execution, is where the actual JavaScript code is executed line by line. The interpreter or engine reads and executes each line sequentially. If a function call is encountered, a new execution context is created for that function, and the process continues within that context.
  
  **Example:**
  ```javascript
  function greet(name) {
    console.log("Hello, " + name);
  }
  
  function main() {
    console.log("Start");
    greet("Alice");
    console.log("End");
  }
  
  main();
  ```
  
  > Here, the thread of execution begins with the `main` function. It logs "Start," then calls the `greet` function, creating a new execution context. After the `greet` function execution completes, the thread of execution continues in the `main` function and logs "End."
  


## Synchronous and Single-Threaded Nature:

- JS is a **synchronous**, **single-threaded** language
- Synchronous:- In a specific synchronous order.

    ### Synchronous Execution:
    Synchronous execution means that JavaScript code is executed in a predictable and ordered manner, one line at a time. Each line must complete its execution before the next line is executed. This ensures that the sequence of actions remains controlled.

    **Example:**
    ```javascript
    console.log("First");
    console.log("Second");
    console.log("Third");
    ```

    >In this code, "First" will always be logged before "Second," and "Second" will always be logged before "Third."
  
- Single-threaded:- One command at a time.

    ### Single-Threaded Execution:

    JavaScript is single-threaded, meaning it has only one main thread of execution. This single thread handles the execution of code and events. While this prevents parallel execution of multiple code blocks, it also ensures that code is executed in a deterministic order, avoiding race conditions.

    **Example:**
    ```javascript
    console.log("Start");

    setTimeout(function() {
      console.log("Timeout callback");
    }, 1000);

    console.log("End");
    ```

    >Even though the `setTimeout` function is asynchronous, its callback is executed after a delay, still maintaining the single-threaded execution order. So, the output will be "Start," "End," and then "Timeout callback."

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" target="_blank"><img src="https://img.youtube.com/vi/ZvbzSrg0afE/0.jpg" width="750"
alt="Execution Context Youtube Link"/></a>
