const ctrl = {};
const dns = require('dns');

ctrl.home = (req, res) => {
    res.render('index'); 
}

ctrl.consultar = async (req, res) => {
    const value = req.params.value;
    try {
        dns.lookup(`${value}`, {all: true} , (err, addresses) => {  
            res.json({
                status: true,
                addresses: addresses
            });
        });
    } catch (error) {
        res.json({
            status: false
        });
    }
}

module.exports = ctrl;