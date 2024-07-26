/* empty css                         */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, p as renderSlot, n as addAttribute, o as createAstro, q as renderComponent, t as renderHead, s as spreadAttributes } from './astro/server_C1pXNtON.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { format } from 'date-fns';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="gap-x-10 opacity-80"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <div class="flex items-center"> <img src="/logo.png" alt="612Soft Logo" class="h-12 w-12"> <div class="ml-2"><h1 class="font-bold opacity-80 text-2xl">612Soft</h1></div> </div> <!-- <LangButton client:load/> --> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"> <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "> <li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/Services">Services</a></li> <li><a href="/Contact">Contact</a></li> </ul> </div> </div> </nav>`;
}, "C:/Projects/612Soft/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">612Soft™</a>. All Rights Reserved.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> <li> <a href="#" class="hover:underline me-4 md:me-6">About</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline me-4 md:me-6">Licensing</a> </li> <li> <a href="#" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "C:/Projects/612Soft/src/components/Footer.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Projects/612Soft/src/components/Badge.astro", void 0);

const $$Astro$9 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 250" width="256" height="256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Projects/612Soft/src/components/icons/GitHub.astro", void 0);

const $$Astro$8 = createAstro();
const $$Csharp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Csharp;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="2222" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 -1.43 255.58 290.11"><path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35"></path><path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z"></path><path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35"></path><g fill="#fff"><path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z"></path><path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z"></path></g></svg>`;
}, "C:/Projects/612Soft/src/components/icons/Csharp.astro", void 0);

const $$Astro$7 = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "C:/Projects/612Soft/src/components/icons/React.astro", void 0);

const $$Astro$6 = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="rounde-full border rounded-full border-white/20 flex justify-center items-center gap-x-2 py-1 px-2 lg:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition text-xs md:text-base"${addAttribute(Astro2.props.href, "href")} target="_blank">${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Projects/612Soft/src/components/SocialPill.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${Astro2.props.class} w-full lg:w-[740px] mx-auto pb-24`, "class")}${addAttribute(Astro2.props.id, "id")}>${renderSlot($$result, $$slots["default"])}</section>`;
}, "C:/Projects/612Soft/src/components/SectionContainer.astro", void 0);

const $$TypingText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="typing" data-astro-cid-dpb7jah2>
Welcome to 612Soft
</div>`;
}, "C:/Projects/612Soft/src/components/TypingText.astro", void 0);

const $$MainView = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "class": "py-24 pb-30" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 justify-center lg:justify-normal"> ${renderComponent($$result2, "TypingText", $$TypingText, {})}<a href="https://x.com/@612Soft" class="flex justify-center items-center">${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`Working on it!` })}</a> </h1> <h2 class="text-sm md:text-lg lg:text-xl opacity-80 max-w-[800px] justify-center lg:justify-normal text-balance">Welcome to 612Soft, your premier destination for cutting-edge web development solutions. Our team of experienced developers and designers is dedicated to transforming your vision into a stunning, functional, and user-friendly website. Whether you need a simple landing page or a complex e-commerce platform, we combine creativity, technical expertise, and the latest industry trends to deliver a product that exceeds your expectations. Our goal is to help your business thrive in the digital landscape by providing a seamless online experience for your customers.</h2> <ul class="flex gap-x-2 mt-4 flex-wrap justify-center lg:justify-normal"> ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://github.com/vik-012/612Soft" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GitHub", $$GitHub, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://dotnet.microsoft.com/es-es/languages/csharp" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Csharp", $$Csharp, { "class": "size-4 md:size-6" })}
C#
` })} ${renderComponent($$result2, "SocialPill", $$SocialPill, { "href": "https://react.dev/learn/typescript" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ReactIcon", $$React, { "class": "size-4 md:size-6" })}
React
` })} </ul> ` })}`;
}, "C:/Projects/612Soft/src/components/MainView.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> <div class="top-0 bottom-0 min-h-screen w-full"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "MainView", $$MainView, {})} </div> ${renderSlot($$result, $$slots["default"])} <!-- <div id="background" class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24"></div> --> <!-- <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> --> <!-- <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div> --> <!-- <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Projects/612Soft/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TimelineItem;
  const { date, title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-600 dark:bg-gray-500"></div> <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">${date}</time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${title}</h3> <p class="mb-4 text-base font-normal text-gray-450 dark:text-gray-350 text-pretty">${description}</p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"></svg> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </a>`}`;
}, "C:/Projects/612Soft/src/components/TimelineItem.astro", void 0);

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  var date = /* @__PURE__ */ new Date();
  const items = [
    {
      date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
      title: "Application UI code in Tailwind CSS",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
      link: "#"
    },
    {
      date: format(date.setDate(date.getDate() - 1), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 2), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 3), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 4), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 5), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 6), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    },
    {
      date: format(date.setDate(date.getDate() - 7), "yyyy-MM-dd"),
      title: "Design System in Figma",
      description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 dark:border-gray-300 ml-3"> ${items.map((item, index) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "TimelineItem", $$TimelineItem, { ...item })} </li>`)} <li class="mb-10 ms-4"></li> </ol>`;
}, "C:/Projects/612Soft/src/components/Timeline.astro", void 0);

