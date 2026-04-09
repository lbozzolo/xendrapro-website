/* empty css                                       */
import { e as createAstro, c as createComponent, a as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_8Kcn4KFe.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BHOdeypW.mjs';
import { $ as $$Layout } from '../../chunks/Layout_QGSZAP_0.mjs';
import { $ as $$Icon } from '../../chunks/Icon_BKns9wQs.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://xendrapro.com");
async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => {
    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).map((p) => ({
      slug: p.id,
      title: p.data.title,
      excerpt: p.data.excerpt,
      image: p.data.image,
      date: p.data.date,
      tags: p.data.tags
    }));
    return {
      params: { slug: post.id },
      props: {
        ...post.data,
        relatedPosts
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  function calculateReadingTime(content2) {
    const wordsPerMinute = 200;
    const words = content2.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
  function extractHeadings(content2) {
    const headings2 = [];
    const regex = /<h2>(.*?)<\/h2>/g;
    let match;
    while ((match = regex.exec(content2)) !== null) {
      headings2.push({
        title: match[1],
        id: match[1].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
      });
    }
    return headings2;
  }
  const { title, date, author, authorRole, authorAvatar, excerpt, content, image, tags, relatedPosts } = Astro2.props;
  const readingTime = calculateReadingTime(content);
  const headings = extractHeadings(content);
  const processedContent = content.replace(
    /<h2>(.*?)<\/h2>/g,
    (match, heading) => `<h2 id="${heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}">${heading}</h2>`
  );
  const shareUrl = new URL(Astro2.url.pathname, Astro2.site).toString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} - Xendra Pro Blog`, "description": excerpt, "noindex": true, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed top-0 left-0 w-full h-1 z-50" data-astro-cid-4sn4zg3r> <div id="reading-progress" class="h-full bg-gradient-to-r from-payflo-purple to-payflo-blue w-0 transition-all duration-100" role="progressbar" aria-label="Reading progress" data-astro-cid-4sn4zg3r></div> </div>  <section class="relative py-20 md:py-32 bg-gradient-to-b from-payflo-gray/50 to-white overflow-hidden" data-astro-cid-4sn4zg3r> <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" aria-hidden="true" data-astro-cid-4sn4zg3r></div> <div class="container-custom relative" data-astro-cid-4sn4zg3r> <div class="max-w-4xl mx-auto" data-astro-cid-4sn4zg3r> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-8 animate-on-scroll" data-astro-cid-4sn4zg3r> ${tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-payflo-purple/10 text-payflo-purple rounded-full text-sm font-medium" data-astro-cid-4sn4zg3r> ${tag} </span>`)} </div> <!-- Title --> <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-on-scroll delay-1" data-astro-cid-4sn4zg3r> ${title} </h1> <!-- Author & Meta --> <div class="flex flex-wrap items-center gap-6 mb-12 animate-on-scroll delay-2" data-astro-cid-4sn4zg3r> <div class="flex items-center" data-astro-cid-4sn4zg3r> <img${addAttribute(authorAvatar, "src")}${addAttribute(`${author}, ${authorRole}`, "alt")} class="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-md" data-astro-cid-4sn4zg3r> <div data-astro-cid-4sn4zg3r> <p class="font-semibold" data-astro-cid-4sn4zg3r>${author}</p> <p class="text-sm text-gray-600" data-astro-cid-4sn4zg3r>${authorRole}</p> </div> </div> <div class="flex items-center text-gray-600 text-sm" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:calendar-duotone", "class": "h-5 w-5 mr-2", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} <time${addAttribute(date, "datetime")} data-astro-cid-4sn4zg3r>${date}</time> </div> <div class="flex items-center text-gray-600 text-sm" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:clock-duotone", "class": "h-5 w-5 mr-2", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} <span data-astro-cid-4sn4zg3r>${readingTime} min read</span> </div> </div> <!-- Featured Image --> <div class="rounded-2xl overflow-hidden shadow-2xl animate-on-scroll delay-3" data-astro-cid-4sn4zg3r> <img${addAttribute(image, "src")}${addAttribute(`Featured image for ${title}`, "alt")} class="w-full h-auto" data-astro-cid-4sn4zg3r> </div> </div> </div> </section> <section class="py-16" data-astro-cid-4sn4zg3r> <div class="container-custom" data-astro-cid-4sn4zg3r> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-astro-cid-4sn4zg3r> <!-- Table of Contents Sidebar --> <aside class="lg:col-span-3 lg:sticky lg:top-24 h-fit order-2 lg:order-1" data-astro-cid-4sn4zg3r> <nav class="bg-white rounded-xl p-6 shadow-sm border border-gray-100" aria-labelledby="toc-heading" data-astro-cid-4sn4zg3r> <h2 id="toc-heading" class="font-semibold text-lg mb-4" data-astro-cid-4sn4zg3r>Table of Contents</h2> <ul class="space-y-3" role="list" data-astro-cid-4sn4zg3r> ${headings.map((heading) => renderTemplate`<li data-astro-cid-4sn4zg3r> <a${addAttribute(`#${heading.id}`, "href")} class="block text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded" data-astro-cid-4sn4zg3r> ${heading.title} </a> </li>`)} </ul> </nav> <!-- Floating Share Bar --> <div class="hidden lg:block mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100" data-astro-cid-4sn4zg3r> <h3 class="font-semibold text-lg mb-4" data-astro-cid-4sn4zg3r>Share Article</h3> <div class="flex flex-col space-y-4" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" aria-label="Share on Twitter" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:twitter-logo-duotone", "class": "h-5 w-5 mr-3", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} <span class="text-sm" data-astro-cid-4sn4zg3r>Share on Twitter</span> </a> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" aria-label="Share on LinkedIn" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:linkedin-logo-duotone", "class": "h-5 w-5 mr-3", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} <span class="text-sm" data-astro-cid-4sn4zg3r>Share on LinkedIn</span> </a> <button id="copy-link" class="flex items-center text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" aria-label="Copy link to article" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:link-duotone", "class": "h-5 w-5 mr-3", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} <span class="text-sm" data-astro-cid-4sn4zg3r>Copy Link</span> </button> </div> </div> </aside> <!-- Main Content --> <main class="lg:col-span-9 order-1 lg:order-2" data-astro-cid-4sn4zg3r> <article class="prose prose-lg max-w-none" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(processedContent)}` })} </article> <!-- Mobile Share Bar --> <div class="mt-12 pt-8 border-t border-gray-200 lg:hidden" data-astro-cid-4sn4zg3r> <h3 class="text-lg font-semibold mb-4" data-astro-cid-4sn4zg3r>Share Article</h3> <div class="flex space-x-4" role="group" aria-label="Share article" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" aria-label="Share on Twitter" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:twitter-logo-duotone", "class": "h-6 w-6", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} </a> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" aria-label="Share on LinkedIn" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:linkedin-logo-duotone", "class": "h-6 w-6", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} </a> <button class="text-gray-600 hover:text-payflo-purple focus:text-payflo-purple transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded p-1" id="copy-link-mobile" aria-label="Copy link to article" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:link-duotone", "class": "h-6 w-6", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })} </button> </div> </div> <!-- Related Posts --> <section class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-4sn4zg3r> <h2 class="text-2xl font-bold mb-8" data-astro-cid-4sn4zg3r>Related Articles</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" role="list" data-astro-cid-4sn4zg3r> ${relatedPosts.map((post) => renderTemplate`<article role="listitem" data-astro-cid-4sn4zg3r> <a${addAttribute(`/blog/${post.slug}`, "href")} class="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg focus:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2" data-astro-cid-4sn4zg3r> <div class="aspect-video overflow-hidden" data-astro-cid-4sn4zg3r> <img${addAttribute(post.image, "src")}${addAttribute(`Featured image for ${post.title}`, "alt")} class="w-full h-full object-cover transform group-hover:scale-105 group-focus:scale-105 transition-transform duration-300" data-astro-cid-4sn4zg3r> </div> <div class="p-6" data-astro-cid-4sn4zg3r> <div class="flex flex-wrap gap-2 mb-3" data-astro-cid-4sn4zg3r> ${post.tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-payflo-purple/10 text-payflo-purple rounded-full text-xs" data-astro-cid-4sn4zg3r> ${tag} </span>`)} </div> <h3 class="font-semibold text-lg group-hover:text-payflo-purple group-focus:text-payflo-purple transition-colors duration-200" data-astro-cid-4sn4zg3r> ${post.title} </h3> <p class="mt-2 text-sm text-gray-600 line-clamp-2" data-astro-cid-4sn4zg3r>${post.excerpt}</p> <time class="mt-4 block text-sm text-gray-500"${addAttribute(post.date, "datetime")} data-astro-cid-4sn4zg3r>${post.date}</time> </div> </a> </article>`)} </div> </section> <div class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-4sn4zg3r> <a href="/blog" class="flex items-center text-payflo-purple font-medium group focus:outline-none focus:ring-2 focus:ring-payflo-purple focus:ring-offset-2 rounded" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:arrow-left-duotone", "class": "h-5 w-5 mr-2 group-hover:-translate-x-1 group-focus:-translate-x-1 transition-transform duration-200", "aria-hidden": "true", "data-astro-cid-4sn4zg3r": true })}
Back to Blog
</a> </div> </main> </div> </div> </section> ` })} ${renderScript($$result, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/lucas/Developer/Next/xendrapro-website/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/lucas/Developer/Next/xendrapro-website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
