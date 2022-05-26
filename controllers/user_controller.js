module.exports.profile = function(req, res)
{
    // return res.end('<h1>Profile page found</h1>')
    return res.render('users', {
        title:"Kuch Bhi",
        userName:"Tarang"
    })
}
module.exports.favourites = function(req,res)
{
    return res.end('<h1>Favourites Page found</h1>')
}