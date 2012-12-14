Ext.define('User', {

    extend: 'Ext.data.Model',

    config: {
        fields: [
        	{ name: 'id', type: 'int' },
        	{ name: 'name', type: 'string' },
        	{ name: 'update_count', type: 'int' },
        ],
        proxy: {
            type: 'rest',
            url : '/users',
            format: 'json',
            headers: {
	            'X-CSRF-Token': csrfToken
	        },
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }
    }
});
