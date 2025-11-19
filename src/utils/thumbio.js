import md5 from 'md5'

/**
 * Genera una URL autenticada de thumb.io para screenshots
 * @param {string} url - URL de la página a capturar
 * @param {number} expirySeconds - Segundos hasta que expire (default: 300 = 5 minutos)
 * @returns {string} URL autenticada de thumb.io
 */
export const generateThumbioUrl = (url, expirySeconds = 300) => {
  const keyId = '75764'
  const secret = 'FreakAzure'
  
  // Calcular tiempo de expiración
  const expires = new Date().getTime() + (1000 * expirySeconds)
  
  // Generar hash MD5
  const hash = md5(secret + expires + url)
  
  // Construir auth token
  const auth = `${keyId}-${expires}-${hash}`
  
  // Construir URL completa
  const imgUrl = `https://image.thum.io/get/auth/${auth}/width/800/crop/600/${url}`
  
  return imgUrl
}

