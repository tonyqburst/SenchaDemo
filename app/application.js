Ext.define('MyApp.Application', {
    name: 'MyApp',

    extend: 'Ext.app.Application',


    views: [
        // TODO: add views here

    ],

    controllers: [
        // TODO: add controllers here
        'Users'
    ],

    stores: [
        // TODO: add stores here

    ],

    init: function () {
        eventManager = new Ext.util.Observable();
    }
});
