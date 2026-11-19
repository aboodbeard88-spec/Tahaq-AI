// Regression tests for the actual inline engine in index.html.
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const html = fs.readFileSync(require('path').join(__dirname, '..', 'index.html'),'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert(js, 'Inline JavaScript missing');
// Evaluate only the pure engine functions, before UI event listeners.
const engine = js.slice(js.indexOf('function normalize('), js.indexOf('function renderResult('));
const ctx = vm.createContext({});
vm.runInContext(engine + '\nthis.analyze = analyze;',ctx);
function check(label,text,expected){const r=ctx.analyze(text);assert.strictEqual(r.level,expected,`${label}: got ${r.level}`);assert(r.reasons.length>0);console.log('PASS',label,'=>',r.level);}
check('OTP impersonation','تنبيه عاجل أرسل رمز OTP الآن', 'high');
check('WhatsApp promo','السلام عليكم عروض على الباقات الشحن بأسعار خرافية سارع في الشحن +962 7 8238 2451 شعار TikTok','high');
check('ordinary message','مرحباً، تم تأكيد موعدك غداً الساعة العاشرة صباحاً.','unknown');
check('urgent link','عاجل اضغط الرابط https://example.com/login', 'medium');
const r=ctx.analyze('اتصل +962 7 8238 2451');assert(r.phones.length===1);assert(!r.title.includes('آمن'));
console.log('ALL TESTS PASSED');
