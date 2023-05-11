import Image from "next/image"

export function formatDate(dateString, options) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(dateString))
}

export const $all = (selector) => typeof document !== 'undefined' && document.querySelectorAll(selector);
export const $id = (selector) => typeof document !== 'undefined' && document.getElementById(selector);
export const isDesktop = () => typeof document !== 'undefined' && window.matchMedia("(min-width: 577px)").matches;
export const isTablet = () => typeof document !== 'undefined' && window.matchMedia("(max-width: 1024px)").matches;
export const isMobile = () => typeof document !== 'undefined' && window.matchMedia("(max-width: 576px)").matches;
export const _$ = selector => typeof document !== 'undefined' && document.querySelector(selector);

export const sticky = (element, height, className) => window?.pageYOffset > height ? element?.classList.add("sticky", "animated", "fadeInDown") : element?.classList.remove("sticky", "animated", "fadeInDown");

export const handleSticky = () => {
  (isTablet() || isMobile()) && _$("#myHeader").classList.remove('sticky');
  isDesktop() && _$(".mainNav").classList.remove('sticky');
}

export const reserveData = (data) => {
  const nameRes = $id('restaurantNameModal')
  const timeRes = $id('timeValue')
  const sizeRes = $id('partySizeValue')
  const dateRes = _$('.react-datepicker-wrapper input')
  nameRes && (nameRes.textContent = data.restaurant)
  timeRes && (timeRes.textContent = data.time)
  sizeRes && (sizeRes.textContent = data.people)
  dateRes && (dateRes.value = data.startDate)
}

export const reserveDataUpdate = (data) => {
  const tempID = $id('idEntry')
  const nameRes = $id('restaurantNameModal1')
  const timeRes = $id('timeValue1')
  const sizeRes = $id('partySizeValue1')
  const dateRes = _$('.react-datepicker-wrapper input')
  nameRes && (nameRes.textContent = data.restaurant)
  timeRes && (timeRes.textContent = data.time)
  sizeRes && (sizeRes.textContent = data.people)
  dateRes && (dateRes.value = data.startDate)
  tempID && (tempID.value = data.id)
}


export const partySize = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests']
export const timeList = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM']

//12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',

export const ValidateFormWithJS = () => {
  const name = _$('#name').value
  const email = _$('#email').value

  if (!name) {
    alert('Please enter your name.')
    return false
  }

  if (!email) {
    alert('Please enter your email.')
    return false
  }

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


