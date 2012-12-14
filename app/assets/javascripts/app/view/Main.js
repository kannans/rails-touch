Ext.define('RailsTouch.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.List'
    ],
    config: {
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Welcome to Rails Touch',
                items: [
                	{ xtype: 'spacer' },
                	{
                		xtype: 'button',
                		text: '+1',
			            handler: function () {
			            	var UserModel = Ext.ModelMgr.getModel('User');
							UserModel.load(1, {
							    success: function(user) {
							    	user.set('update_count', loadedUser.get('update_count')+1);
									user.save({
									    success: function(userUpdated) {
									    	Ext.Msg.alert("Success!", "TEST UPDATE:\r\nUpdated user ID=" + userUpdated.getId() + "\nname=\"" + userUpdated.get('name') + "\"\tupdate_count=" + userUpdated.get('update_count'), Ext.emptyFn);
									    },
									    failure: function(response) {
									    	Ext.Msg.alert("Failed!", "TEST UPDATE: Failed to update user.", Ext.emptyFn);
									    }
									});							    	
							    },
							    failure: function(response) {
							    	Ext.Msg.alert("Failed!", "TEST UPDATE: Failed to load user.", Ext.emptyFn);
							    }
							});			            	
			            }

                	}
	            ]
            },
            {
	            xtype: 'list',
	            loadingText: 'Loading users...',
        		store: 'userStore',
        		styleHtmlContent: true,
        		itemTpl: '<div class="userslist"><span>User ID={id}</span><span>Name={name}</span><span>Update_Count={update_count}</span></div>'
            }
        ]
    }
});