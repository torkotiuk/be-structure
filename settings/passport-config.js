const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { userServices: service } = require('../services');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const jwtStrategy = new Strategy(settings, async (payload, done) => {
  try {
    const user = await service.getUserByIdSRV(payload.id);

    if (!user) {
      throw new Error('Not Found');
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(jwtStrategy);
