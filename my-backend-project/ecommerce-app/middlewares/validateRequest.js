module.exports = (req, res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).json({error:'name and price required'});
    }
    next();
};