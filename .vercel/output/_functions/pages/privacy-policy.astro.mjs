/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pol\xEDtica de Privacidad | Xendra Pro", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"> <div class="prose prose-slate max-w-3xl mx-auto"> <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1> <p class="text-gray-600 mb-6">Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">1. Introduction</h2> <p>Welcome to Payroll Solution. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">2. Data We Collect</h2> <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p> <ul class="list-disc pl-6 mt-4"> <li>Identity Data: includes first name, last name, username</li> <li>Contact Data: includes email address and telephone numbers</li> <li>Technical Data: includes IP address, browser type and version</li> <li>Usage Data: includes information about how you use our website and services</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">3. How We Use Your Data</h2> <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p> <ul class="list-disc pl-6 mt-4"> <li>To provide our services to you</li> <li>To improve our website and services</li> <li>To communicate with you about our services</li> <li>To comply with legal obligations</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">4. Data Security</h2> <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">5. Your Legal Rights</h2> <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p> <ul class="list-disc pl-6 mt-4"> <li>Request access to your personal data</li> <li>Request correction of your personal data</li> <li>Request erasure of your personal data</li> <li>Object to processing of your personal data</li> <li>Request restriction of processing your personal data</li> <li>Request transfer of your personal data</li> <li>Right to withdraw consent</li> </ul> </section> <section class="mb-8"> <h2 class="text-2xl font-semibold mb-4">6. Contact Us</h2> <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p> <div class="mt-4"> <p>Email: privacy@payrollsolution.com</p> <p>Address: [Your Company Address]</p> </div> </section> </div> </main> ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PrivacyPolicy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
