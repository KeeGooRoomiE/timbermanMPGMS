function gmcallback_sio_on_create_player_other()
{
	if !(room == rm04_end)
	{
		var data = json_decode(argument[0]);
		var dat_rmid = real(data[? "room_id"]);
		var dat_pl2id = real(data[? "user_id"]);
		var dat_plhp = real(data[? "hp"]);
		var dat_plsc = real(data[? "score"]);
		//var dat_tree = real(data[? "tree"]); // TODO GET OTHER TREE AFTER CERONNECT
		//show_message(string(dat_tree))
		if (global.room_id = dat_rmid)
		{	
			/*
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
			*/
			global.gcase2tree0 = 0;
			global.gcase2tree1 = 0;
			global.gcase2tree2 = 0;
			global.gcase2tree3 = 0;
			global.gcase2tree4 = 0;
			global.gcase2tree5 = 0;
			global.gcase2tree6 = 0;
			global.gcase2tree7 = 0;
			global.gcase2tree8 = 0;
			global.gcase2tree9 = 0;
			with(obj_other_tree){
				playerLives = real(dat_plhp);
				playerScore = real(dat_plsc);
				event_user(4);
				}
			//global.p2Skin = data; //0 1 2 3
			//global.playerTwoName = data;
		
			with(obj_game_manager) {
			//leftTime = 180; // TODO socketOM! //real(data[? "leftTime"]);
			global.start = 1;
			alarm[0]=1;
			}
		
			global.playerTwoName = dat_pl2id;
		}
	}
}
