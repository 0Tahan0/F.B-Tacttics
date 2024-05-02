export function getCookie(cname) {
  const cookieName = document.cookie
    .split(";")
    .map((el) => el.slice(0, el.indexOf("=")).trim());
  const cookieValue = document.cookie
    .split(";")
    .map((el) => el.slice(el.indexOf("=") + 1, el.length).trim());

  const cookiesObj = {};

  if (cookieName != "") {
    cookieName.forEach((el, i) => {
      cookiesObj[el] = cookieValue[i];
    });
  } else return undefined;

  return cookiesObj[cname];
}
export function createCookie(cname, cvalue, exday, path) {
  const d = new Date();
  d.setTime(d.getTime() + exday * 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${cvalue};${
    exday ? "expires=" + d.toUTCString() : ""
  };${path ? "path=" + path : ""}`;
}

