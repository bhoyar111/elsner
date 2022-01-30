import aes256 from 'aes256';

const key = 'itskrgroupkey';

const cipher = aes256.createCipher(key);

export const getEncryptId = (id) => {
    return encodeURIComponent(cipher.encrypt(id.toString()));
}

export const getDecryptId = (id) => {
    return cipher.decrypt(decodeURIComponent(id));
}

export const checkDataIsValid = (data) => {
    if(data !== null && data !== undefined && data !== ''){
        return true;
    }
    return false;
}

export const not = (a, b) => {
    return a.filter((value) => b.indexOf(value) === -1);
}

export const intersection = (a, b) => {
    return a.filter((value) => b.indexOf(value) !== -1);
}

export const union = (a, b) => {
    return [...a, ...not(b, a)];
}
