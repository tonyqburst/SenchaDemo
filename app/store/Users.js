Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Users',
    autoLoad: true,
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