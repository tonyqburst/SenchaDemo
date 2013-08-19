Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Users',
    autoLoad: true,
    listeners: {
        datachanged: function (store) {
            console.log('data changed');
            eventManager.fireEvent('drawChart', store)

        },
        update: function (store) {
            console.log('udpated');
            eventManager.fireEvent('drawChart', store)
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