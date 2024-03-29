const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const validarRole = require('../middlewares/validar-roles');
const validarArchivoSubir = require('../middlewares/validar-archivo');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRole,
    ...validarArchivoSubir
}
