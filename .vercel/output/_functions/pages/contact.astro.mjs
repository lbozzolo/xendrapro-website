/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Xendra Pro | Agentes de IA conversacional", "description": "Cont\xE1ctanos para descubrir c\xF3mo los agentes conversacionales de Xendra Pro pueden automatizar tu atenci\xF3n al cliente. Respondemos a la brevedad." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h1 class="text-4xl md:text-5xl font-bold leading-tight">
Envianos <span class="gradient-text">un mensaje</span> </h1> <p class="mt-6 text-xl text-gray-600">
Completá el formulario a continuación o contactanos por correo electrónico para descubrir cómo los agentes conversacionales de Xendra Pro pueden transformar tu atención al cliente.
</p> </div> <!-- <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <div 
            class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center animate-on-scroll" 
            style={\`animation-delay: \${index * 0.15}s\`}
          >
            <div class="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-payflo-purple/10 text-payflo-purple mb-6">
              <Icon name={method.icon} class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold">{method.title}</h3>
            <p class="mt-3 text-gray-600">{method.description}</p>
            <a href={\`mailto:\${method.email}\`} class="mt-4 block text-payflo-purple font-medium hover:underline">
              {method.email}
            </a>
          </div>
        ))}
      </div>
    </div> --> </div></section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"> <div class="p-8 md:p-12"> <h2 class="text-2xl md:text-3xl font-bold mb-6">Envianos un mensaje</h2> <form id="contact-form" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-gray-700 font-medium mb-2">Nombre</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple" required> </div> <div> <label for="email" class="block text-gray-700 font-medium mb-2">Correo electrónico</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple" required> </div> </div> <div> <label for="company" class="block text-gray-700 font-medium mb-2">Empresa</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple"> </div> <div> <label for="message" class="block text-gray-700 font-medium mb-2">Mensaje</label> <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-payflo-purple focus:border-payflo-purple" required></textarea> </div> <div id="form-status" class="hidden rounded-lg p-4 text-sm"></div> <div> <button type="submit" id="submit-btn" class="btn btn-primary w-full md:w-auto">
Enviar mensaje
</button> </div> </form> ${renderScript($$result2, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} </div> </div> </div> </section>  ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/contact.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
