import joi from 'joi';

const paymentSchema = joi.object({

    cardId: joi.number().required(),
    password: joi.string().pattern(/\d{4}/).required(),
    businessId: joi.number().required(),
    amount: joi.number().greater(0).required()

});

export default paymentSchema;