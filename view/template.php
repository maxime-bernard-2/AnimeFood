
<html>
    <head>
        <title>Anime Food</title>
        <link rel="stylesheet" href="public/style/style.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="public/js/logSignDeco.js"></script>
        <script src="public/js/main.js"></script>
    </head>
    <body>

        <header>
            <p id="titleHeader">AnimeFood</p>
            <div id="buttonsHeader">
                <p class="buttonHeader" id="log">LogIn</p>
                <p class="buttonHeader" id="sign">SignUp</p>
                <p class="buttonHeader" id="deco">LogOut</p>
            </div>
        </header>

        <div id="logSign">
            <h2>Connexion</h2>
            <p id="message"></p>
            <form id="logForm" method="POST" action="model/login.php">
                <input type="text" name="username" placeholder="Pseudo">
                <input type="password" name="password" placeholder="Password">
                <input type="submit" content="Submit">
            </form>
        </div>

        <div id="content">
            <?php echo $content ?>
        </div>

    </body>
</html>