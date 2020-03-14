module.exports = function check(str, bracketsConfig) {
    
    let dfd = [];
    let ddd = str.split('');
    dfd.push(ddd);
    if (dfd.toString() === bracketsConfig.toString()) {
        return true;
    } else return false;
}
