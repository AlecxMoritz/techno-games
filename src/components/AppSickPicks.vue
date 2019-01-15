<template>
    <v-container>
        <div>
            <h1 style="color: black;">The coolest stuff on the internet</h1>
            <p style="color: black;"><strong>this</strong> is your new ish</p>
        </div>

        <div>
            <v-layout row wrap>

                <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text sickPick">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>Phaser</h3>
                    </div>
              </v-card-title>
                <div class="">
                    <p>Okay this is some awesome stuff. Phaser is a very very fun html5 framework for creating games! You can directly download Phaser.js into your project folder then be up an running in minutes. So far I've only tested out some basic how's on basic game functions, but it seem clear to use as a beginner.<br>
                    <a href="https://github.com/photonstorm/phaser/blob/master/dist/phaser.js" target="blank">phaser.js download</a><br>
                    <a href="https://phaser.io/" target="blank">phaser site</a></p>
                </div>
              <v-card-actions>
                <v-btn flat dark>check it out</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

                          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text sickPick">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>itch.io</h3>
                    </div>
              </v-card-title>
                <div class="">
                    <p>Cannot speak highly enough of itch.io. This has got to be my favorite asset site, and they even have their own application for playing indie games and lauching downloaded software! itch.io has a prime selection of asset packs, tools for game dev, and of course, games. It's got 2d assets, and 3d assets, text editors, mp3s, sound bites AND MORE. Most downloads are pick your price, but also allow for free downloads, while there are also some high quliaty paid downloads. They've got everything there to make a game of any genre you like, or any style you like. If you don't already have an accont, I highly recommend making one, even if just to browse and save thnigs you like to your collection.<br>
                    <a href="https://itch.io/" target="blank">itch.io</a></p>
                </div>
              <v-card-actions>
                <v-btn flat dark>check it out</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

                          <!-- <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text sickPick">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>really awesome framework</h3>
                    </div>
              </v-card-title>
                <div class="">
                    <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                </div>
              <v-card-actions>
                <v-btn flat dark>check it out</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex> -->

            </v-layout>
        </div>
      <br>
      <br>
      <br>
      <br>

      </v-container>
</template>

<style>
html, body {
    height: 100%;
    color: black;
}

.sickPick {
    padding: 1em;
    margin: 2em;
    opacity: .8;
}

body, html {
  background-image: url('../assets/city.jpg');
  background-position: bottom;
  background-attachment: fixed;
  background-color: rgb(171,146,201);
  background-repeat: no-repeat;
}

</style>
