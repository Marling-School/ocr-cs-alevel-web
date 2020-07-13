# Objects

JavaScript Object Notation (JSON) is the de-facto format for transporting information around the web.

As you can tell from the name, it is based on the JavaScript syntax for representing objects.

Let's get into some examples

# Predict & Run 1 - Simple Object

Have a look at `hello_objects.js`, what do you think the output will be?

Run this code using

```bash
node server/objects/hello_objects.js
```

How does the output compare to your prediction?

### Key Lesson

- Objects are created using curly braces and key-value pairs.
- The dot notation is used to access property values on an object

# Predict & Run 2 - Destructuring Properties

Now look at the code inside `hello_destructuring.js`, what do you think the output will be?

Run this code using

```bash
node server/objects/hello_destructuring.js
```

How does the output compare to your prediction?

### Key Lesson

- Destructuring can be used to inspect specific properties on an object
- This is very useful when combined with function parameters (see next)

# Predict & Run 3 - Destructuring Properties in Function Parameters

Now look at the code inside `destructuring_parameters.js`, what do you think the output will be?

```bash
node server/objects/destructuring_parameters.js
```

Both functions should behave precisely the same, but the second one uses destructuring to access
the properties on the charactder that is passed in.

In many instances this can be an elegant way of passing and reading parameters, since they do not have to be in order.

### Key Lesson

- Parameters in functions can be destructured
- This is a really nice way of allowing functions to receive large numbers of parameters (> 4) without requiring them to be in order. It can also make inline arrow functions extremely concise.
- There are many advanced forms of destructuring, but simple property reading is the one I have used extensively.

# Investigate
