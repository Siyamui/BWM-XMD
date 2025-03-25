const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy27jNhT9lQE3XdgZ62FbkoEAtSXL8tvyU3JnFpRESYwtSqYo23KQRVftogWyKaZFkU2X3bY/0c/oH+QTCjkJ4kVnmnJ1cUkeHt577rkFJMYp6qMcNG5BQvEeMlSELE8QaIBW5vuIgjLwIIOgAQ56z4ryNkFrEvFINqXcNeDGJnBmzdb6Qre4KuTngn/gutfgrgySzNli9wuAtpKuZruVO9+tUClzh+FxIZxCoW4GskGU+SYzeG98Sg7mtgAsECGmmATtJEQRonDbR/kEYvo2+lyzzvuboF1P5KAVChKRiXsIAmFaEisxrfl+mEEoZJbNmW+jL1SrAx+vbJ3mp37fvum626VqyN1mwE8VzVZOQqnuOKYyzTdP9FMcEOR1PUQYZvmb694f3SQT0ewvp21MTtjZBUHO30wG1U6Jiam3kiZVl0PD0XrzRuKipfaDzhZPkYnb9VbsSlM84eyJQ3imCOlkfBOKc7ftUGN4SXxCX7Sy+T91zzUsVTJm1pJZ2I2pgcf2bnKDpOaxxTwjs6R+0zLUoSyT9tvoz5ApCTsFETSIp4O12fPjTVftVXy/ZEttNRa41DhRUpsR95U+ZBn9Esvt1PLsVVv1OwoJxExnmTae+WtvMvBnnIJPLX1R0iMVJqY2jTp7ylcWYjxYHg6qsyTjYd3QgzUeBeGKl08HfbEKzLGtNq/PP9qgvOuBBn9XBhQFOGUUMhyTIidUxTKA3n6GXIrYubzAI5ktu8e2FyVBojF7VFqOetrYSueGHXuTVFjzczLwx64nX4MySGjsojRFnoFTFtN8iNIUBigFjW8+lgFBR/bUuOI5kS8DH9OULUiWbGPovXT1ZRO6bpwRNsuJqxYBoqDBvaYRY5gEaVHHjEDqhniP1BCyFDR8uE3RXRl4aI9dVOCBuhkkidndmqOOdbzhnLpPdtOgoBzG5OmIwtUkribUrhRBcq+qvMddOWJdvnKcqldTIIS1mgzKAD/PTHHnsy1EBOJ5V22N+s1jD4l0IWA+Uk54OLLPbXiqPaLIAw1GM1QGDnQ3WTKPN4h8AXedtcPjmkNUddpi0NHDHtHIzktONfkC96mnoHH76lNq7BV4ojIc9MzVEJRBdJYgPv+8Kgm1mqIItXpDEb9O3x+KOsIkeU8QA2VAYHEYPD7cf//X7189Ptz/8e7x4f6Hv//87gP5QN6d1+PD/S+v8aefL/IX8affLvI/Xt7+9NPFzrcX+V+Lfz03vWDsIQbxNgUNoPZPrRspNdp92MeS3Ok07aCpBk3wKpKXaXtSs2qmixIRuXqvVfVm9sYchavAMjIdp0ae4KSut2orUUMaN7z+FxDQAF2486LhrkMr0GxFlbzaTC223uZTAwtdTd8nNUWbhlPJEA5TRVBRpTJdpDMnYQt9HwaUkcXqQHunyUSInHHVbFXmg5l2uC5eexLr5WM3w80YHSWzpZ5YuuyNLCH26ajkReNUbw83kmJtlP3GYqnl+JXI9Ny2onIJ34/qCYc1X2bTubik/qjuG2HNOdatxYhqzz5w9qHts//j84TePkvbx+hsp89d/y9xvA4Zd1e+gHj2588IuWVuBvokUZQxNpGxiHptzV7G+lEKbdqSd/YOhSZasoMYKBq4u/tYBskWMj+mEWiANHIgKIMtTFnz1STmOEIpg1ECGrxUFRS+KtelMojyZpLMGGQv3gKaxerMA3D3D085IhB3CAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

