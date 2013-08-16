Ext.define('MyApp.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',
    title: 'Edit User',
    layout: 'fit',
    store: 'Users',
    modal: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name',
                        allowBlank: false,
                        padding: 5
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email',
                        allowBlank: false,
                        vtype: 'email',
                        padding: 5
                    },
                    {
                        xtype: 'combobox',
                        name: 'account',
                        fieldLabel: 'Choose Account',
                        editable: false,
                        store: {
                            fields: ['account'],
                            data: [
                                {account: 'Paid'},
                                {account: 'Free'}
                            ]
                        },
                        queryMode: 'local',
                        displayField: 'account',
                        padding: 5
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                handler: function (button) {
                    var win = button.up('window'),
                        form = win.down('form');
                    if (form.isValid()) {
                        eventManager.fireEvent('editSuccess', form.getRecord(), form.getForm().getValues());
                        win.close();
                    }
                    else alert('Invalid form');

                }
            },
            {
                text: 'Cancel',
                handler: function (button) {
                    var win = button.up('window');
                    win.close();
                }
            }
        ];
        this.callParent(arguments);
    }
})