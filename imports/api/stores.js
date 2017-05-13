import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Stores = new Mongo.Collection('stores');

Meteor.methods({
    'stores.insert'(name, description, images, location, abn, contact, link){
        Stores.insert({
            name,
            description,
            images,
            location,
            contact,
            link,
            abn,
            createdAt: new Date(),
            owner: Meteor.userId(),
        });
    }
});