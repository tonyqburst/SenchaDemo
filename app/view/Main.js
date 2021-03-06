Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'absolute',
    items: [
        {
            xtype: 'panel',
            height: 600,
            cls: 'main-application-panel',
            title: 'My Sample EXT Application',
            style: {
                'text-align': 'center'
            },
            items: [
                {
                    width: "50%",
                    height: 500,
                    xtype: 'userlist',
                    style: {
                        'text-align': 'center',
                        float: 'left'
                    }
                },
                {
                    xtype: 'button',
                    title: 'Add User',
                    text: 'Add User',
                    layout: 'absolute',
                    padding: 6,
                    handler: function () {
                        eventManager.fireEvent('addItem');
                    },
                    style: {
                        float: 'left',
                        top: '3px',
                        left: '-102px',
                        width: '100px',
                        height: '30px',
                        background: '#525673',
                        border: '0px solid black',
                        'z-index': '1'
                    }
                },
                {
                    xtype: 'userchart',
                    width: "50%",
                    height: 500,
                    style: {
                        float: 'right',
                        top: '-30px',
                        'text-align': 'center'
                    }
                }
            ]
        }
    ]
})
;