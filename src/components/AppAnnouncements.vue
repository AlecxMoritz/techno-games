<template>
    <v-container>
        <div>
            <h1 style="color: black;">Accouncements</h1>
        </div>
        <div>
        <v-layout row wrap>

           <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text announcementCard">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>let Phaser = 'sick'; </h3>
                    </div>
              </v-card-title>
                    <div class="date" style="float: right;">
                        <h3>MAY 28</h3>
                        </div>
                <div style="text-align: left">
                    <p>Phaser was one of those frameworks I wanted to mess with so badly while I was in my cohort, but we were already learning things so quickly, that there was never any time to pick it up! However, I'm on vacation from school for the next week, and my 'courseload' will be much lighter when I get back, so it's the perfect time for Phaser!<br>
                    I expect to be covering many little tutorials on my way through, and I'll post my favorites here! Set Phasers to stun folks, I'm goin' in.<br>
                    > techno_games</p>
                </div>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>

                   <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text announcementCard">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>LearnVue = () =>  </h3>
                    </div>
              </v-card-title>
                    <div class="date" style="float: right;">
                        <h3>MAY 28</h3>
                        </div>
                <div style="text-align: left">
                    <p>This annoucement isn't really game development related, but bear with me!<br>
                    So I'm back at it again with the frameworks. This time experimenting with VueJS and VuetifyJS to create this site, and I'd say it turned out pretty sharp. This page will be serving as a game development hub for me, Alecx Moritz, and as I'll be referring to myself here techno_games. I'll be keeping this site up to date with any frameworks, languages, or editors I dabble in, and any projects I undertake or complete. More news soon! :)<br>
                    > techno_games</p>
                </div>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>

        </div>
    </v-container>
</template>

<style>

.announcementCard {
    padding: 1em;
    margin: 2em;
    opacity: .8;
}

body, html {
  background-image: url('../assets/city.jpg');
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
   /* background-repeat: no-repeat; */
}
</style>
