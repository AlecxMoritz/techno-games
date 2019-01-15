<template>
  <v-toolbar color="black" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <div class="hidden-sm-and-down">
      <router-link to="/">
      <v-btn flat>Home</v-btn>
      </router-link>

      <router-link to="/games">
      <v-btn flat>Games</v-btn>
      </router-link>

      <router-link to="/sickpicks">
      <v-btn flat>Sick Picks</v-btn>
      </router-link>

      <router-link to="/currentprojects">
      <v-btn flat>Current Projects</v-btn>
      </router-link>

      <router-link to="/announcements">
      <v-btn flat>Anncouncments</v-btn>
      </router-link>

    </div>
    <v-spacer></v-spacer>
    <v-toolbar-title class="purple--text">techno_games</v-toolbar-title>
  </v-toolbar>
</template>
