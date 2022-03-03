exports.create =async(rep, res) =>{
    res.send({message: "create handler"});
};

exports.finAll = async(req, res) =>{
    res.send({message: "create findAll handler"});
};

exports.update = async(req, res) =>{
    res.send({message: "update handler"});
};

exports.delete = async(req, res) =>{
    res.send({message: "delete handler"});
};

exports.findAllFavorite = async(req, res) =>{
    res.send({message: "findAllFavorite handler"});
};

exports.deleteAll = async(req, res) =>{
    res.send({message: "deleteAll handler"});
};