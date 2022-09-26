Create a flexible grid with 1 row and 4 columns. The
width of each column is 25% of the window size. This
percentage width must be maintained even if the page
is resized. Each cell of the grid can contain another 1x4
flexible grid. The border of the grid must be 1px black.

<img width="899" alt="Screen Shot 2022-09-26 at 4 02 45 PM" src="https://user-images.githubusercontent.com/29736301/192312969-18507604-b2ff-459c-b665-afdf3b6d6f54.png">

<hr>

If the window size is less than 720px, then the 1x4
flexible grid becomes a 2x2 grid. That is, the 3rd and
4th columns slide down onto the 2nd row.

<img width="692" alt="Screen Shot 2022-09-26 at 4 03 39 PM" src="https://user-images.githubusercontent.com/29736301/192312995-8a05c8a5-d511-44d3-a20d-6f479163fc9d.png">

<hr>

If the window size is less than 360px, then the 1x4
flexible grid becomes 4x1 grid. Each column slides
under the one before it. The 2nd column slides under
the 1st, the 3rd slides under the 2nd, and the 4th
slides under the 3rd.

<img width="338" alt="Screen Shot 2022-09-26 at 4 04 16 PM" src="https://user-images.githubusercontent.com/29736301/192313007-7c5e556a-bef8-414f-a5db-c2fb5e6a6c80.png">



