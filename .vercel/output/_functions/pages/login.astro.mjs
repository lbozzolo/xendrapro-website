/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
import { $ as $$Icon } from '../chunks/Icon_BKns9wQs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Xendra Pro", "description": "Ingres\xE1 a tu cuenta de Xendra Pro.", "noindex": true, "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-payflo-gray/50 to-white" data-astro-cid-sgpqyurt> <div class="max-w-md w-full" data-astro-cid-sgpqyurt> <!-- Logo --> <div class="flex justify-center mb-8" data-astro-cid-sgpqyurt> <a href="/" class="flex items-center space-x-2" data-astro-cid-sgpqyurt> <img src="/src/assets/logo.svg" alt="Payflo" class="h-8 w-auto" data-astro-cid-sgpqyurt> </a> </div> <!-- Login Form --> <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-100" data-astro-cid-sgpqyurt> <div class="text-center mb-8" data-astro-cid-sgpqyurt> <h1 class="text-2xl font-bold" data-astro-cid-sgpqyurt>Welcome back</h1> <p class="text-gray-600 mt-2" data-astro-cid-sgpqyurt>Log in to your Payflo account</p> </div> <form class="space-y-6" action="#" method="POST" data-astro-cid-sgpqyurt> <div data-astro-cid-sgpqyurt> <label for="email" class="block text-sm font-medium text-gray-700" data-astro-cid-sgpqyurt>
Email address
</label> <div class="mt-1" data-astro-cid-sgpqyurt> <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="you@company.com" data-astro-cid-sgpqyurt> </div> </div> <div data-astro-cid-sgpqyurt> <label for="password" class="block text-sm font-medium text-gray-700" data-astro-cid-sgpqyurt>
Password
</label> <div class="mt-1" data-astro-cid-sgpqyurt> <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-payflo-purple/20 focus:border-payflo-purple" placeholder="••••••••" data-astro-cid-sgpqyurt> </div> </div> <div class="flex items-center justify-between" data-astro-cid-sgpqyurt> <div class="flex items-center" data-astro-cid-sgpqyurt> <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-payflo-purple focus:ring-payflo-purple/20 border-gray-300 rounded" data-astro-cid-sgpqyurt> <label for="remember-me" class="ml-2 block text-sm text-gray-700" data-astro-cid-sgpqyurt>
Remember me
</label> </div> <a href="#" class="text-sm font-medium text-payflo-purple hover:text-payflo-purple/80" data-astro-cid-sgpqyurt>
Forgot your password?
</a> </div> <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-payflo-purple hover:bg-payflo-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-sgpqyurt>
Sign in
</button> </form> <div class="mt-6" data-astro-cid-sgpqyurt> <div class="relative" data-astro-cid-sgpqyurt> <div class="absolute inset-0 flex items-center" data-astro-cid-sgpqyurt> <div class="w-full border-t border-gray-200" data-astro-cid-sgpqyurt></div> </div> <div class="relative flex justify-center text-sm" data-astro-cid-sgpqyurt> <span class="px-2 bg-white text-gray-500" data-astro-cid-sgpqyurt>Or continue with</span> </div> </div> <div class="mt-6 grid grid-cols-2 gap-4" data-astro-cid-sgpqyurt> <a href="#" class="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:github-logo-duotone", "class": "h-5 w-5 mr-2", "data-astro-cid-sgpqyurt": true })}
GitHub
</a> <a href="#" class="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-payflo-purple/20" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:google-logo-duotone", "class": "h-5 w-5 mr-2", "data-astro-cid-sgpqyurt": true })}
Google
</a> </div> </div> </div> <!-- Sign up link --> <p class="mt-8 text-center text-sm text-gray-600" data-astro-cid-sgpqyurt>
Don't have an account?
<a href="/agendar-demo" class="font-medium text-payflo-purple hover:text-payflo-purple/80" data-astro-cid-sgpqyurt>
Agendar Demo
</a> </p> </div> </div> ` })} `;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/login.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
