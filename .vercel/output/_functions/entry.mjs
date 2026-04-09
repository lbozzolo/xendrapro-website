import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CMXefIjQ.mjs';
import { manifest } from './manifest_CCpjwbK7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/agendar-demo.astro.mjs');
const _page4 = () => import('./pages/api/contact.astro.mjs');
const _page5 = () => import('./pages/api/send-email.astro.mjs');
const _page6 = () => import('./pages/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/careers.astro.mjs');
const _page9 = () => import('./pages/case-studies.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/cookie-policy.astro.mjs');
const _page12 = () => import('./pages/documentation/api-reference.astro.mjs');
const _page13 = () => import('./pages/documentation.astro.mjs');
const _page14 = () => import('./pages/login.astro.mjs');
const _page15 = () => import('./pages/precios.astro.mjs');
const _page16 = () => import('./pages/privacy-policy.astro.mjs');
const _page17 = () => import('./pages/product.astro.mjs');
const _page18 = () => import('./pages/solutions.astro.mjs');
const _page19 = () => import('./pages/terms-of-use.astro.mjs');
const _page20 = () => import('./pages/tutorials.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/agendar-demo.astro", _page3],
    ["src/pages/api/contact.ts", _page4],
    ["src/pages/api/send-email.ts", _page5],
    ["src/pages/blog/[slug].astro", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/careers.astro", _page8],
    ["src/pages/case-studies/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/cookie-policy.astro", _page11],
    ["src/pages/documentation/api-reference.astro", _page12],
    ["src/pages/documentation/index.astro", _page13],
    ["src/pages/login.astro", _page14],
    ["src/pages/precios.astro", _page15],
    ["src/pages/privacy-policy.astro", _page16],
    ["src/pages/product.astro", _page17],
    ["src/pages/solutions.astro", _page18],
    ["src/pages/terms-of-use.astro", _page19],
    ["src/pages/tutorials/index.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f10a1630-8fdc-4829-884c-56e57ad21777",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
