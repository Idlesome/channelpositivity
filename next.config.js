const development = process.env.NODE_ENV !== "production";
const prodConfigOverrides = development
  ? {}
  : {
      images: {
        loader: "custom",
        loaderFile: "./cf-loader.js",
      },
    };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    return Object.assign({}, config, {
      module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            loader: "raw-loader",
          },
        ]),
      }),
    });
  },
  ...prodConfigOverrides,
};

module.exports = nextConfig;
