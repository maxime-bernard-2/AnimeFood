
<html>
    <head>
        <title>Anime Food</title>
        <link rel="stylesheet" href="public/style/style.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    </head>
    <body>

        <header>
            <p id="titleHeader">AnimeFood</p>
            <div id="buttonsHeader">
                <p class="buttonHeader" id="log">LogIn</p>
                <p class="buttonHeader" id="sign">SignUp</p>
            </div>
        </header>

        <div id="content">
            <?php echo $content ?>
        </div>

        <div id="logSign">
            <h2>Connexion</h2>
            <form method="post" action="#">
                <input type="text" placeholder="Pseudo">
                <input type="password" placeholder="Password">
                <input type="submit" content="Submit">
            </form>
        </div>

        <script src="public/js/logSign.js"></script>
    </body>
</html>