const $$Astro$2 = createAstro();
const $$AssemblyIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AssemblyIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path></svg>`;
}, "C:/Projects/612Soft/src/components/icons/AssemblyIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$InfoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfoIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`;
}, "C:/Projects/612Soft/src/components/icons/InfoIcon.astro", void 0);

const $$Astro = createAstro();
const $$InfoImages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoImages;
  const tags = { Tag1: { name: ".net C#", class: "bg-black text-white" }, Tag2: { name: "Astro, TailwindCSS", class: "bg-white text-black" } };
  const infoImages = [
    {
      title: "Info 1",
      description: "Description 1",
      image: "/screenshot.webp",
      link: "https://www.google.com",
      tags: [tags.Tag1, tags.Tag2]
    },
    {
      title: "Info 2",
      description: "Description 2",
      image: "/screenshot.webp",
      link: "https://www.google.com",
      tags: [tags.Tag1, tags.Tag2]
    }
  ];
  return renderTemplate`${infoImages.map((info, index) => {
    return renderTemplate`${maybeRenderHead()}<article><h3 class="text-2xl font-semibold mb-2">${info.title}</h3><p class="text-lg mb-4 text-pretty">${info.description}</p><ul class="flex gap-x-2 flex-row">${info.tags.map((tag, index2) => {
      return renderTemplate`<span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-2 px-2`, "class")}><li>${tag.name}</li></span>`;
    })}</ul><img class="rounded shadow-2xl shadow-white/20"${addAttribute(info.image, "src")}${addAttribute(info.title, "alt")}><a${addAttribute(info.link, "href")}>Link</a></article>`;
  })}`;
}, "C:/Projects/612Soft/src/components/InfoImages.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "612 Soft - Web development", "description": "Choose us to develop a professional custom page for you." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TypingText", $$TypingText, {})} ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "invisibleSection", "class": "observeMe opacity-0 translate-y-4 transition-opacity duration-700 ease-out" }, { "default": ($$result3) => renderTemplate` <h2 class="text-sm md:text-xl lg:text-2xl font-semibold mb-6 gap-x-3 text-black/80 dark:text-white flex">${renderComponent($$result3, "AssemblyIcon", $$AssemblyIcon, { "class": "size-6" })}Our Services</h2> ${renderComponent($$result3, "Timeline", $$Timeline, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "invisibleSection", "class": "observeMe opacity-0 translate-y-4 transition-opacity duration-700 ease-out" }, { "default": ($$result3) => renderTemplate` <h2 class="text-sm md:text-xl lg:text-2xl font-semibold mb-6 gap-x-3 text-black/80 dark:text-white flex">${renderComponent($$result3, "InfoIcon", $$InfoIcon, { "class": "size-6" })}About Us</h2> ${renderComponent($$result3, "InfoImages", $$InfoImages, {})} ` })} </main> ` })} `;
}, "C:/Projects/612Soft/src/pages/index.astro", void 0);

const $$file = "C:/Projects/612Soft/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
