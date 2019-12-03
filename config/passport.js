const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const BusinessOwner = mongoose.model("businessOwners");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      BusinessOwner.findById(jwt_payload.id)
        .then(BusinessOwner => {
          if (BusinessOwner) {
            return done(null, BusinessOwner);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
