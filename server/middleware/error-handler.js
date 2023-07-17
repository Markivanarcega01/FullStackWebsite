const errorHandler = (err,req,res,next) =>{
    return res.status(500).send({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandler