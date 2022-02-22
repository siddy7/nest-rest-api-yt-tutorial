import * as mongose from 'mongoose';

export const ItemSchema = new mongose.Schema({
    name: String,
    quantity: Number,
    description: String
})