const validator = require('validator')
const chalk = require('chalk')

const getDataUser = (userName , email) => {
  if(validator.isEmail(email)){
    return chalk.green(`Selamat Datang ${userName}. Email kamu adalah ${email}`)
  }
  else{
    return chalk.red(`Maaf email yang Anda masukkan salah`)
  }
}

module.exports=({
  getDataUser,
})



