var doneTestINDEX = false;
var doneTestSHOW = false;
var doneTestCREATE = false;
var doneTestUPDATE = false;
var doneTestDESTROY = false;

var loadedUser = null;
var createdUser = null;

reloadUserStore = function() {
	console.log("\tLIST userStore:");
	userStore.load(function(records, operation, success) {
        userStore.each( function(user) {
        	console.log("\t\tUser ID=" + user.getId() + "\tname=\"" + user.get('name') + "\"\tupdate_count=" + user.get('update_count'));
        });
        console.log("");
	});		
}

testINDEX = function() {
	// TEST: User INDEX (performs a GET request to /users.json)
	userStore.load({
	    callback: function(records, operation, success) {
	        // the operation object contains all of the details of the load operation
	        console.log("TEST INDEX: Loaded userStore with " + records.length + " record(s).");
	        console.log("\tLIST userStore:");
	         userStore.each( function(user) {
	        	console.log("\t\tUser ID=" + user.getId() + "\tname=\"" + user.get('name') + "\"\tupdate_count=" + user.get('update_count'));
	        });
	        console.log("");
	        
	        testSHOW();
	    },
	    scope: this
	});	
}

testSHOW = function() {
	// TEST: User SHOW (performs a GET request to /users/id.json)
	var UserModel = Ext.ModelMgr.getModel('User');
	UserModel.load(1, {
	    success: function(user) {
	    	loadedUser = user;
	        console.log("TEST SHOW: Loaded user ID=" + user.getId() + ", name=\"" + user.get('name') + "\"\tupdate_count=" + user.get('update_count'));
	        console.log("");
	        
	        testUPDATE();
	    },
	    failure: function(response) {
	        console.log("TEST SHOW: Failed to load user.");
	        console.log("");
	    }
	});
}

testCREATE = function() {
	// TEST: User CREATE (performs a POST request to /users.json)
	createdUser = Ext.create('User', {
	    name: 'New User',
	    update_count: 0
	});
	createdUser.save({
	    success: function(user) {
	        console.log("TEST CREATE: Saved user with ID="+ user.getId() + ", name=\"" + user.get('name') + "\"\tupdate_count=" + user.get('update_count'));
	        
	        reloadUserStore();
	        testDESTROY();	
	    },
	    failure: function(response) {
	    	console.log("TEST CREATE: Failed to save user.");
	    	console.log("");
	    }
	});
}

testUPDATE = function() {
	// TEST: User UPDATE (performs a PUT request to /user/id.json)
    loadedUser.set('update_count', loadedUser.get('update_count')+1);
	loadedUser.save({
	    success: function(userUpdated) {
	        console.log("TEST UPDATE: Updated user ID=" + userUpdated.getId() + ", new name=\"" + userUpdated.get('name') + "\"\tupdate_count=" + userUpdated.get('update_count'));
	        console.log("");
	        
	        testCREATE();
	    },
	    failure: function(response) {
	    	console.log("TEST UPDATE: Failed to update user.");
	    	console.log("");
	    }
	});
}

testDESTROY = function() {
	// TEST: User DESTROY (performs a DELETE request to /user/id.json)
	createdUser.erase({
		success: function(user) {
			console.log("TEST DESTROY: Destroyed user with ID="+ user.getId() + ", name=\"" + user.get('name') + "\"\tupdate_count=" + user.get('update_count'));
			
			reloadUserStore();
		},
		failure: function(response) {
			console.log("TEST DESTROY: Failed to save user.");
			console.log("");
		}
	});
}

runTests = function() {

	testINDEX(); // each test fires off the next to keep it synchronous

}
