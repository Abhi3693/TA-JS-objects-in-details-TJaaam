let user = {
    username: 'John',
    sayHello(message = 'Hello') {
      console.log(message + ' ' + this.username);
    },
  };
  
  let user2 = {
    username: 'Arya',
    sayHello(message = 'Hello') {
      console.log(message + ' ' + this.username);
    },
  };
  let user3 = {
    username: 'Bran',
  };
  
  function MainUser() {
    this.username = 'Tyrion';
    this.sayHello = function sayHello(message = 'Hello') {
      console.log(message + ' ' + this.username);
    };
  }
  
  let userSayHello = user.sayHello;
  
  console.log(user.sayHello()); //Hello John
  console.log(user2.sayHello()); // Hello Arya
  console.log(user.sayHello.call(user2)); // Hello Arya
  console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya
  console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya
  console.log(typeof user.sayHello.bind(user2)); // function
  console.log(user.sayHello.bind(user2)()); // Hello Arya
  console.log(userSayHello()); // Hello undefined // Because this value is not there.
  console.log(typeof userSayHello.bind(user2)); // function
  console.log(userSayHello.bind(user2)()); // Hello Arya
//   console.log(user3.sayHello()); // There is not function of sayHello in user3
  console.log(userSayHello.apply(user3)); // Hello bran
  console.log(userSayHello.call(user3)); // Hello Bran
  console.log(typeof new MainUser()); // Object
  console.log(typeof new MainUser()); // Object
  console.log(new MainUser().sayHello()); // Hello Trion
  console.log(new MainUser().sayHello.call(user2)); // Hello Arya
  console.log(new MainUser().sayHello.call(user)); // Hello John
  console.log(
    new MainUser().sayHello.apply(user, ['Welcome!'])
  ); // Welcome! John