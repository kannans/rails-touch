//<debug>
Ext.Loader.setPath({
    'RailsTouch': 'app'
});
//</debug>

Ext.application({
    name: 'RailsTouch',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],

    icon: {
        '57': 'assets/icon_Icon.png',
        '72': 'assets/icon_Icon~ipad.png',
        '114': 'assets/icon_Icon@2x.png',
        '144': 'assets/icon_Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'assets/startup_320x460.jpg',
        '640x920': 'assets/startup_640x920.png',
        '768x1004': 'assets/startup_768x1004.png',
        '748x1024': 'assets/startup_748x1024.png',
        '1536x2008': 'assets/startup_1536x2008.png',
        '1496x2048': 'assets/startup_1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('RailsTouch.view.Main'));        
    },
    
    onReady: function() {
        runTests();
    }
});
