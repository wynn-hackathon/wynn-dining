import Image from "next/image"

export function formatDate(dateString, options) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(dateString))
}

export const $all = (selector) => document.querySelectorAll(selector);
export const $id = (selector) => document.getElementById(selector);
export const isDesktop = () => window.matchMedia("(min-width: 577px)").matches;
export const isTablet = () => window.matchMedia("(max-width: 1024px)").matches;
export const isMobile = () => window.matchMedia("(max-width: 576px)").matches;
export const _$ = selector => typeof document !== 'undefined' && document.querySelector(selector);

export const sticky = (element, height, className) => window.pageYOffset > height ? element?.classList.add("sticky", "animated", "fadeInDown") : element?.classList.remove("sticky", "animated", "fadeInDown");



export const handleSticky = (e) => {
  e.preventDefault();
  _$(".navbar").classList.remove('sticky');
}


export const responsive = [
  {
    breakpoint: 1530,
    settings: { slidesToShow: 3, }
  },
  {
    breakpoint: 1024,
    settings: { slidesToShow: 3, }
  },
  {
    breakpoint: 480,
    settings: { slidesToShow: 1, }
  }
]


