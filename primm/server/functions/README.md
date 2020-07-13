# Functions

# Predict & Run - Simple Function

Examine the code in simple_function.js.

What do you think it will do?

- There are two statements that call `console.log` with a `PRINT <colour>`
  - In what order do they appear in the code (reading top to bottom)
  - Which of these will execute first?
- What will the final `console.log` statement print?

Run the code using the following command

```bash
node server/functions/simple_function.js
```

How does your prediction compare to the output?

# Investigate 1

Read through the code in `function_syntax.js`.

This file defines three functions:

- `square1`
- `square2`
- `square3`

It uses different JavaScript syntax for each one.

Run the code using the following command

```bash
node server/functions/function_syntax.js
```

This code finishes by using the assert() function to check that the correct
answer is returned. Assertions are commonly used in automated testing to check that code is working as expected.

- Change the `square1` function to return a hardcoded incorrect value and re-run the code, what happens?

# Investigate 2

Have a look at the code in `monte_carlo_pi.js`.

Run the code using the following command

```bash
node server/functions/monte_carlo_pi.js
```

You should see something like this:

```
Known Actual Value of PI: 3.141592653589793
Estimate of PI: 3.112, after 1000 data points, percent error: 0.941963419604336 %
```

- Which line of code is the first to be executed?
- In what order are the functions declared, reading top to bottom?
- In what order are the functions called during this programs execution?
- Look at each function, how has the programmer attempted to make it clear what each function does and how to use it? There are multiple factors.
