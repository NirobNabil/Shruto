//issues
//1 - add button refreshes the whole html. fix this so that when new field is added last field's data remains intact
//2 - unchecking any frame automatically unchecks other frames- find a better way to do the unchecking or handle corner case

//improvements
//1 - use some animation on the skills sector
//2 - find a way to implement jquery element.next() using pure JS (for improving load time)
//3 - use AJAX to show errors when user is typing
//4 - get some background images and icons for a better design



function getChild(parent, className){
	let childs = parent.childNodes;
	for(i=0; i<childs.length; i++){
			let child = parent.childNodes[i];
			if(child.className == className){
				return child;
			}
	}
}


//working with the add field button
window.onload = function(){
	var form = document.getElementsByClassName('vol_form')[0]
	var links = document.getElementsByClassName('links')[0]
	var add_butt = document.getElementsByClassName('add_field')[0]
	var inputs = document.getElementsByClassName('all_input')[0]
	var butt_container = document.getElementsByClassName('add_butt_container')[0];
	var field_name = getChild(butt_container, "butt_name")

	add_butt.onclick = function(event){
		var grandParent = add_butt.parentElement.parentElement;
		var parent = add_butt.parentElement;
		
		var field_name = getChild(parent, "butt_name").value;
		if(field_name = " "){
			field_name = "Link:";
		}
		var child = getChild(grandParent, "all_inputs");
		//alert(child.innerHTML);
		
		let inputName = "";
		switch(grandParent.id){
			case 'social_links':
				inputName = "social_links[]";
				break;
			case 'dev_links':
				inputName = "dev_links[]";
				break;
			case 'site_links':
				inputName = "site_links[]";
				break;
		}
		
		let htmlToAdd = `
				<div class="input_container">
                	<label>`+field_name+`</label>	<input type="text" name="`+inputName+`">
            	</div><br>`
		child.innerHTML += htmlToAdd;

		
	}
	
	

	
	
	$(function(){
		
		//styling skills
		//var python = document.getElementsByClassName('python')[0];
		var inputs = document.querySelectorAll('.skills input');
		for(var i = 0; i < inputs.length; i++) {
			let input = inputs[i];
			if(input.type.toLowerCase() == 'checkbox') {
				input.addEventListener('change', check);
				//alert(inputs[i].value);
			}
		}
		
		function getClass(className){
			let actualClass = "";
			for(i=0; i<className.length; i++){
				if(className[i] == " "){
					break;
				}
				actualClass += className[i];
			}
			return actualClass;
		}
		
		function check(elem){
			elem = elem.target;
			let elemClass = getClass(elem.className);
			//console.log(elemClass);
			//console.log($("."+elemClass).next().next());
			if(elem.checked){
				$("."+elemClass).next().next().addClass('show');
				$("."+elemClass).next().next().removeClass('hide');	
			}else if(!elem.checked){
				//console.log(elem.parentNode.className);
				//console.log($("."+getClass(elem.parentNode.className)+" input"));
				//console.log($(".skills_container input"));
				$("."+getClass(elem.parentNode.className)+" input").each(function(){
					//console.log($(this));
					if($(this).prop('tagName') == 'INPUT'){
						$(this).prop('checked', false);
					}
				})
				$("."+elemClass).next().next().removeClass('show');
				$("."+elemClass).next().next().addClass('hide');
			}
		}
		
	
	})
	
}






































