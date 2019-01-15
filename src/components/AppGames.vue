<template>
    <v-container>
    <br>
    <v-jumbotron class="gameJumbo"
    :gradient="gradient"
    src="/static/doc-images/parallax/material2.jpg"
    dark
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Phaser Game</h3>
          <span class="subheading">Game built using only phaser!</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Give it shot! Collect some stars!</div>
          <v-btn large color="primary" class="mx-0">Launch</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
    <br>
      <v-jumbotron class="gameJumbo"
    :gradient="gradient"
    src="/static/doc-images/parallax/material2.jpg"
    dark
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">another Game</h3>
          <span class="subheading">Game built using other stuff</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Give it shot! break some skullz!</div>
          <v-btn large color="primary" class="mx-0">Launch</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
    <br>
      <v-jumbotron class="gameJumbo"
    :gradient="gradient"
    src="/static/doc-images/parallax/material2.jpg"
    dark
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">glitch horror game</h3>
          <span class="subheading">Not for the faint of heart, but still enjoyable</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">For some scary good fun</div>
          <v-btn large color="primary" class="mx-0">Launch</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
  })
}
</script>

<style>
.gameJumbo {
  margin: auto;
  margin-top: 7em;
  margin-bottom: 7em;
}

body, html {
  background-image: url('../assets/city.jpg');
  background-position: bottom;
  background-color: rgb(171,146,201);
  background-repeat: no-repeat;
}
</style>
