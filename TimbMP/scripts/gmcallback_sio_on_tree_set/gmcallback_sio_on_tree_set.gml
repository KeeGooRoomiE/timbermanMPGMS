/// @return ping in ms
function gmcallback_sio_on_tree_set(argument0) {	
	
	if !(room == rm04_end)
	{
		var data = json_decode(argument[0]);
		var dat_rmid = real(data[? "room_id"]);
		
		show_debug_message(dat_treearr)
		
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
			var tarr10 = string(data[? "treearr10"]);
			
		if (global.room_id = dat_rmid)
		{
			global.gcase2tree0 = string(tarr0);
			global.gcase2tree1 = string(tarr1);
			global.gcase2tree2 = string(tarr2);
			global.gcase2tree3 = string(tarr3);
			global.gcase2tree4 = string(tarr4);
			global.gcase2tree5 = string(tarr5);
			global.gcase2tree6 = string(tarr6);
			global.gcase2tree7 = string(tarr7);
			global.gcase2tree8 = string(tarr8);
			global.gcase2tree9 = string(tarr9);
			global.gcase2tree10 = string(tarr10);
			with(obj_other_tree){
				event_user(4);
				}
			}
			
		}
	}

