module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '188870d52d0144f7d16b0d7fdbd39394'),
  },
});
