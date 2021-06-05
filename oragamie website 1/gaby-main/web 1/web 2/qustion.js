This is how I created the main page for this website:

1.) How did you create the title and the other web links for "About Us", "Follow Us", and the "Questios You May Have On How I Coded This"?
The code below will show you how I did the web links.

<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Origami Designs</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<div class="header">
    <div class="menu">
        <div ><a href ="#">☰</a></div>
        <div >Origami Designs</div>
        <div ><a href ="followus.html">Follow Us</a></div>
        <div ><a href ="about.html">About Us</a></div>
        <div ><a href ="qustion.js">Questios You May Have</a></div>
    </div>

 2.) How did you add the main text to the main page?   
 The code below will show you how I added the text.

</div>
<div class ="bodyimg">
    <img src="main2.jpg" height="600px" width="100%">
    <p>
      Origami Instructions and Diagrams  
    </p>
    <h3><br>
    Step by Step diagrams are probably the most popular and easiest to follow way to show how to fold things out of paper. 
    Trying to find good origami instructions on the Internet can be a lot of work though. To help your search we’ve put
    together the largest database of free origami diagrams anywhere on the Internet.
    </h3>
</div>

3.) How did you add the pictures of the oragami pictuers and the facts under it on the page?
The code below will show you how I put in the pictures.

<div class ="grid">
    <div class ="origami">
        <center>
        <a href ="http://origami.me/camel/"><img src="camel.png" width="200px" height="200px"></a>
        <h3> Camel </h3>
        </center>
        <p>
            <ol>
                <li>Camel's ears are furry</li>
                <li>Camel can move easily across the sand because of its specially designed feet</li>
                <li>When they find water, they will drink as much as possible.</li>
            </ol>
        </p>
        </div>
    <div class="origami">
        <center>
        <a href="http://origami.me/chameleon/"><img src="chameleon.png" width="200px" height="200px"></a>
        <h3> Chameleons </h3>
        </center>
        <p> 
            <ul>
                <li>Chameleons are reptiles that are part of the iguana suborder</li>
                <li>Changing skin color is an important part of communication among chameleons</li>
                <li>Most chameleons have a prehensile tail that they use to wrap around tree branches</li>
            </ul>
        </p>
        </div>
    <div class="origami">
        <center>
        <a href="http://origami.me/pigeon/"><img src="pigeon.png" width="200px" height="200px"></a>
        <h3> Pigeons </h3>
        </center>
        <p>
        <ol>
            <li>Pigeons are incredibly complex and intelligent animals</li>
            <li>Pigeons are renowned for their outstanding navigational abilities</li>
            <li>Pigeons have excellent hearing abilities.</li>
        </ol>
        </p>
        </div>
    <div class="origami">
        <center>
        <a href="http://origami.me/teddy-bear/"><img src="teddy.png" width="200px" height="200px"></a>
        <h3> Teddy Bear </h3>
        </center>
        <p>
        <ul>
            <li>The Teddy Bears’ Picnic song was originally called The Teddy Bear Two Step</li>
            <li>Winnie the Pooh was based on a real bear</li>
            
        </ul>
        </p>
        </div>

    
    <div class="origami">
        <center>
            <a href="http://origami.me/panda/"><img src="panda.png" width="200px" height="200px"></a>
            <h3> Panda </h3>
        </center>
        <p>
        <ol>
            <li>Giant pandas are good at climbing trees and can also swim</li>
            <li>Pandas go from pink to white and black (or brown)</li>
            <li>Pandas are "lazy" — eating and sleeping make their day</li>
        </ol>
        </p>
    </div>
    <div class="origami">
        <center>
            <a href ="http://origami.me/traditional-frog/"><img src="frog.png" width="200px" height="200px"></a>
            <h3> Frog </h3>
        </center>
        <p>
        <ul>
            <li>One gram of the toxin produced by the skin of the golden poison dart frog could kill 100,000 people.</li>
            <li>There is a frog in Indonesia that has no lungs – it breathes entirely through its skin.</li>
    
        </ul>
        </p>
    </div>
    <div class="origami">
        <center>
            <a href="http://origami.me/flying-cicada/"><img src="cicada.png" width="200px" height="200px"></a>
            <h3> Cicada </h3>
        </center>
        <p>
        <ul>
            <li>All cicada species in North America came from a common ancestor</li>
            <li>cicada species switches from being on a 13-year cycle to a 17-year cycle</li>
        </ul>
        </p>
    </div>
    <div class="origami">
        <center>
           <a href="http://origami.me/puppy/"><img src="dog.png" width="200px" height="200px"></a>
            <h3> Dogs </h3>
        </center>
        <p>
        <ol>
            <li>Dogs noses are wet to help absorb scent chemicals</li>
            <li>The Beatles song ‘A Day in the Life’ has a frequency only dogs can hear</li>
            <li>A blind man and his guide dog hiked the Appalachian Trail</li>
        </ol>
        </p>
    </div>
    

</div>
</body>
</html>



