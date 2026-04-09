import { e as createAstro, c as createComponent, b as addAttribute, d as renderScript, r as renderTemplate, m as maybeRenderHead, a as renderComponent, l as renderSlot, n as renderHead } from './astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { c as getImage } from './_astro_assets_DheesNeM.mjs';

const $$Astro$2 = createAstro("https://xendrapro.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/lucas/Developer/Next/xendrapro-website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "Funcionalidades", href: "/#features" },
    { name: "C\xF3mo funciona", href: "/#how-it-works" },
    { name: "Comparativa", href: "/#comparison" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contacto", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-gray-800" role="banner"> <div class="container-custom flex items-center h-16 md:h-20"> <a href="/" class="mr-auto flex items-center" aria-label="Xendra Pro home"> <img src="/logo.png" alt="Xendra Pro" class="h-8 md:h-12 w-auto"> </a> <!-- Desktop Nav --> <nav class="hidden md:flex items-center space-x-6 mr-6" role="navigation" aria-label="Main navigation"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-sm text-gray-300 hover:text-white transition-colors duration-200"> ${item.name} </a>`)} </nav> <a href="/agendar-demo" class="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-200">
Agendar Demo
</a> <!-- Mobile Menu Button --> <button id="menu-toggle" class="md:hidden flex items-center text-white p-2" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu"> <svg id="icon-open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="icon-close" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Menu --> <nav id="mobile-menu" class="hidden md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800" role="navigation" aria-label="Mobile navigation"> <div class="container-custom py-4 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"> ${item.name} </a>`)} <div class="pt-3 border-t border-gray-800"> <a href="/agendar-demo" class="block text-center py-3 px-3 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-200">
Agendar Demo
</a> </div> </div> </nav> </header> ${renderScript($$result, "/Users/lucas/Developer/Next/xendrapro-website/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const navigationLinks = [
    { name: "Funcionalidades", href: "/#features" },
    { name: "C\xF3mo funciona", href: "/#how-it-works" },
    { name: "Comparativa", href: "/#comparison" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "Preguntas frecuentes", href: "/#faq" }
  ];
  const actionLinks = [
    { name: "Agendar demo", href: "/agendar-demo" },
    { name: "Contacto", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden"> <!-- Subtle background pattern --> <div class="absolute inset-0 opacity-5"> <div class="absolute inset-0 bg-repeat" style="background-image: url('/grid-pattern.svg');"></div> </div> <!-- Animated gradient background --> <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-payflo-purple via-payflo-blue to-payflo-purple bg-[length:200%_auto] animate-gradient-x"></div> <div class="container-custom relative"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800"> <div class="lg:col-span-2"> <a href="/" class="inline-block transition-transform duration-300 hover:scale-105" aria-label="Xendra Pro home"> <img src="/logo.png" alt="Xendra Pro" class="h-10 w-auto"> </a> <p class="mt-4 text-gray-400 max-w-md">
Automatizá tu atención al cliente con agentes de voz e IA conversacional. Integraciones con WhatsApp, CRM, VoIP y más.
</p> <!-- Redes sociales (descomentar cuando estén disponibles)
        <div class="mt-6 flex space-x-4">
          {socialLinks.map(social => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label={social.name}
            >
            </a>
          ))}
        </div>
        --> </div> <div> <h3 class="text-lg font-semibold mb-4 text-white/90 hover:text-white transition-colors duration-300">Navegación</h3> <ul class="space-y-3"> ${navigationLinks.map((link, index) => renderTemplate`<li class="transform transition-all duration-300 hover:translate-x-1"> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-300 inline-block"${addAttribute(`transition-delay: ${index * 50}ms;`, "style")}> ${link.name} </a> </li>`)} </ul> </div> <div> <h3 class="text-lg font-semibold mb-4 text-white/90 hover:text-white transition-colors duration-300">Contacto</h3> <ul class="space-y-3"> ${actionLinks.map((link, index) => renderTemplate`<li class="transform transition-all duration-300 hover:translate-x-1"> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-300 inline-block"${addAttribute(`transition-delay: ${index * 50}ms;`, "style")}> ${link.name} </a> </li>`)} </ul> </div> </div> <div class="pt-8 text-center text-gray-400 text-sm"> <p class="hover:text-gray-300 transition-colors duration-300">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Xendra Pro. Todos los derechos reservados. Desarrollado por <a href="https://verticedigital.com.ar" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors duration-300 underline underline-offset-2">Vértice Digital</a> </p> </div> </div> </footer>`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/components/Footer.astro", void 0);

const $$WhatsAppWidget = createComponent(($$result, $$props, $$slots) => {
  const phone = "5491163583276";
  const message = encodeURIComponent("Hola! Me gustaría obtener más información sobre Xendra Pro.");
  const url = `https://wa.me/${phone}?text=${message}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" id="whatsapp-widget" aria-label="Contactar por WhatsApp" class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"> <!-- Pulso animado --> <span class="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span> <!-- Ícono WhatsApp --> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.44l-.38-.22-3.93.99 1.03-3.82-.25-.4A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H7.3c-.18 0-.47.07-.72.35-.25.28-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.56.64.2 1.23.17 1.69.1.52-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"></path> </svg> <!-- Tooltip --> <span class="absolute right-16 bg-gray-900 text-white text-sm rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
¿Hablamos por WhatsApp?
</span> </a>`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/components/WhatsAppWidget.astro", void 0);

const $$Astro$1 = createAstro("https://xendrapro.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/lucas/Developer/Next/xendrapro-website/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xendrapro.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Xendra Pro: Agentes de Voz con IA para revolucionar tu atenci\xF3n al cliente. Automatiza llamadas, agenda citas y escala tus ventas con inteligencia artificial conversacional.",
    noindex = false
  } = Astro2.props;
  const faviconImg = await getImage({ src: "/android-chrome-192x192.png", width: 192, height: 192 });
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png"', '><link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png"><meta name="generator"', ">", "<title>", "</title>", '<!-- Preload critical resources --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"><!-- Structured data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "Xendra Pro",\n        "url": "https://xendrapro.com",\n        "logo": "https://xendrapro.com/android-chrome-192x192.png",\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "contactType": "customer support",\n          "availableLanguage": "Spanish"\n        },\n        "sameAs": [\n          "https://twitter.com/xendrapro",\n          "https://www.linkedin.com/company/xendrapro"\n        ]\n      }\n    <\/script><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image" content="https://xendrapro.com/android-chrome-192x192.png"><meta property="og:site_name" content="Xendra Pro"><meta property="og:locale" content="es_AR"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@xendrapro"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://xendrapro.com/android-chrome-192x192.png"><!-- Canonical --><link rel="canonical"', ">", '</head> <body class="min-h-screen flex flex-col"> <a href="#main-content" class="skip-link">Skip to main content</a> ', ' <main id="main-content" class="flex-grow"> ', " </main> ", " ", " ", " <!-- Intersection Observer for animations on scroll --> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(faviconImg.src, "href"), addAttribute(Astro2.generator, "content"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "href"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppWidget", $$WhatsAppWidget, {}), renderComponent($$result, "Analytics", $$Index, {}), renderScript($$result, "/Users/lucas/Developer/Next/xendrapro-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/lucas/Developer/Next/xendrapro-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
