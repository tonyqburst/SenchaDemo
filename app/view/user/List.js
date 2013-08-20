Ext.define('MyApp.view.user.List', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.window.MessageBox',
        'Ext.tip.*'
    ],
    alias: 'widget.userlist',
    title: 'All Users ',
    store: 'Users',
    cls: 'user',
    listeners: {
        itemclick: function (self, record) {
//            eventManager.fireEvent('selectItem', record);
        }
    },
    initComponent: function () {
        var rec;
        this.columns = [
            { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Email', dataIndex: 'email', flex: 2 },
            { header: 'Account Type', dataIndex: 'account', flex: 1 },
            {
                xtype: 'actioncolumn',
                width: 50,
                sortable: false,
                align: 'center',
                items: [
                    {
                        icon: 'resources/images/common/edit-icon.png',
                        tooltip: 'Edit',
                        flex: 1,
                        handler: function (grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            eventManager.fireEvent('editItem', rec);
                        }
                    }
                ]
            },
            {
                xtype: 'actioncolumn',
                width: 50,
                sortable: false,
                align: 'center',
                items: [
                    {
                        icon: 'resources/images/common/remove_btn.png',
                        tooltip: 'Delete',
                        flex: 1,
                        handler: function (grid, rowIndex, colIndex) {
                            Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete ' + Ext.getStore('Users').getAt(rowIndex).get('name') + '?', showResult);
                            rec = Ext.getStore('Users').getAt(rowIndex);
                        }
                    }
                ]
            }
        ];


        function showResult(btn) {
            if (btn == 'yes') {
                eventManager.fireEvent('deleteItem', rec);
            }
            else {
            }
        }

        this.callParent(arguments);
    }
})