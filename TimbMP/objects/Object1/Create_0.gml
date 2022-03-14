/// @description Init tree 
// Starting vars
treearr[0]=0;
timearr[0]=0;
arrL=0;
//0 - neutral
//1 - left
//2 - right
for (i=0; i<10; i++)
{
	treearr[i]=0;
	arrL++;
}
for (i=0; i<10; i++)
{
	timearr[i]=0;

}

show_debug_message("ArrL = "+string(arrL));