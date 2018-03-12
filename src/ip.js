// Set variables
$(document).ready(function() {
	chrome.extension.sendMessage({name: "getIP"}, function(response) {

		chrome.extension.sendMessage({name: "getOptions"}, function(response) {
			var websiteIP_status = response.EnableRenderImg;
			if (websiteIP_status == "Disable" || typeof websiteIP_status == 'undefined') {


				$("body").append('<div id="rendFloatDom" class="NYwishes">'
					+ '<div id="expandInputBtn" class="send"><div class="send-btn" style="float:right"><a onclick="document.getElementById(\'expandInputBtn\').style.display=\'none\';document.getElementById(\'showRenderImgDiv\').style.display=\'block\';">展开</a></div></div>'
					+ '<div class="send" id="showRenderImgDiv" style="display:none">'
					+ '<div class="input"><input id="choose-id" name="content" type="text" placeholder="cid: | id: + 标签" ></div>'
					+ '<div class="send-btn" ><a id="RenderImgBtn">渲染</a></div></div></div>'
					+ '');

				function doRender() {
					var chooseVal = document.getElementById('choose-id').value;
					var node;
					if(chooseVal.startsWith('cid:')) {
						chooseVal = chooseVal.substring(4);
						node = document.getElementsByClassName(chooseVal)[0];
					} else {
						if(chooseVal.startsWith("id:")) {
							chooseVal = chooseVal.substring(3);
						}

						if ("" == chooseVal) {
							return;
						}

						node = document.getElementById(chooseVal);
					}

					if(node == null || typeof(node) == undefined) {
						alert("没有选中的dom结构");
						return;
					}

					domtoimage.toPng(node)
						.then(function (dataUrl) {
								var url = dataUrl;
								window.open().document.write('<html><head><title>渲染图</title></head><body><div style=\'text-align:center\'><a download="out.png" href="' + url + '"><img src="' + url + '" /></a></div></body></html>');
						})
						.catch(function (error) {});
				}

				$("#choose-id").keydown(function(e) {
				   if (e.keyCode == 13) {
				     	doRender();
				   }
				});

				$('#RenderImgBtn').click(function() {
						doRender();
				});
			}
		});
	});
});
