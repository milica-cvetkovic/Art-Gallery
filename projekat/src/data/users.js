const allUsers = [
    {
        username: "elonmusk123",
        password: "elon123"
    },
    {
        username: "billgates123",
        password: "bill123"
    },
    {
        username: "stevejobs123",
        password: "steve123"
    }
]

localStorage.setItem("users", JSON.stringify(allUsers));
export default allUsers;