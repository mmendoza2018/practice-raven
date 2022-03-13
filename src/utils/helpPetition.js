export default function petition() {
  let defaultHeader = {
      'Content-Type': 'application/json; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiNjMyMWFiNmMtYzEwYS00ZjQzLWI0YzctMmNmYmY3ODZkOWJhIiwiZnVsbE5hbWUiOiJMdWlzIE1pZ3VlbCBNZW5kb3phIEFxdWlubyIsImVtYWlsIjoibWVuZG96YS5pbmcxODI2QGdtYWlsLmNvbSIsImlhdCI6MTY0Njc1NTUwNX0.NQQEHyrUL3Te7FdhWfUZCOyoP66CVtPR0FzxqHcf-vs',
  }
  const customFetch = (endPoint, options) => {
     let controller = new AbortController()
        options.signal = controller.signal;

      options.method = options.method || "GET";
      options.headers = options.headers ? {
          ...defaultHeader,
          ...options.headers
      } : defaultHeader;
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
      setTimeout(() => {
          controller.abort()
      }, 3000);
      //console.log("jummm ", options);
      return (
          fetch(endPoint,options)
          .then(res => (res.ok) ? res.json() : Promise.reject({
              error: true
          }))
          .catch(error => error)
      )
  }

  const get = (url, options = {}) => customFetch(url, options)
  const post = (url, options = {}) => {
      options.method = "POST";
      console.log("estoy dentro del post", options);
      return customFetch(url, options);
}
  const deleted = (url, options={}) => {
      options.method = "DELETE";
      return customFetch(url, options);
  }
  const update = (url, options={}) => {
      options.method = "PUT";
      return customFetch(url, options);
  }

  return {
      get,
      post,
      update,
      deleted
  }
}