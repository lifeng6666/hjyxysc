function pwdEncrypt(pwd, cipherMode) {
    const SM2Utils = require('./sm2');
    return SM2Utils.encs("043b2759c70dab4718520cad55ac41eea6f8922c1309afb788f7578b3e585b167811023effefc2b9193cd93ae9c9a2a864e5fffbf7517c679f40cbf4c4630aa28c", pwd, 1);
}
