function register(username) {
    console.log(`${username} registered successfully...`)
}

function login(username, password) {
    console.log(
        `user loggedIn successfully...
with username: ${username} & password:${password}`
    )
}

// module.exports = register
// module.exports = login

module.exports = { register, login }