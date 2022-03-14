/// @description Init

// Starting vars
treearr[0]=0;
treecellarr[0]=0;
arrL=0;

//====================================
//TREE CELLS
//
//0 - neutral
//1 - left
//2 - right
//3 - nest (win trigger in other mode)
//4 - empty (all after nest)
//
//====================================

#region -- init tree array
for (i=0; i<10; i++)
{
	treearr[i]=0;
	arrL++;
}

//init tree cells for images
for (i=0; i<10; i++)
{
	treecellarr[i]=0;
}
#endregion


#region -- init player vars
isPlayerLive = true;		//trigger for changing sprite
canChomp = true;			//trigger for action availability
isChompingLeft = false;		//trigger for left movement
isChompingRight = false;	//trigger for right movement
playerXpos = x-32;			//player X position vlaue
playerSpr = spr_player;		//player current sprite
playerChPos = false;		//player changed position?(for animation)

leftTrigger = false;
rightTrigger = false;
#endregion

//