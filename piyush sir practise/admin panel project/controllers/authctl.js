module.exports.loginPage = (req,res) => {
  try {
    return res.render('login');
  }catch(err){
    console.log(err);
    return res.redirect('/admin/addAdmin');
  }
}

module.exports.loginUser = (req,res) => {
  try {
   console.log(req.body);
  }catch(err){
    console.log(err);
    return res.redirect('/admin/addAdmin');
  }
}