const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
const conf      = require(`${process.cwd()}/config/gulp.json`);

const ftp = (done) => {
  ftpDeploy
    .deploy(conf.ftp)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err));
  done();
}
exports.mod = ftp;