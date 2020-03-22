
<html>
    <head>
        <title>Anime Food</title>
        <link rel="stylesheet" href="public/style/style.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
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
            <div id="logFormDiv">
                <h2>Connexion</h2>
                <p class="message"></p>
                <form class="form" method="POST" action="model/login.php">
                    <input type="text" name="username" placeholder="Pseudo">
                    <input type="password" name="password" placeholder="Password">
                    <input type="submit" content="Submit">
                </form>
            </div>
            <div id="signFormDiv">
                <h2>Inscription</h2>
                <p class="message"></p>
                <form class="form" method="GET" action="model/signUp.php">
                    <input type="text" name="username" placeholder="Pseudo">
                    <input type="email" name="email" placeholder="Email">
                    <input type="password" name="password" placeholder="Mot de passe">
                    <input type="password" name="rePassword" placeholder="Encore le mot de passe">
                    <input type="submit" content="Submit">
                </form>
            </div>

        </div>

        <div id="content">
            <?php echo $content ?>
        </div>

    </body>
</html>