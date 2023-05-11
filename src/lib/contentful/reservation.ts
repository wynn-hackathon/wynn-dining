//header of arequest
export const header: any = {
  'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  "Content-Type": "application/vnd.contentful.management.v1+json",
  "X-Contentful-Content-Type": 'reserveTable',
}

//End point
export const cmaAPI: any = 'https://api.contentful.com/spaces/' + process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID + '/environments/master/entries/'

//Submit the reservation
export const postData = async (url = "", data = {}) =>{
  const response = await fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}

//Cancel the reservation
export const CancelData = async (url = "", currVersion = 0, data = {}) =>{
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...header, 'X-Contentful-Version': currVersion },
    body: JSON.stringify(data),
  });
  return response.json();
}



//Public the reservation
export const publicData = async (url = "", currVersion = 0) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...header, 'X-Contentful-Version': currVersion }
  });
  return response.json();
}

//DELETE the reservation
export const deleteData = async (url = "", currVersion = 0) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: { ...header, 'X-Contentful-Version': currVersion }
  });
  return response.json();
}

//Get all the reservations
export const getReserve = async(url = "") => {
  const response = await fetch(url, {
    method: "GET",
    headers: header,
  });
  return response.json();
}