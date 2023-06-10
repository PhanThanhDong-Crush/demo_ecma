/*
    Destructuring - phân rã
        - array
        - object
*/

// const users = ["thienth", "tuva", "tuannda"]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// const [user1, , user3] = users
// console.log(user1, user3);

const user = {
    id: 1,
    username: "thienth",
    email: "thienth@gmail.com",
    avatar: "https://www.google.com",
    child: {
        username: "sontv"
    }
}
// const id = user.id
// const username = user.username
// const email = user.email
// console.log(id);
// console.log(username);
// console.log(email);

// const { id, username, email, avatar = 'My Avatar' } = user
// console.log(id);
// console.log(username);
// console.log(email);
// console.log(avatar);

const { username, child: { username: childname } } = user
console.log(childname);