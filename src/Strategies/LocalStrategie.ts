import passport from 'passport';
import LocalStrategy from 'passport-local';
import db from '../db';
passport.use(LocalStrategy( () => {
}));