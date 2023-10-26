 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>insertAdjacentHTML() Demo</title>
 </head>
 <body>
     <ul>
         <li>CSS</li>
     </ul>

     <script>
        let list = document.querySelector('ul');
        list.insertAdjacentHTML('beforebegin','<h1>Best Football Players</h2>');
        list.insertAdjacentHTML('afterbegin','<li>Messi</li>');
        list.insertAdjacentHTML('beforeend','<li>Neymar</li>');
        list.insertAdjacentHTML('afterend','<p>These are the best players</p>');
     </script>
 </body>
 </html>