This is how I created the About Us page for this website:

1.) How did you add the background color and any type of color to the "About Us" page?
The code below will show you how I did it.

<!DOCTYPE html>
<html>
    <head>
        <title>
            About Us
        </title>
        <style>
            h1{
                color: rgb(255, 0, 149);
                border:10px solid rgb(176, 157, 197);
                background-color:rgba(30, 164, 182, 0.356);
            }
            body{
                background-color: rgba(30, 164, 182, 0.356);
            }
            p{
                color:  rgb(238, 2, 199);
            }
            li{
                color:  rgb(122, 81, 160);
            }
        </style>
    </head>
    <body>
        <h1>
            <center>
                About Us
            </center>
        </h1>
        <p>
            Hi my name is Gabriela, this is my first website that I have ever made, I am in 7th grade and I am 13 years old.
            <br>
            On this page I will tell you what this website is about and how you can find links and different things and learn how to do cool oragmi animals.
            <br>
            This specific websiste shows you how to make different oragami animals and on the main part of the websiste it also has fact on that particular animal.
            <br>
            <ul>
                <li>Step 1.) When you are on the website you will see a picture of a oragami animal like the one bellow.</li>
                <a
            href="http://origami.me/camel/"></a><img src="camel.png"width="200px"height="200px">
                </a>
                <br>
                <li>Step 2.) Then when you see the animal you will click on it.</li>
                <br>
                <li>Step 3.) Once you have clicked on it the picture will take you to a new link/website</li>
                <br>
                <li>Step 4.) Then when you are on the link/website it will show you step by step how to make your oragami animal.</li>
            </ul>
            <p>
            <br>
            I hope that you injoy making your oragami animals there are more than just 1 on this websit there are 8 different ones and if you want to try oragami out try some of the animals on this websit and enjoy.
            <br>
            This is also fun for kids to try because it gives them fun fact on that animal and they get to create it out of paper so it would be a cool arts and crafts for them.
            <br>
            <a
            href="http://origami.me/camel/"></a><img src="camel.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/chameleon/"></a><img src="chameleon.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/pigeon/"></a><img src="pigeon.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/teddy-bear/"></a><img src="teddy.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/panda/"></a><img src="panda.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/frog/"></a><img src="frog.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/cicada/"></a><img src="cicada.png"width="200px"height="200px">
                </a>
                <a
            href="http://origami.me/dog/"></a><img src="dog.png"width="200px"height="200px">
                </a>
    </p>
    </body>
</html>



This is how I created the Follow Us page for this website:

<!DOCTYPE html>
<html>
    <head>
        <title>
            Follow Us
        </title>
        <style>
            h1{
                color:rgb(187, 18, 159);
                border:10px solid rgb(144, 95, 196);
                background-color:rgba(30, 164, 182, 0.356);
            }
            h2{
                font-size: x-large;
                color: rgb(187, 18, 159);
            }
            body{
                background-color: rgba(30, 164, 182, 0.356);
            }
            p{
                color:  rgb(187, 18, 159);
            }
            li{
                color: rgb(82, 2, 156);
            }
            img{
                border-radius: 90px;
            }
        </style>
        </head>
        <body>
            <h1>
            <center>
                Follw Us
            </center>
            </h1>
            <p>
                If you want to get notified for when there are anymore new oragmi designs you can folow us on "Facebook, Instagram, Twitter, and Snapchat".
                <br>
                For mor intel if you havent already gone on our "About Us" go there and it will tell you how to get to the specific oragami website for the animal you want to do.
                <br>
                What it will show and tell you to do when you are on the manin page step by step.
                <ul>
                <li>Step 1.) ounce you have finish reading these instructions then you will go back to the main webpage.</li>
                <li>Step 2.) When you are on the main page at the to left corner below the title it will say "About Us" when you see it click on it.</li>
                <li>Step 3.) Ounce you have clicked it, it will then take you to anoter webpage.</li>
                <li>Step 4.) On that webpage is instruction on what to do in the main webpage and it will give you some extra information if you need to know anything else.</li>
                    </ul>
                
            </p>
            <h2>
                <center>
            Instagram followers = 200k,There are many new oragami pictures and links to show you hawto make these oragami animals.
            </center>
            <a href ="https://www.instagram.com/"><img src="instagram.png" width="200px" height="200px"></a>
            Facebook followers = 20k,There are many new oragami pictures and links to show you hawto make these oragami animals.
            <br>
            <a href ="https://www.facebook.com/"><img src="facebook.png" width="200px" height="200px"></a>
            Snapchat followers = 2milion,There are many new oragami pictures and links to show you hawto make these oragami animals.
            <a href ="https://www.snapchat.com/"><img src="snapchat.jpg" width="200px" height="200px"></a>
            Twitter followers = 2k,There are many new oragami pictures and links to show you hawto make these oragami animals.
            <a href ="https://www.twitter.com/"><img src="twitter.png" width="200px" height="200px"></a>
            </h2>
        </body>
        </html>