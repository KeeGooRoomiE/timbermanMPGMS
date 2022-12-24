/// @return ping in ms
function gmcallback_sio_on_go_room(argument0) {
	
		var data = json_decode(argument[0]);
		var dat_rmid = string(data[? "room_id"]);

		var tarr0 = string(data[? "treearr0"]);
		var tarr1 = string(data[? "treearr1"]);
		var tarr2 = string(data[? "treearr2"]);
		var tarr3 = string(data[? "treearr3"]);
		var tarr4 = string(data[? "treearr4"]);
		var tarr5 = string(data[? "treearr5"]);
		var tarr6 = string(data[? "treearr6"]);
		var tarr7 = string(data[? "treearr7"]);
		var tarr8 = string(data[? "treearr8"]);
		var tarr9 = string(data[? "treearr9"]);

		global.gcasetree0 = string(tarr0);
		global.gcasetree1 = string(tarr1);
		global.gcasetree2 = string(tarr2);
		global.gcasetree3 = string(tarr3);
		global.gcasetree4 = string(tarr4);
		global.gcasetree5 = string(tarr5);
		global.gcasetree6 = string(tarr6);
		global.gcasetree7 = string(tarr7);
		global.gcasetree8 = string(tarr8);
		global.gcasetree9 = string(tarr9);
}
