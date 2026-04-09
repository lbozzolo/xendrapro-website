/* empty css                                    */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_QGSZAP_0.mjs';
import '../chunks/index_DY4PQEDO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DheesNeM.mjs';
import { $ as $$Icon } from '../chunks/Icon_BKns9wQs.mjs';
import { t as teamPhoto } from '../chunks/team-photo_DGGmWO23.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      name: "Juan Rodriguez",
      role: "Founder & CEO",
      bio: "Built a 10-country payroll engine from the ground up and scaled it before selling to Intuit. Spent six years engineering Intuit's payroll product.",
      avatar: "/avatar-juan.jpg",
      social: {
        linkedin: "https://linkedin.com/in/juan-rodriguez",
        twitter: "https://twitter.com/juanr"
      }
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      bio: "Former engineering leader at Gusto with 12+ years experience in fintech. Expert in building secure, scalable financial infrastructure.",
      avatar: "/avatar-sophia.jpg",
      social: {
        linkedin: "https://linkedin.com/in/sophia-chen",
        github: "https://github.com/sophiac"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      bio: "Product veteran from Xero with deep knowledge of the payroll space and what platforms need to succeed.",
      avatar: "/avatar-marcus.jpg",
      social: {
        linkedin: "https://linkedin.com/in/marcus-johnson",
        twitter: "https://twitter.com/marcusj"
      }
    },
    {
      name: "Priya Patel",
      role: "Head of Compliance",
      bio: "Former tax attorney with extensive experience in multi-state payroll tax compliance and regulatory requirements.",
      avatar: "/avatar-priya.jpg",
      social: {
        linkedin: "https://linkedin.com/in/priya-patel"
      }
    }
  ];
  const values = [
    {
      title: "Empower Developers",
      description: "We're giving companies and developers access to the best tools possible to succeed in a competitive market and build payroll for the future.",
      icon: "ph:code-duotone"
    },
    {
      title: "Simplify Complexity",
      description: "Payroll doesn't have to be hard. We make it fast, easy, and flexible to please both you and your customers.",
      icon: "ph:puzzle-piece-duotone"
    },
    {
      title: "Deep Expertise",
      description: "We know payroll so that you don't have to. You can trust that we'll take care of the complexities while you focus on satisfying your customers.",
      icon: "ph:brain-duotone"
    },
    {
      title: "Build Trust",
      description: "We're committed to maintaining your trust, which we accomplish by ensuring 100% compliance and treating your customers like our own.",
      icon: "ph:shield-check-duotone"
    }
  ];
  const timeline = [
    {
      year: "2018",
      title: "The Idea",
      description: "Juan builds and sells his first payroll engine to Intuit, sparking the idea for a better solution."
    },
    {
      year: "2020",
      title: "Team Assembly",
      description: "Key team members from Intuit, Gusto, and Xero join forces to reimagine payroll infrastructure."
    },
    {
      year: "2021",
      title: "Payflo Launch",
      description: "First version of Payflo's API launches, allowing platforms to embed payroll capabilities."
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Payflo expands to serve platforms across multiple industries and countries."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Payflo - About Us", "description": "Read about Payflo's mission, values, team, and the story of how we came to build the most modern payroll infrastructure on the market.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-20 pb-16 md:pt-28 md:pb-24"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h1 class="text-4xl md:text-5xl font-bold leading-tight">
About <span class="gradient-text">Payflo</span> </h1> <p class="mt-6 text-xl text-gray-600">
We empower developers to reimagine payroll by building modern infrastructure designed for modern work.
</p> </div> <div class="mt-16 animate-on-scroll"> <div class="relative rounded-xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": teamPhoto, "alt": "Payflo Team", "class": "w-full h-auto", "width": 1200, "height": 600 })} </div> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Our Values
</h2> <p class="mt-4 text-xl text-gray-600">
The principles that guide everything we do.
</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"> ${values.map((value, index) => renderTemplate`<div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-on-scroll"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> <div class="h-12 w-12 rounded-lg bg-gradient-to-r from-payflo-purple to-payflo-blue flex items-center justify-center text-white mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": value.icon, "class": "h-6 w-6" })} </div> <h3 class="text-xl font-semibold">${value.title}</h3> <p class="mt-3 text-gray-600">${value.description}</p> </div>`)} </div> </div> </section> <section class="py-20 bg-white"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Our Story
</h2> </div> <div class="mt-12 max-w-4xl mx-auto"> <div class="relative"> ${timeline.map((event, index) => renderTemplate`<div class="relative pl-8 pb-12 animate-on-scroll"${addAttribute(`animation-delay: ${index * 0.15}s`, "style")}> <div class="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-payflo-purple to-payflo-blue"></div> <div class="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-payflo-purple"></div> <div class="text-sm font-semibold text-payflo-purple">${event.year}</div> <h3 class="mt-2 text-xl font-semibold">${event.title}</h3> <p class="mt-2 text-gray-600">${event.description}</p> </div>`)} </div> <div class="mt-12 text-center"> <p class="text-xl font-medium text-gray-700">
From the team that brought you QuickBooks Payroll, Gusto, and Xero, we're building the 
            infrastructure we wish we had when we started out.
</p> </div> </div> </div> </section> <section class="py-20 bg-payflo-gray"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto animate-on-scroll"> <h2 class="text-3xl md:text-4xl font-bold">
Meet Our Team
</h2> <p class="mt-4 text-xl text-gray-600">
The experts behind Payflo's payroll infrastructure.
</p> </div> <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${teamMembers.map((member, index) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-on-scroll"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> <div class="relative inline-block"> <img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-payflo-purple/20"> <div class="absolute bottom-4 right-0 h-6 w-6 rounded-full bg-green-400 border-2 border-white"></div> </div> <h3 class="text-xl font-semibold">${member.name}</h3> <p class="text-payflo-purple font-medium">${member.role}</p> <p class="mt-3 text-gray-600 text-sm">${member.bio}</p> <div class="mt-4 flex justify-center space-x-3"> ${member.social.linkedin && renderTemplate`<a${addAttribute(member.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-payflo-purple"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:linkedin-logo-duotone", "class": "h-5 w-5" })} </a>`} ${member.social.twitter && renderTemplate`<a${addAttribute(member.social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-payflo-purple"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:twitter-logo-duotone", "class": "h-5 w-5" })} </a>`} ${member.social.github && renderTemplate`<a${addAttribute(member.social.github, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-payflo-purple"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:github-logo-duotone", "class": "h-5 w-5" })} </a>`} </div> </div>`)} </div> </div> </section> <section class="py-20 bg-gradient-to-r from-payflo-purple to-payflo-blue text-white relative overflow-hidden"> <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div> <div class="container-custom relative"> <div class="max-w-3xl mx-auto text-center animate-on-scroll"> <span class="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6">
We're Hiring!
</span> <h2 class="text-3xl md:text-4xl font-bold">
Join Our Team
</h2> <p class="mt-6 text-xl opacity-90">
We're on a mission to transform payroll infrastructure and we're looking for talented people to join us.
</p> <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center"> <a href="/careers" class="btn bg-white text-payflo-purple hover:bg-opacity-90">
View Open Positions
</a> <a href="/contact" class="btn bg-transparent border-2 border-white hover:bg-white/10">
Get in Touch
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/about-us.astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
