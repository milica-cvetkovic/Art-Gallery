const allUsers = [
    {
        username: "elonmusk123",
        password: "elon123"
        // dodaj sliku
    },
    {
        username: "billgates123",
        password: "bill123"
        // dodaj sliku
    },
    {
        username: "stevejobs123",
        password: "steve123"
        // dodaj sliku
    }
]

localStorage.setItem("users", JSON.stringify(allUsers));
export default allUsers;