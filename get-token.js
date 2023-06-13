/**
 * Go to the Hoyolab daily check-in page, press F12 to open the developer console, paste the snippet below and run it.
 * Copy the result and add it as repository secret.
 *
 * @link https://www.hoyolab.com/circles
 * @link https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481 (Genshin Impact)
 * @link https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311 (Honkai Star Rail)
 * @link https://act.hoyolab.com/bbs/event/signin-bh3/index.html?act_id=e202110291205111 (Honkai Impact 3rd)
 * @link https://act.hoyolab.com/bbs/event/signin/nxx/index.html?act_id=e202202281857121 (Tears of Themos)
 */

let cookies = document.cookie.split(';').map(v => v.trim().split('='));
console.log(cookies.map(([k, v]) => ['ltuid', 'ltoken'].includes(k) ? `${k}=${v};` : null).filter(v => v).join(' '));
