<template>
  <div id="app" >
    
    <div class="qrcode"> 
      <img v-show="logado" src="./assets/qrcode.png" alt="qrcode" class="qrcode-img"> <!-- image to read qrcode -->
    </div>
    
     <nav class="nagation">  <!-- Site Navbar -->
      <div class="nav-wrapper orange darken-1">
        <div class="container">
         
          <!-- Logo Start -->
          <a href="index.html"> <img   src="./assets/logo-deezer.png" alt="" class="logo"></a>
          <a href="index.html" class="brand-logo center"></a>
          <!-- Logo End -->

          <!-- <a href="#" data-target="mobile-demo" class="sidenav-trigger left"><i class="material-icons">menu</i></a> -->
         
          <!-- Navigation Start  -->
          <ul class="hide-on-med-and-down right" >
             <div class="div-nav">
                <li><a href="index.html"><i class="material-icons right home-navi" id="clear-desktop"></i>HOME</a></li>
                <li><a href="index.html"><i class="material-icons right clear-navi" id="clear-desktop"></i>CLEAR</a></li>
                <li><a href="https://www.deezer.com/br/login" target="__blank"><i class="material-icons right login-navi" id="letra"></i>LOG IN</a></li>
                <li><a href="https://www.deezer.com/br/register" target="__blank"><i class="material-icons right navi" id="letra"></i>SING UP</a></li>         
                <li class="qrimg"> <a @click="logado = !logado" class="waves-teal btn-flat white-text " title="Leia o QR Code para ver o site no celular">{{ logado ? 'Close QR Code' : 'Open QR Code'}}</a> </li>
            </div>

             <ul>
                <router-link to="/relatorio" class="relatorio right ">
                 <li><a ><i class="material-icons right relatorio-desktop" id="letra"></i>REPORT</a></li> 
                </router-link>  <!-- Transition to report tab -->
             </ul>
          </ul>
          <!-- Navigation End  -->              
        </div>
      </div>
    </nav>
      
    <router-view />
  </div>
</template>

<script>
export default {
    data(){
      return { 
        logado: false // if logado === true the image opens. if it is not closed.
      }
}}
</script>


<style> 

#app { background: rgb(241, 241, 241); } 

.container { padding: 510px; } /* Style all navbar */ 

.logo { /* Style logo - navbar */ 
  margin-top: -25px;
  margin-left: 14px;
  max-width: 150px;
  max-height: 150px;
  }

.qrcode { /* Style qrcode */ 
  position: absolute;
  left: 50%; 
  margin-left: -120px; 
  top: 50%; 
  margin-top: -75px;
}

.qrcode-img { /* Style qrcode */ 
  max-width: 350px;
  max-height: 350px;
}

.ouvir-musica { /* Style the position of button */ 
  margin-left: -65px;
  margin-top: 7px;
}

.relatorio { /* Style report */ 
  display: inline;
  margin: -63px 0 0 0  ;
}

.div-nav { /* Main navigation class */ 
  margin-right: 120px ;
  margin-top: -10px;
}

.navi {  /* Style Sing Up */ 
  padding-left: 200px 0;
  margin-right: -330px;
}

</style>


