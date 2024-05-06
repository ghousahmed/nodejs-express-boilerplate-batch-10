import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).send({ status: 403, message: "No auth" })
    }
    const token = authorization.split(" ")[1];
    jwt.verify(token, "SMIT", (result) => {
        if (result) {
            next()
        } else {
            res.status(403).send({ status: 403 })
        }
    })
}

export { authentication }