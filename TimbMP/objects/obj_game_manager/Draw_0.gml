/// @description Insert description here
// You can write your code in this editor

#region -- Time setups
var minutes = floor(leftTime/60);
var seconds = leftTime % 60;

var time = string(minutes) + ":" + string(seconds);
#endregion

#region -- Camera setups
var cw = camera_get_view_width(view_camera[0]);
var ch = camera_get_view_height(view_camera[0]);
var cx = camera_get_view_x(view_camera[0]);
var cy = camera_get_view_y(view_camera[0]);
#endregion

#region -- Draw TIME counter
draw_set_font(fnt_main);
draw_set_halign(fa_center);
draw_set_valign(fa_middle);

//draw_text_ext_transformed_color(cx+cw/2,cy+24,time,24,128,1.1,1.1,0,c_black,c_black,c_black,c_black,1);
draw_sprite(spr_panel, 0, cx+cw/2, cy+18);
draw_text_ext_transformed_color(cx+cw/2, cy+24, time, 24, 128, 1, 1, 0, c_white, c_white, c_white, c_white, 1);
#endregion

if ( isPlayerReachedNest or isPlayerOneWins or isPlayerTwoWins or isTie )
{
	draw_sprite(spr_plank, 0, cx+cw/2, cy+80);
	
	if ( isPlayerReachedNest )
	{
		if (isPlayerOneWins)
		{
			draw_text_ext_transformed(cx+cw/2, cy+96,"PLAYER ONE WINS",14,64,1.2,1.2,0);
			draw_text(cx+cw/2, cy+128,"Score");
			draw_text(cw+cw/2, cy+136, string(global.curPlayerScore));
		}
		
		if (isPlayerTwoWins)
		{
			draw_text_ext_transformed(cx+cw/2, cy+96,"PLAYER TWO WINS",14,64,1.2,1.2,0);
			draw_text(cx+cw/2, cy+128,"Score");
			draw_text(cw+cw/2, cy+136, string(global.curPlayerScore));
		}
	} 
	else
	{
		if (isPlayerOneWins)
		{
			draw_text_ext_transformed(cx+cw/2, cy+96,"PLAYER ONE WINS",14,64,1.2,1.2,0);
			draw_text(cx+cw/2, cy+128,"Score");
			draw_text(cw+cw/2, cy+136, string(global.curPlayerScore));
		}
		
		if (isPlayerTwoWins)
		{
			draw_text_ext_transformed(cx+cw/2, cy+96,"PLAYER TWO WINS",14,64,1.2,1.2,0);
			draw_text(cx+cw/2, cy+128,"Score");
			draw_text(cw+cw/2, cy+136, string(global.curPlayerScore));
		}
	}
	
	if (isTie)
	{
			draw_text_ext_transformed(cx+cw/2, cy+96,"TIE",14,64,1.2,1.2,0);
			draw_text(cx+cw/2, cy+128,"Score");
			draw_text(cw+cw/2, cy+136, string(global.curPlayerScore));
	}
}