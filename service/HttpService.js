import axios from "axios";
// axios.interceptors.response.use(
//   (null,
//   (error) => {
//     const unexpectedError =
//       error.status >= 404 && error.status < 500 && error.response;

//     if (!unexpectedError) alert("An Unexpected error occured !");

//     return Promise.reject(error);
//   })
// );
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
