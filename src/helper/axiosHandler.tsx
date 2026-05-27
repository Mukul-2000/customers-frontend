export default function axiosHandler(error: any) {
    if (error.response) {
      if (error.response.status === 401) {
        // Auth.signout();
        window.location.href = "/";
      }
      if (error.response.data.status === 406) {
        // Auth.signout();
        window.location.href = "/";
      }
    }
    return;
  }
  