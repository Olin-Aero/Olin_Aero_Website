---
---

window.addEventListener("load", function () {
	var webhook = "https://hooks.slack.com/services/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";
	function sendData() {
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;

		var name_field = name == "" ? undefined : {
			"title":"Name",
			"value":name,
			"short":false,
		};
		var email_field = email == "" ? undefined : {
			"title":"Email",
			"value":email,
			"short":false,
		};
		var message_field = {
			"title": "Message",
			"value": message == "" ? "<no message>" : message,
			"short": false,
		};
		
		var fields = [name_field, email_field, message_field].filter(function(x) {
			return x != undefined;
		});

		var actions = email == "" ? [] : [{
			"type": "button",
			"text": "respond",
			"url": "mailto:" + email + "?body="  + encodeURIComponent("\n\nYou wrote us:\n\"" + message + "\"")
		}];

		var json = JSON.stringify({
			"icon_emoji": ":email:",
			"username": "Contact form submission",
			"attachments":[{
				"fallback":"New website contact form submission.",
				"fields":fields,
				"actions": actions,
			}]
		});

		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
		    if(xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
		        window.location.replace("/");
		    }
		}

		xhttp.open("POST", webhook, true);
		xhttp.send(json);

	};

	var form = document.getElementById('contact-form');
	form.style.display = "flex";
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		sendData();
	});
});
