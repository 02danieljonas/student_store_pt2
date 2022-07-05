const jwt = require("jsonwebtoken")
const SECRET_KEY = "key"

const generateToken = (data) => jwt.sign(data, SECRET_KEY, {algorithm: "HS256", expiresIn: 10000})

const validateToken = (token) => jwt.verify(token, SECRET_KEY)

const testTokens = () => {
    const user = {email: "person@gmail.com"}

    const token = generateToken(user)
    console.log("token", token)

    const validatedToken = validateToken(token)
    console.log("validatedToken", validatedToken)
}

testTokens()