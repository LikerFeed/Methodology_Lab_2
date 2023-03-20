# Methodology Lab 2

## Description

- **First realisation** - the console application implements a linked list based on built-in arrays. Such an implementation is rather slow.

- **Second realisation** - the console application implements a default circular linked list. The main advantage of linked lists is speed. It's much faster than list based on built-in arrays, because it doesn't need to re-create itself. With an increase in the number of elements, the difference becomes more significant.

## Variant calculation

Defining variant formule: _number of the gradebook % 4_.

```
My variant = 1302 % 4 = 2 variant
```

## How to run

Firstly, you have to install Node.js.

[Download Node.js](https://nodejs.org/en/download/)

Secondly, you also need to install npm.

[Download npm](https://www.npmjs.com/package/download)

After cloning the repository, install the dependencies.

```
$ npm i
```

### To run application:

```
$ npm start
```

or

```
$ node main.js
```

### To test application:

```
$ npm test
```

## Link to the commit where CI tests failed

https://github.com/LikerFeed/Methodology_Lab_2/commit/0c79139c15620e7739aa9726e2d21a6663ae664b

## Conclusion

As a result of this lab, I realized the importance of unit-tests and their superiority over console.log fields. Unit-tests were especially helpful to me when developing the second version of the lab application. I could check the correctness of the work with one simple command. Especially such tests are useful on large projects of large teams. Using them, you can control the correctness of the decisions of partners and colleagues.
