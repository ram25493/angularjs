#include<stdio.h>
#include<conio.h>
void main()
{
   int j,i;
   clrscr();
   printf("Multiplication table from 1 to 15 \n\n");
  for(i=1;i<=10;i++)
   {
     for(j=1;j<=15;j++)

     printf("%d * %d = %d \n", i, j, i*j);
   }
   getch();
}
 