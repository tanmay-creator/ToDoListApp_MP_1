module.exports.home = function(req,res)
{
    // return res.end('<h1>Express is up for running</h1>')

    return res.render('home', {
        title: "Tanmay"
    })
}