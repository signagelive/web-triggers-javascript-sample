function trigger() {
	let self = this;
	self.apiURL = $('#apiUrl')[0].value;
	self.apiID = $('#apiID')[0].value;
	self.apiKey = $('#apiKey')[0].value;
	self.networkID = $('#networkID')[0].value;
	
	self.message = {};
	self.message.interrupt = $('#triggerID')[0].value;
	self.message.players = $('#players')[0].value.split(',');
	self.message.groups = $('#groups')[0].value.split(',');

	$.ajax({
        url: self.apiURL + "/networks/" + self.networkID + "/messages",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(self.message),
        contentType: "application/json",
        success: function(json) {
			alert("Trigger successfully sent");
		},
        error: function(e) { 
        	alert("Trigger failed: " + e.responseJSON.Message);    
        },
		beforeSend: function(xhr) {
        	xhr.setRequestHeader('X-SIGNAGELIVE-WBI-APP-ID', self.apiID);
        	xhr.setRequestHeader('X-SIGNAGELIVE-WBI-APP-KEY', self.apiKey);
        }
    });
}