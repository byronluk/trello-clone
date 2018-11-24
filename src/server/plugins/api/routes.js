const routes = {
  account: [
    {
      method: "GET",
      path: "init",
      handler: (request, h) => {
        /* eslint-disable no-console */
        console.log("handling account init request");
        console.log(request.query);

        h(null, "hello");
      }
    }
  ]
};

export default routes;
