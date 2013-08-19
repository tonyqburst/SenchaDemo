var store = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'data'],
    id: 'chartStore'
//    data: [
//        { 'name': 'Paid', 'data': 0 },
//        { 'name': 'Free', 'data': 0 }
//    ]
});

var chart = Ext.create('Ext.chart.Chart', {
        animate: true,
        store: store,
        theme: 'Base:gradients',
        height: 350,
        width: 350,
        series: [
            {
                type: 'pie',
                field: 'data',
//            showInLegend: true,
//            tips: {
//                trackMouse: true,
//                width: 140,
//                height: 28,
//                renderer: function (storeItem, item) {
//                    // calculate and display percentage on hover
//                    var total = 0;
//                    store.each(function (rec) {
////                        console.log(rec.get('data'));
//                        total += rec.get('data');
//                    });
//                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
//                },
//        },
//            highlight: {
//                segment: {
//                    margin: 20
//                }
//            },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }
        ]
    })
    ;

Ext.define('MyApp.view.user.Chart', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userchart',
    title: 'AllKu ',
    cls: 'userchart',
    autoShow: true,
    initComponent: function () {
        this.columns = [
            {
                items: chart,
                width: '100%',
                height: 500,
                style: {
                    'margin-top': '-30px',
                    'margin-left': '100px'
                }
            }
        ];
        this.callParent(arguments);
    }
});
