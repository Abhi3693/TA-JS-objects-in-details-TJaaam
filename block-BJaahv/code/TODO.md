# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.




// Factorial pattern

```js
function user(name, id, noOfProject) {

  let userInfo = {};
  userInfo.name = name;
  userInfo.id = id;
  userInfo.noOfProject = noOfProject;

  userInfo.getProjects = function() {
    return userInfo.noOfProject
  };
  userInfo.changeName = function(newName) {
    let oldName = userInfo.name;
    userInfo.name = newName;
    return oldName;
  };
  userInfo.incrementProjects = function() {
    userInfo.noOfProject = userInfo.noOfProject + 1;
    return userInfo.noOfProject;
  };
  userInfo.decrementProject= function() {
    userInfo.noOfProject = userInfo.noOfProject - 1;
    return userInfo.noOfProject;
  };

  return userInfo;
}


let user1 = user("abhi", "sales manager", 10);
let user2 = user("gauri", "marketing head", 58);
```

// prototypal pattern

```js
let userMethods = {
  getProjects: function() {
    return this.noOfProject
  },
  changeName: function(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },
  incrementProjects: function() {
    this.noOfProject = this.noOfProject + 1;
    return this.noOfProject;
  },
  decrementProject: function() {
    this.noOfProject = this.noOfProject - 1;
    return this.noOfProject;
  }
}


function user(name, id, noOfProject) {

  let userInfo = Object.create(userMethods);
  userInfo.name = name;
  userInfo.id = id;
  userInfo.noOfProject = noOfProject;

  return userInfo;
}
```


// Pseudoclassical pattern

```js
function user(name, id, noOfProject) {

  let userInfo = Object.create(user.prototype);
  userInfo.name = name;
  userInfo.id = id;
  userInfo.noOfProject = noOfProject;

  return userInfo;
}

user.prototype = {
  getProjects: function() {
    return this.noOfProject;
  },
  changeName: function(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },
  incrementProjects: function() {
    this.noOfProject = this.noOfProject + 1;
    return this.noOfProject;
  },
  decrementProject: function() {
    this.noOfProject = this.noOfProject - 1;
    return this.noOfProject;
  }
}

```

// Class Pattern

```js

class User {
  constructor(name, id, noOfProject) {
    this.name = name;
    this.id = id;
    this.noOfProject = noOfProject;
  }
  getProjects() {
    return this.noOfProject;
  }
  changeName(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  }
  incrementProjects() {
    this.noOfProject = this.noOfProject + 1;
    return this.noOfProject;
  }
  decrementProject() {
    this.noOfProject = this.noOfProject - 1;
    return this.noOfProject;
  }
}

let user1 = new User("abhijeet", "sales manager", 10);
let user2 = new User("gauri", "marketing head", 58);
```







