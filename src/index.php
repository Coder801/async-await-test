<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="<?= $app->getStaticUrl('../style.css'); ?>"/>
    <link rel="stylesheet" href="<?= $app->getStaticUrl('../style.min.css'); ?>"/>
    <link rel="stylesheet" href="../style.css"/>                                        <!-- fail -->
    <script src="<?= $app->getStaticUrl('../script.js'); ?>" charset="utf-8"></script>
    <script src="../script.js" charset="utf-8"></script>                                <!-- fail -->
</head>
<body>
  <main>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="../img.jpg" alt=""> <!-- fail -->
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="<?= $app->getStaticUrl('../img.jpg'); ?>" alt="">  <!-- fail -->
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </main>
</body>
</html>