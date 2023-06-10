const users = ["thienth", "tuva", "tuannda"]

const [user1, ...user2] = users
// console.log(user1);
// console.log(user2);

const numberArray = [1, 2, 3]
function show(...params) { // [1,2,3]
    console.log(params);
}
show(...numberArray) //1,2,3