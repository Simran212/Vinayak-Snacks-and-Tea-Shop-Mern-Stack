const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.cookies.jwt;
    if(token)
    {
        jwt.verify(token,"skskjshhshshhsyaujshrwiajsmdhjdhsgatreuyeikdmsjhagagsgsddhjdjddjjdjdjdjdjdjdjdjd",async (err,decodedToken) => {
            console.log(err);
            if(err) {
               res.status(400).json({error:'Please login to view this page'});
             }
            else {
                if(decodedToken.isAuth === true && decodedToken.password === "ADMINLOGIN" )
                   next();
            }
        })
    }
    else{
        res.status(400).json({error:'Please login to view this page'});
    }
};

module.exports = auth;