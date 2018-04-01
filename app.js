var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var vivek = new Person('vivek');
var stark = new Person('stark');
var wayne = new Person('wayne');
var people = [vivek, stark, wayne];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

vivek.emit('speak', 'hey dudes!');
stark.emit('speak', 'lets go party!');
wayne.emit('speak', 'sounds like a plan to me!')
vivek.emit('speak', 'thats awesome!');
stark.emit('speak', 'we will go in my car!');
wayne.emit('speak', 'sure dude!');


