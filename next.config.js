module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.dicebear.com', 'avatars.githubusercontent.com', 'platform-lookaside.fbsbx.com',
    'lh3.googleusercontent.com','cdn.sanity.io', ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
