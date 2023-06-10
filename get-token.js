/**
 * Go to the Hoyolab daily check-in page, press F12 to open the developer console, paste the snippet below and run it.
 * Copy the result and add it as repository secret.
 *
 * @link https://www.hoyolab.com/circles
 */

let cookies = document.cookie.split(';').map(v => v.trim().split('='));
let cookieNames = ['ltuid', 'ltoken', 'ltuid_v2', 'ltoken_v2', 'account_id_v2', 'account_mid_v2'];
console.log(cookies.map(([k, v]) => cookieNames.includes(k) ? `${k}=${v};` : null).filter(v => v).join(' '));
