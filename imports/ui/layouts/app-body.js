import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import { Stores } from '../../api/stores.js'

import './app-body.html';

Template.StoresDirectory.helpers({
    stores() {
        console.log(Stores.find().fetch());
        return Stores.find({});
    }
});

Template.CreateStore.events({
    'submit .createStore'(event){
        event.preventDefault();

        const target = event.target;
        const name = target.businessName.value;
        const desc = target.businessDesc.value;
        const loc = target.businessLoc.value;
        const abn = target.abn.value;
        const phone = target.businessPhone.value;
        const link = target.businessWebAddress.value;
        const images = target.images.value;

        console.log(images);

        Meteor.call('stores.insert', name, desc, images, loc, abn, phone, link);

        target.businessName.value = "";
        target.businessDesc.value = "";
        target.businessLoc.value = "";
        target.abn.value = "";
        target.businessPhone.value = "";
        target.businessWebAddress.value = "";

    }
});

Template.StorePage.helpers({
    store(){
        return Stores.findOne(FlowRouter.getParam('id'));
    }
});