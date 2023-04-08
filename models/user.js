const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const { handleSchemaValidErrors } = require('../utils');

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const subscriptionTypes = ['starter', 'pro', 'business'];

const userSchemaDB = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionTypes,
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: false },
  }
);

userSchemaDB.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchemaDB.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchemaDB.post('save', handleSchemaValidErrors);

const userSignUpSchemaJoi = Joi.object({
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
    .messages({ 'any.only': 'missing required password field' }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  subscription: Joi.string().valid('starter', 'pro', 'business'),
}).min(1);

const userSignInSchemaJoi = Joi.object({
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
    .messages({ 'any.only': 'missing required password field' }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required()
    .messages({ 'any.required': 'missing required email field' }),
}).min(1);

const userUpdateSubscribtionSchemaJoi = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionTypes)
    .required(),
}).min(1);

const User = model('user', userSchemaDB);

module.exports = {
  User,
  userSignUpSchemaJoi,
  userSignInSchemaJoi,
  userUpdateSubscribtionSchemaJoi,
};
