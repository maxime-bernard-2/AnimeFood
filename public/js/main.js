(function () {

    "use strict";
    $(() => {

        console.warn("Script main actif !");

        // Check if the user is already connected
        checkUserConnection('initPage');

        initCases();

    });
}) ();