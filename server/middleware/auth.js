const jwt_decode = require("jwt-decode")

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header("jwt_token")

    if(!token) {
        return res.status(403).json({ message: "authorization denied" });
    }

    // Verify token
    try {
        const decoded = jwt_decode(token)
        if(decoded.email !== req.header("user_id"))
            throw new Error("Invalid token")

        // If the incoming token is valid, move on to the next method.
        next()
    } catch (err) {
        return res.status(201).json("Invalid token")
    }
}