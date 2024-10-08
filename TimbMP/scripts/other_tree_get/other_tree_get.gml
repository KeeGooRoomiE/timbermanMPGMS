// Ресурсы скриптов были изменены для версии 2.3.0, подробности см. по адресу
// https://help.yoyogames.com/hc/en-us/articles/360005277377
function other_tree_get(){
/// @description Init

casetree0 =  global.gcase2tree0;
casetree1 =  global.gcase2tree1;
casetree2 =  global.gcase2tree2;
casetree3 =  global.gcase2tree3;
casetree4 =  global.gcase2tree4;
casetree5 =  global.gcase2tree5;
casetree6 =  global.gcase2tree6;
casetree7 =  global.gcase2tree7;
casetree8 =  global.gcase2tree8;
casetree9 =  global.gcase2tree9;


// Starting vars
treearr[0] = 0;
treecellarr[0] = 0;
treebrarr[0] = 0;
arrL=0; 

treeCellImg = 0;
treeBrImg = 0;
sprite_index = global.treeOrigin;
treeCellSpr = global.treeCell;
treeBrSpr = global.treeBranch;

xsc = 0.80;

treeLength = 10;


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

for (i=0; i<treeLength; i++)
{
	/*
	treearr[i]=1;
	arrL++;
	*/
		switch (i)
	{
		case 0: treearr[i]=casetree0; arrL++ break;
		case 1: treearr[i]=casetree1; arrL++ break;
		case 2: treearr[i]=casetree2; arrL++ break;
		case 3: treearr[i]=casetree3; arrL++ break;
		case 4: treearr[i]=casetree4; arrL++ break;
		case 5: treearr[i]=casetree5; arrL++ break;
		case 6: treearr[i]=casetree6; arrL++ break;
		case 7: treearr[i]=casetree7; arrL++ break;
		case 8: treearr[i]=casetree8; arrL++ break;
		case 9: treearr[i]=casetree9; arrL++ break;
	}
}

//init tree cells for images
for (i=0; i<treeLength; i++)
{
	switch (treearr[i])
	{
		//case 0: treecellarr[i]=irandom_range(0,4); break;
		//case 1: treecellarr[i]=irandom_range(0,4); break;
		//case 2: treecellarr[i]=irandom_range(0,4); break;
		//case 3: treecellarr[i]=irandom_range(0,4); break;
		//case 4: treecellarr[i]=irandom_range(0,4); break;
		//case 5: treecellarr[i]=5; break;
		//case 6: treecellarr[i]=5; break;
		//case 7: treecellarr[i]=5; break;
		//case 8: treecellarr[i]=5; break;
		//case 9: treecellarr[i]=5; break;
		case 0: treecellarr[i] = choose(0,4);; break;
		case 1: treecellarr[i] = choose(0,4); break;
		case 2: treecellarr[i] = choose(0,4); break;
		case 3: treecellarr[i] = 5; break;
		case 4: treecellarr[i] = 5; break;
		default: treebrarr[i] = choose(0,4); break;
	}
	
	
	//treecellarr[i]=irandom_range(0,4);
}

//init tree branches images
for (i=0; i<treeLength; i++)
{
	
			switch (treearr[i])
		{
			case 0: treebrarr[i] = 2; break;
			case 1: treebrarr[i] = choose(0,1); break;
			case 2: treebrarr[i] = choose(3,4); break;
			case 3: treebrarr[i] = 5; break;
			case 4: treebrarr[i] = 6; break;
			default: treebrarr[i] = 2; break;
		}
	
	//treecellarr[i]=irandom_range(0,4);
	//treebrarr[i]=2;
}

#endregion



}