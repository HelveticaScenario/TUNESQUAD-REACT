var jsforce = require('jsforce');
var conn = new jsforce.Connection({
	loginUrl: 'https://test.salesforce.com/'
});
conn.login('thecontrarian42@gmail.com', 'salesforce42vclF0pi5hMWoAh7sWMYJ40rj', function(err, res) {
  if (err) { return console.error(err); }
  console.log('connected');
  conn.sobject('Contact')
  	.find({Email: 'thecontrarian42@gmail.com'}, 'Id')
  	.limit(1)
  	.execute(function(err, res) {
	    if (err) { return console.error(err); }
	    if (res.length === 0) { return console.error('No match found'); }
	    // console.log(res);
	    var contact_id = res[0].Id;
	    conn.sobject('Teacher_Profile__c')
	    	.find({Teacher_Name__c: contact_id}, 'Id')
	    	.limit(1)
	    	.execute(function(err, res) {
			    if (err) { return console.error(err); }
			    if (res.length === 0) { return console.error('no profile found'); }
			    var profile_id = res[0].Id;
		    	conn.sobject('Lesson_Summaries__c')
		    		.find({Teacher_s_Name__c: profile_id}, 'Name')
		    	// 	.include("Lesson_Summary_Assignment_Juction__c") // include child relationship records in query result. 
							// // after include() call, entering into the context of child query.
							// .select("Lesson_Assignment__c")
							// .orderby("CreatedDate", "DESC")
							// .end() // be sure to call end() to exit child query context
		    		.execute(function(err, res) {
			    		if (err) { return console.error(err); }
		    			console.log(res);
		    		})
			  });
	  });
});
// console.log(res);