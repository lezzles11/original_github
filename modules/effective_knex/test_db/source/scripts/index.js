var cp = require('child_process');
cp.exec('./resetDB.sh', function(err, stdout, stderr) {
    console.log("done")
});