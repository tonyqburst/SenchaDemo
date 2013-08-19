Ext.define('MyApp.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['Users'],
    views: [
        'user.List',
        'user.Add',
        'user.Chart',
        'user.Edit'
    ],

    init: function () {
        eventManager.on('selectItem', this.selectItem);
        eventManager.on('addItem', this.addItem);
        eventManager.on('saveItem', this.saveItem);
        eventManager.on('editItem', this.editItem);
        eventManager.on('editSuccess', this.editSuccess);
        eventManager.on('deleteItem', this.deleteItem);
        eventManager.on('drawChart', this.drawChart);
    },

    selectItem: function (ob) {
        Ext.getStore('Users').add({name: ob.get('name'), 'email': ob.get('email')});
    },

    addItem: function () {
        var view = Ext.widget('useradd');
        view.show();
    },

    saveItem: function (data) {
        Ext.getStore('Users').add({ name: data.name, email: data.email, account: data.account});
    },

    editItem: function (rec) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(rec);
        view.show();
    },

    editSuccess: function (rec, data) {
        rec.set(data);
    },

    deleteItem: function (rec) {
        Ext.getStore('Users').remove(rec);
    },

    drawChart: function (store) {
        var free_count = 0, paid_count = 0;
        store.each(function (rec) {
            if (rec.get('account') == 'Free') {
                free_count += 1;
            } else {
                paid_count += 1;
            }
        });
        var data = [
            { 'name': 'Paid', 'data': paid_count },
            { 'name': 'Free', 'data': free_count }
        ];
        Ext.getStore('chartStore').loadData(data, false);
    }

})