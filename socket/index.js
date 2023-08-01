const io = require("socket.io")(9000, {
    cors : {
        origin : "http://localhost:3000",
    },
});
let users = [];


const addUsers = (userId, socketId) => {
    !users.some((user) => user.userId === userId) && users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};


io.on("connection", (socket) => {
    //connect
    console.log("user connected.")

    //take uid form user
    socket.on("addUser", (userId) => {
        addUsers(userId, socket.id);
        io.emit("getUsers", users)
    })

    //message getting
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
          senderId,
          text,
        });
    });
 
    //disconnect
    socket.on("disconnect", () => {
        console.log("user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
      });
}) 



// SERVER SIDE
// socket.on -> take event from client
// io.emit -> send event to every client