/// @description Draw sequence

// Draw tree origin
draw_self();

//verify cell height
var cellY=24 * xsc;



#region --draw tree cells from origin to upper side

for (i=0; i<arrL; i++)
{
	draw_sprite_ext( treeBrSpr, treebrarr[i], x, y-(cellY/2)-(cellY*i), xsc, xsc, 0, c_white, 1 );
	draw_sprite_ext( treeCellSpr, treecellarr[i], x-1, y-(cellY/2)-(cellY*i), xsc, xsc, 0, c_white, 1 );
	//draw_text( x-1,y-(cellY/2)-(cellY*i),"I: "+string(treearr[i]) );
}

#endregion

//draw_sprite_ext( playerSpr, playerFrame, playerXpos, y-6, playerXscale, 1, 0, c_white, 1 );

#region -- Draw player nickname
draw_set_font(fnt_main);
draw_set_halign(fa_center);
draw_set_valign(fa_middle);
draw_text_ext_transformed_color(x,y+36,string(global.playerTwoName),24,108,xsc,xsc,0,c_white,c_white,c_white,c_white,1);
#endregion

#region -- Draw player lives
for (i=0; i<playerLives; i++)
{
	draw_sprite_ext(spr_heart,0,x+(cellY * 2),y-148+12*i,xsc,xsc,0,c_white,1);
}
#endregion

#region -- Draw player score
draw_text_ext_transformed_color(x,y-72,string(playerScore),24,108,xsc,xsc,0,c_white,c_white,c_white,c_white,1);
#endregion
