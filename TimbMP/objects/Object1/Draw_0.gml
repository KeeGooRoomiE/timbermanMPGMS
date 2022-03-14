/// @description Draw tree

// Draw tree origin
draw_self();

//verify cell height
var cellY=24;

//draw tree cells from origin to upper side
for (i=0; i<arrL; i++)
{
	draw_sprite( spr_tt, treearr[i], x-1, y-(cellY/2)-(cellY*i) );
}

//draw player
draw_sprite(playerSpr,0,playerXpos,y-6);