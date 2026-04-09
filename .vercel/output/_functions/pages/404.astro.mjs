/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada | Xendra Pro", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 md:py-32 flex items-center min-h-[60vh]"> <div class="container-custom text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6">404</h1> <h2 class="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2> <p class="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
The page you're looking for doesn't exist or has been moved.
</p> <a href="/" class="btn btn-primary">
Back to Home
</a> </div> </section> ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/404.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
