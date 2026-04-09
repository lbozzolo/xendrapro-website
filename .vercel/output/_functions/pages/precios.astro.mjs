/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
import { $ as $$Icon } from '../chunks/Icon_BKns9wQs.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_BuERrSK0.mjs';
export { renderers } from '../renderers.mjs';

const $$Precios = createComponent(($$result, $$props, $$slots) => {
  const tiers = [
    {
      name: "Crecimiento",
      price: "$499",
      period: "/mes",
      description: "Perfecto para empresas en crecimiento listas para automatizar su atenci\xF3n.",
      features: [
        "Hasta 500 interacciones",
        "Llamadas entrantes y salientes",
        "Grabaci\xF3n y transcripci\xF3n",
        "Soporte est\xE1ndar",
        "Acceso API b\xE1sico",
        "Reportes est\xE1ndar",
        "Integraciones b\xE1sicas",
        "SLA de 99.9% de actividad"
      ],
      cta: {
        text: "Comenzar Prueba Gratis",
        href: "/agendar-demo"
      }
    },
    {
      name: "Escala",
      price: "$999",
      period: "/mes",
      description: "Para plataformas establecidas con necesidades avanzadas de IA.",
      features: [
        "Hasta 2,000 interacciones",
        "Todas las funciones de Crecimiento",
        "Soporte prioritario",
        "Acceso API avanzado",
        "Reportes personalizados",
        "Integraciones avanzadas",
        "Marca blanca",
        "SLA de 99.99% de actividad"
      ],
      cta: {
        text: "Agendar Demo",
        href: "/agendar-demo"
      }
    }
  ];
  const enterpriseFeatures = [
    "Interacciones ilimitadas",
    "Soporte dedicado 24/7",
    "Desarrollo a medida",
    "Soporte multi-idioma",
    "Integraciones a medida",
    "Gerente de cuenta dedicado",
    "SLA personalizado",
    "Opciones de despliegue On-premise"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Precios - Xendra Pro | Agentes de IA para tu negocio", "description": "Planes escalables de agentes conversacionales con IA. Comenz\xE1 con un plan b\xE1sico y escal\xE1 seg\xFAn las necesidades de tu empresa." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto"> <h1 class="animate-on-scroll delay-0 text-4xl md:text-5xl font-bold leading-tight">
Precios <span class="gradient-text">Simples y Transparentes</span> </h1> <p class="animate-on-scroll delay-1 mt-6 text-xl text-gray-600">
Comienza con una prueba gratuita y escala a medida que tu plataforma crece. Sin tarifas ocultas ni sorpresas.
</p> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${tiers.map((tier, index) => renderTemplate`<div${addAttribute(`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative animate-on-scroll delay-${index + 2}`, "class")}> ${tier.name === "Escala" && renderTemplate`<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-payflo-purple to-payflo-blue text-white px-4 py-1 rounded-full text-sm font-medium">
Más Popular
</div>`} <h3 class="text-2xl font-semibold">${tier.name}</h3> <div class="mt-4"> <span class="text-4xl font-bold">${tier.price}</span> <span class="text-gray-600">${tier.period}</span> </div> <p class="mt-4 text-gray-600">${tier.description}</p> <ul class="mt-8 space-y-4"> ${tier.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mr-2" })} ${feature} </li>`)} </ul> <div class="mt-8"> <a${addAttribute(tier.cta.href, "href")} class="btn btn-primary w-full text-center"> ${tier.cta.text} </a> </div> </div>`)} <!-- Enterprise Tier --> <div class="bg-gradient-to-br from-payflo-purple to-payflo-blue rounded-xl p-8 text-white animate-on-scroll delay-4"> <h3 class="text-2xl font-semibold">Enterprise</h3> <div class="mt-4"> <span class="text-2xl font-medium">Precios a Medida</span> </div> <p class="mt-4 text-white/90">
Para grandes plataformas con requerimientos personalizados y necesidades de nivel empresarial.
</p> <ul class="mt-8 space-y-4"> ${enterpriseFeatures.map((feature) => renderTemplate`<li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-white mr-2" })} ${feature} </li>`)} </ul> <div class="mt-8"> <a href="/contact" class="btn bg-white text-payflo-purple hover:bg-white/90 w-full text-center">
Contactar Ventas
</a> </div> </div> </div> </div> </section>  <section class="py-20"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto mb-12 animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Comparar Planes
</h2> <p class="mt-4 text-xl text-gray-600">
Encuentra el plan perfecto para las necesidades de tu plataforma
</p> </div> <div class="overflow-x-auto"> <table class="w-full border-collapse animate-on-scroll"> <thead> <tr class="border-b border-gray-200"> <th class="py-4 px-6 text-left">Características</th> <th class="py-4 px-6 text-center">Crecimiento</th> <th class="py-4 px-6 text-center">Escala</th> <th class="py-4 px-6 text-center">Enterprise</th> </tr> </thead> <tbody> <tr class="border-b border-gray-200"> <td class="py-4 px-6">Límite de Interacciones</td> <td class="py-4 px-6 text-center">500</td> <td class="py-4 px-6 text-center">2,000</td> <td class="py-4 px-6 text-center">Ilimitado</td> </tr> <tr class="border-b border-gray-200"> <td class="py-4 px-6">Nivel de Soporte</td> <td class="py-4 px-6 text-center">Estándar</td> <td class="py-4 px-6 text-center">Prioritario</td> <td class="py-4 px-6 text-center">24/7 Dedicado</td> </tr> <tr class="border-b border-gray-200"> <td class="py-4 px-6">Acceso API</td> <td class="py-4 px-6 text-center">Básico</td> <td class="py-4 px-6 text-center">Avanzado</td> <td class="py-4 px-6 text-center">A medida</td> </tr> <tr class="border-b border-gray-200"> <td class="py-4 px-6">Marca Blanca</td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:x-circle-duotone", "class": "h-5 w-5 text-gray-400 mx-auto" })} </td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mx-auto" })} </td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mx-auto" })} </td> </tr> <tr class="border-b border-gray-200"> <td class="py-4 px-6">Desarrollo a Medida</td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:x-circle-duotone", "class": "h-5 w-5 text-gray-400 mx-auto" })} </td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:x-circle-duotone", "class": "h-5 w-5 text-gray-400 mx-auto" })} </td> <td class="py-4 px-6 text-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:check-circle-duotone", "class": "h-5 w-5 text-payflo-purple mx-auto" })} </td> </tr> </tbody> </table> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Preguntas Frecuentes
</h2> <p class="mt-4 text-xl text-gray-600">
¿Tienes preguntas sobre nuestros precios? Revisa nuestras preguntas frecuentes o contáctanos para más detalles.
</p> <div class="mt-8"> <a href="/contact" class="btn btn-secondary">
Ponerse en Contacto
</a> </div> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/precios.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/precios.astro";
const $$url = "/precios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Precios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
