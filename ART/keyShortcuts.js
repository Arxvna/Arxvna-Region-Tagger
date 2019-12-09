    document.onkeydown = function(event) {

    	//Make sure that the script doesn't run when the user is typing in a WFE or switching nations
    	if($("input,textarea").is(":focus")){
			return;
		}

		if (event.keyCode == 82) {
			document.querySelector(".icon-town-hall").click();
		}

    	//Retrieve WFE from extension setting, and set it when w key is pressed
        if (event.keyCode == 87) {
        	function onError(error) {
				console.log(`Error: ${error}`);
			}

			function onGot(item) {
			  let wfe = "A raid has just done happened";
			  if (item.wfe) {
			    wfe = item.wfe;
			  }
			  document.getElementById("editor").value = wfe;
			}

			let getting = browser.storage.sync.get("wfe");
			getting.then(onGot, onError);

			setTimeout(function() {
				document.getElementById("setwfebutton").click();
			}, (1 * 1000));
        }

        //Unpin the first listed dispatch when d key is pressed
        if (event.keyCode == 68) {
        	let dispatchInit = document.querySelector(".dispatchendobox > button:nth-child(1)");
			let confirm = document.querySelector("button.approve:nth-child(5)");

			if (confirm === null) {
				dispatchInit.click();
			} else {
				confirm.click();
			}
        }

        //Change the flag when the f key is pressed
        if (event.keyCode == 70) {
        	if (document.querySelector("#UploadBox > p:nth-child(2) > input:nth-child(1)").value !== "") {
				document.querySelector("#UploadBox > p:nth-child(3) > button:nth-child(1)").click();
				document.querySelector("#UploadBox > p:nth-child(3) > button:nth-child(1)").focus();
			}

			document.querySelector("#changeflaglink").click();
        }

        //Go through the process of removing tags and adding the invader tag on key press of t
        if (event.keyCode == 84) {
			if (document.querySelector("select.select_a_tag:nth-child(2)").options[2] !== undefined && document.querySelector("select.select_a_tag:nth-child(2)").options[2].value !== "invader") {
				document.querySelector("select.select_a_tag:nth-child(2)").value = document.querySelector("select.select_a_tag:nth-child(2)").options[2].value;
				document.querySelector("button.button:nth-child(3)").click();
			} else {
				if (document.querySelector("select.select_a_tag:nth-child(1)").value = "invader") {
					alert("The region tags have already been fully updated");
					document.querySelector("select.select_a_tag:nth-child(1)").value = "invader";
					document.querySelector("button.button:nth-child(3)").click();
				}
			}
        }

        //Go through the embassy removal and request process at key press e
        if (event.keyCode == 69) {
        	if (document.querySelector(".cancelclosure") !== null && document.querySelector(".cancelclosure").id == "The Black Hawks") {
        		document.querySelector(".cancelclosure").click();
        	} else if (document.querySelector("div.widebox:nth-child(8) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)") !== null && document.querySelector("div.widebox:nth-child(8) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)").disabled !== true) {
        		document.querySelector("div.widebox:nth-child(8) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)").click();
        	} else if (document.querySelector(".cancelembassy") !== null) {
        		document.querySelector(".cancelembassy").click();
        	} else if (document.querySelector(".abortembassy") !== null) {
        		document.querySelector(".abortembassy").click();
        	} else if (document.querySelector("div.widebox:nth-child(6) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)") !== null) {
        		document.querySelector("div.widebox:nth-child(6) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)").click();
        	} else if (document.querySelector("div.widebox:nth-child(9) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > small:nth-child(1) > input:nth-child(1)") !== null) {
        		document.querySelector("div.widebox:nth-child(9) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > small:nth-child(1) > input:nth-child(1)").click();
        	} else if (window.location.href == "https://www.nationstates.net/page=region_admin/region=the_black_hawks") {
        		document.querySelector(".primary").click();
        	} else {
        		window.open("https://www.nationstates.net/page=region_admin/region=the_black_hawks", "_self");
        	}
        	
        }

    };