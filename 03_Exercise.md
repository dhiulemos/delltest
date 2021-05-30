**Question:**
Why does the alert show Jack first and then undefined?

function identity() {
var name = 'Jack';
alert(name);
return
name
};

var who = identity();
alert(who)

**Answer commented at the code**

Because when the function is called, the block of code inside is executed so it generates the alert with the string Jack, but then the return shut down the function returning a undefined result that is stored into the 'who' variable and finally is called at the second alert.
