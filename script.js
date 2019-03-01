function start(){
		
		document.forms[0].ime.addEventListener("keyup", function(){validate('ime')});
		document.forms[0].prezime.addEventListener("keyup", function(){validate('prezime')});
		document.forms[0].email.addEventListener("keyup", function(){validate('email')});
		document.forms[0].jmbg.addEventListener("keyup", function(){validate('jmbg')});
		document.forms[0].onsubmit = function(){
			if(validate('ime') && validate('prezime') && validate('email') && validate('jmbg')){
				alert("Forma je prosledjena!");
				return true;
			}else{
				alert("Proverite sve podatke!");
				return false;
			}
		};
		
		function validate(f){
			var val = document.forms[0][f].value;
			switch (f){
				case 'ime':
				case 'prezime':
					var RegExp = /^[a-zA-Z]+$/;
					var msg = "Mozete uneti samo slova!";
				break;
				case 'email':
					var RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					var msg = "E-mail adresa je pogresnog formata!";
				break;
				case 'jmbg':
					var RegExp = /^[0-9]{12,13}$/;
					var msg = "JMBG je pogresnog formata!";
				break;
			}
			if (!(RegExp.test(val))){
				document.getElementById(f+'_p').innerHTML = "<span style='color:red'>" + msg + '</span>';
				return false;
			}else{
				document.getElementById(f+'_p').innerHTML = "<span style='color:green'>OK</span>";
				return true;
			}
		}
		
}