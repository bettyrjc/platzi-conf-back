module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9cc41730ffdbd20233278b21dcf086d2'),
  },
});
