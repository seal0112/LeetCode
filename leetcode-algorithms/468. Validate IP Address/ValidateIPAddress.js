/**
 * @param {string} IP
 * @return {string}
 */
const ip4 = /^([1-9]\d{0,2}|0)(?:\.([1-9]\d{0,2}|0)){3}$/;
const ip6 = /^([0-9a-fA-F]{1,4})(\:[0-9a-fA-F]{1,4}){7}$/;

var validIPAddress = function(IP) {
    const isIp4 = ip4.exec(IP);
    if (isIp4 && isIp4.slice(1).every(d => parseInt(d, 10) < 256))
        return 'IPv4';

    const isIp6 = ip6.exec(IP);
    if (isIp6)
        return 'IPv6';

    return 'Neither';
};