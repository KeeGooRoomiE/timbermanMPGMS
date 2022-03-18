/// @description Draw tree

// Draw tree origin
draw_self();

//verify cell height
var cellY=24;



#region --draw tree cells from origin to upper side
for (i=0; i<arrL; i++)
{
	draw_sprite( treeBrSpr, treebrarr[i], x, y-(cellY/2)-(cellY*i) );
	draw_sprite( treeCellSpr, treecellarr[i], x-1, y-(cellY/2)-(cellY*i) );
	//draw_text( x-1,y-(cellY/2)-(cellY*i),"I: "+string(treearr[i]) );
}
#endregion

//draw_sprite_ext( playerSpr, playerFrame, playerXpos, y-6, playerXscale, 1, 0, c_white, 1 );
