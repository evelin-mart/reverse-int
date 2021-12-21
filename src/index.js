module.exports = function reverse(n) {
    let str = '' + Math.abs(n);

    function reverseString(string) {
        let i = string.length;
        let reversed = '';
        while (i) reversed += string[--i];
        return reversed;
    }

    str = reverseString(str);

    return +str;

}
