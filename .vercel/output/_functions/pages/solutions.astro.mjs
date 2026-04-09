/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
import { $ as $$Icon } from '../chunks/Icon_BKns9wQs.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_BuERrSK0.mjs';
export { renderers } from '../renderers.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const solutions = [
    {
      title: "HR Platforms",
      description: "Add payroll to your HR platform and become the all-in-one solution your customers need. Streamline employee management, benefits, and payroll in one place.",
      icon: "ph:users-duotone",
      features: [
        "Employee onboarding integration",
        "Benefits management sync",
        "Time tracking connection",
        "Automated tax calculations"
      ]
    },
    {
      title: "Vertical SaaS",
      description: "Enhance your industry-specific software with built-in payroll capabilities. Whether you serve restaurants, healthcare, or other sectors, we adapt to your needs.",
      icon: "ph:buildings-duotone",
      features: [
        "Industry-specific calculations",
        "Custom payment schedules",
        "Role-based permissions",
        "Specialized reporting"
      ]
    },
    {
      title: "Staffing Platforms",
      description: "Power your staffing platform with flexible payroll that handles complex scenarios like multiple work sites, varying rates, and contractor payments.",
      icon: "ph:briefcase-duotone",
      features: [
        "Multi-location support",
        "Contractor management",
        "Variable rate handling",
        "Automated payments"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Soluciones | Xendra Pro", "description": "Discover how Payflo's payroll infrastructure can be customized for your specific industry and use case.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="text-center max-w-4xl mx-auto"> <h1 class="animate-on-scroll delay-0 text-4xl md:text-5xl font-bold leading-tight">
Tailored <span class="gradient-text">Solutions</span> for Every Platform
</h1> <p class="animate-on-scroll delay-1 mt-6 text-xl text-gray-600">
Whether you're building an HR platform, vertical SaaS solution, or staffing platform, 
          Payflo's payroll infrastructure adapts to your specific needs.
</p> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${solutions.map((solution, index) => renderTemplate`<div${addAttribute(`bg-white rounded-xl p-8 shadow-lg animate-on-scroll delay-${index + 2}`, "class")}> <div class="h-12 w-12 rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue flex items-center justify-center text-white"> ${renderComponent($$result2, "Icon", $$Icon, { "name": solution.icon, "class": "h-6 w-6" })} </div> <h3 class="mt-6 text-2xl font-semibold">${solution.title}</h3> <p class="mt-4 text-gray-600">${solution.description}</p> <ul class="mt-6 space-y-3"> ${solution.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mr-2" })} ${feature} </li>`)} </ul> </div>`)} </div> </div> </section> <section class="py-20"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Built for Your Success
</h2> <p class="mt-4 text-xl text-gray-600">
Our flexible infrastructure means you can build exactly what your customers need, 
          without compromising on features or compliance.
</p> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/solutions.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
