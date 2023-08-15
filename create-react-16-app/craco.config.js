module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
          "react/jsx-runtime": "react/jsx-runtime.js",
        },
      },
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules/svix") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
    },
  },
};
