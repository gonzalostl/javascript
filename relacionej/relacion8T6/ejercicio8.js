/*escribe un programa que compruebe cada 10 segundos si existen cookies y las borre*/

function BorrarCookies() {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const nombreCookie = cookie.split("=")[0].trim();

    document.cookie = `${nombreCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    console.log(`Cookie borrada: ${nombreCookie}`);
  });
}

setInterval(BorrarCookies, 10000);
