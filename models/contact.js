const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleSchemaValidErrors } = require('../utils');

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const contactSchemaDB = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Set email for contact'],
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: true, updatedAt: false },
  }
);

contactSchemaDB.post('save', handleSchemaValidErrors);

const contactAddSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ 'any.only': 'missing required name field' }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .pattern(emailRegexp)
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.string()
    .min(5)
    .max(15)
    .required()
    .messages({ 'any.required': 'missing required phone field' }),
  favorite: Joi.boolean(),
}).min(1);

const contactUpdateStatusSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ 'any.required': 'missing field favorite' }),
});

const Contact = model('contact', contactSchemaDB);

const schemas = {
  contactAddSchema,
  contactUpdateStatusSchema,
};

module.exports = {
  Contact,
  schemas,
};
