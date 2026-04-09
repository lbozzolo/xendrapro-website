/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
import '../chunks/index_DY4PQEDO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DheesNeM.mjs';
import { $ as $$Icon } from '../chunks/Icon_BKns9wQs.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_BuERrSK0.mjs';
export { renderers } from '../renderers.mjs';

const productImage = new Proxy({"src":"/_astro/product-dashboard.CtI9zuKS.png","width":1588,"height":1008,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lucas/Developer/Next/xendrapro-website/src/assets/product-dashboard.png";
							}
							
							return target[name];
						}
					});

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Fully Embedded Experience",
      description: "Seamlessly integrate payroll into your existing platform with our APIs and UI components.",
      icon: "ph:layout-duotone"
    },
    {
      title: "Tax Filing & Compliance",
      description: "We handle all tax calculations, filings, and payments so you don't have to worry about compliance.",
      icon: "ph:check-square-duotone"
    },
    {
      title: "Flexible Payment Options",
      description: "Support for direct deposit, checks, and other payment methods to suit your customers' needs.",
      icon: "ph:credit-card-duotone"
    },
    {
      title: "White-Label Solution",
      description: "Customize the entire experience to match your brand, making it feel like a native part of your platform.",
      icon: "ph:paint-brush-duotone"
    },
    {
      title: "Detailed Reporting",
      description: "Provide comprehensive payroll reports and analytics for your customers.",
      icon: "ph:chart-line-duotone"
    },
    {
      title: "Developer-Friendly APIs",
      description: "Well-documented RESTful APIs that make integration straightforward for your development team.",
      icon: "ph:code-duotone"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Producto | Xendra Pro", "description": "Payflo's payroll API is easy to use and fast to launch, with compliant infrastructure and features customers will love.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="animate-on-scroll"> <h1 class="text-4xl md:text-5xl font-bold leading-tight">
A <span class="gradient-text">Modern Approach</span> to Payroll Infrastructure
</h1> <p class="mt-6 text-xl text-gray-600 max-w-lg">
Payflo's payroll API is easy to use and fast to launch, with compliant infrastructure and features customers will love.
</p> <div class="mt-8 flex flex-col sm:flex-row gap-4"> <a href="/agendar-demo" class="btn btn-primary">Agendar Demo</a> <a href="/documentation" class="btn btn-secondary">View API Docs</a> </div> </div> <div class="animate-on-scroll" style="animation-delay: 0.2s;"> <div class="relative"> <div class="absolute -inset-0.5 bg-gradient-to-r from-payflo-purple to-payflo-blue rounded-xl blur opacity-30"></div> <div class="relative bg-white rounded-xl shadow-xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": productImage, "alt": "Payflo Product Dashboard", "class": "w-full h-auto", "width": 700, "height": 500 })} </div> </div> </div> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Key Features
</h2> <p class="mt-4 text-xl text-gray-600">
Everything you need to offer a complete payroll solution to your customers.
</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature, index) => renderTemplate`<div class="bg-white rounded-xl p-8 shadow-sm animate-on-scroll"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> <div class="h-12 w-12 rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue flex items-center justify-center text-white mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.icon, "class": "h-6 w-6" })} </div> <h3 class="text-xl font-semibold">${feature.title}</h3> <p class="mt-3 text-gray-600">${feature.description}</p> </div>`)} </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/product.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Product,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
