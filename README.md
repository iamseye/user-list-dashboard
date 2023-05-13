# Summary

This small dashboard will need to retrieve users from 3 different api endpoints. You will then need to order those users by name (firstName + lastName) *ascending* and if multiple people have the same name, order them by age *descending*.

So you would have a list like this one:

```
Alex B - 32
Marc C - 55
Marc C - 12
Tony Z - 21
```

The design is something like this:

![alt text](https://github.com/entr-engineering/interview-test/blob/master/public/design.png)

## Run the project

Make sure you have node 12+ installed

`npm i && npm start`

## Endpoints

- http://localhost/users/kids
- http://localhost/users/adults
- http://localhost/users/seniors

**(do not modify those endpoints)

## Tasks

- [x] Retrieve users from the 3 endpoints when clicking the "Retrieve Users" button
- [x] Order the users from the 3 collections by name ascending followed by the age descending
- [x] Implement a filter for the age based on the min and max values of the inputs
- [x] We recommend using the `styled-components` library to style your components

## Assumptions

- Each api resposne are not having huge amount of data that will cause memory leak issues
- Assuming user can not give multiple sort * order  rules

## If it was a bigger project
This is a coding challenge and the scope is quite small. If it were a bigger real project, doing the following would be better:

- Update react version 
- Add corresponding tests
- Error messages can be more informative.
- Retry api tests
- UI/UX improvement
