/**
 * Go to the Hoyolab daily check-in page, press F12 to open the developer console, paste the snippet below and run it.
 * Copy the result and add it as repository secret.
 *
 * @link https://www.hoyolab.com/circles
 */

let cookies = Object.fromEntries(document.cookie.split(';').map(v => v.trim().split('=')));
console.log(['ltuid', 'ltoken'].map(name => `${name}=${cookies[name]};`).join(' '));
