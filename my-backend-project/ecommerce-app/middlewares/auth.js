// module.exports = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (token === 'myscrettoken') {
//         next();
//     } else {
//         res.status(403).json({error:'Forbidden'});
//     }
// };

module.exports = (req, res, next) => {
    // Lewati semua permintaan tanpa memeriksa token
    next();
};
