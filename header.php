<!-- menu responsive -->
<div id="menu-responsive" style="display:none;">
  <nav role="navigation">
    <a href="javascript:void(0)" class="btnfermer" onclick="closeNav()">&times;</a>
    <!-- icône AN -->
    <div class="logo-AN"><img src="img/mini-an.png" width="180px" height="180px" margin-bottom="30px" /></div>
    <ul class="menu-vertical">
      <li><a href="index.php#section1">Le Projet</a></li>
      <li><a href="accrocraft.php">Fonctionnement du serveur</a></li>
      <li><a href="communaute.php">Vie de la communauté</a></li>
      <li><a href="merveilles.php">Les beautés d'Ʌ</a></li>
      <div class="menu-sep"></div>
      <li><a href="index.php#section2">Nous rejoindre</a></li>
      <li><a href="index.php#section3">Bien débuter</a></li>
      <div class="menu-sep"></div>
      <li><a href="https://accrocraft.fandom.com/fr" target="_blank">Wiki communautaire</a></li>
      <li><a href="https://www.accropolis.fr" target="_blank">Accropolis</a> - <a href="https://www.twitch.tv/jeanmassietaccropolis" target="_blank">Jean Massiet</a></li>
    </ul>
  </nav>
</div>
<!-- menu overlay -->
<div id="m-overlay" class="m-overlay"></div>

<section id="menu" class="sticky-container" style="height: 202px;">
  <style scoped>@media screen and (min-width: 1001px) {
    #menu {
      height: 202px;
    }
  }
  @media (max-width: 1000px) {
    #menu {
      height: 96px;
    }
  }
  </style>
  <!-- header responsive -->
  <div id="" class="header-responsive">
    <!-- bouton menu hamburger  -->
    <div><i class="fas fa-bars fa-2x" style="cursor:pointer;" onclick="openNav()"></i></div>
    <!-- icone accrocraft  -->
    <div><a href="index.php"><img class="" src="img/logo-mobile.png" width="50px" height="50px" /></a></div>
    <!-- -->
    <div width="1px"></div>
  </div>
  <header id="header" class="sticky top-anchor" style="max-width: 2543px; margin-top: 0px; bottom: auto; top: 0px;">
    <div id="topbar" class="top-bar">
      <div class="top-bar-left lien">
        <nav>
          <ul class="main-menu menu">
            <li><a href="index.php#section1" class="a-lien ancre">Le projet</a>
              <ul class="item-0">
                <li><a href="accrocraft.php">La politique</a></li>
                <li><a href="communaute.php">La communauté</a></li>
                <li><a href="merveilles.php">Les merveilles</a></li>
              </ul>
            </li>
            <li><a href="index.php#section2" class="a-lien ancre">Nous rejoindre</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-logo"><a href="index.php"><img src="img/texte-vert2.png" /></a></div>
      <div class="top-bar-right lien">
        <nav>
          <ul class="main-menu menu">
            <li>
               <a href="#" class="a-lien">Ressources</a>
              <ul class="item-0">
                <li><a href="https://accrocraft.fandom.com/fr"><i class="fas fa-link"></i> Le Wiki</a></li>
                <li><a href="https://accrocraft.fandom.com/fr/wiki/Constitution" target="_blank"><i class="fas fa-university"></i> Constitution</a></li>
                <li><a href="https://docs.google.com/document/d/1EsbA9vePzJam_XM0VD0K1fMvSGsmyOf8uhSBVRKGjo0/edit#heading=h.gb5zo9q2ehnz" target="_blank"><i class="fas fa-archive"></i> Archives</a></li>
              </ul>
            </li>
            <li><a href="https://www.accropolis.fr"  target="_blank" class="a-lien">Accropolis</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</section>
