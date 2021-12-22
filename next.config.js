const { withSuperjson } = require('next-superjson')

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}

module.exports = withSuperjson()(config)
