Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Users',
    autoLoad: true,
    listeners: {
        datachanged: function (store) {
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
    },
    proxy: {
        type: 'ajax',
        url: 'resources/json/users.json',
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
})