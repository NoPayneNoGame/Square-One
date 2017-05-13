import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
FlowRouter.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Index'});
    }
});

const stores = FlowRouter.group({
    prefix: '/stores'
});

stores.route('/', {
    name: 'stores-dir',
    action() {
        console.log("storeDir");
        BlazeLayout.render('MainLayout', {main: 'StoresDirectory'});
    }
});

stores.route('/:id', {
    name: 'store',
    action() {
        BlazeLayout.render('MainLayout', {main: 'StorePage'});
    }
})

FlowRouter.route('/create', {
    name: 'create_business',
    action() {
        BlazeLayout.render('MainLayout', {main: 'CreateStore'});
    }
})