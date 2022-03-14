/// @description [DEBUG] Tree progression
// You can write your code in this editor

var p=instance_create_depth(x-1,y-12,depth-1,Object2);
p.sprite_index=spr_tt;
p.image_speed=0;
p.image_index=treearr[0];

var nextcell=choose(0,1,2);
show_debug_message("Next cell is"+string(nextcell));

for (i=0; i<arrL; i++)
{
	show_debug_message("Checking whole tree array...")
	if (i=9)
	{
		treearr[i]=nextcell;
		show_debug_message("Last cell changed to nextcell");
	}
	else
	{
	treearr[i]=treearr[i+1];
	}
}

