# Predict & Run - Simple Loops

Look at the code in simple_loops.js.

What precisely do you think it will do?

The following command can be used to run the code
(all run commands assume your terminal is open at the root of the repository)

```bash
node server/loops/simple_loops.js
```

How does you prediction compare with the output?

- Did your prediction start at the correct number?
- Did your prediction end at the correct number?
- If not for either, why not?

# Investigate

The code in times_tables.js prints out the multiplication tables.
Read through this code, note that it uses nested loops (loops inside loops).
Run the code using the following command:

```bash
node server/loops/times_tables.js
```

Questions to consider

- Which times tables does it print?
- How are the times tables it prints specified within the code?
- What comparison operator is used to terminate the loop?
- The print statement uses Template Strings, how do you think this compares with using string concatenation?

# Modify

- Can you change the times table code to print times tables up to 12?
- Can you change the code so that the inner loop and outer loop work to different limits?
  - For numbers 1 to 5, print times tables up to 12

# Make

Write your own program that prints out all the powers of 2 up to 8.

This might be useful when doing binary to decimal conversions.

Call your file: `powers_of_two.js`

The print statements might look like this:

- 2^0 = 1
- 2^1 = 2
- 2^2 = 4
- ...etc

There is an example of how to raise a number to a power in raise_power_example.js.

To run this example, do this:

```bash
node server/loops/raise_power_example.js
```
