<template>
    <v-container>
        <h1 style="color: black;">Current Projects</h1>
    <v-layout row wrap>

    <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text currentProjectHeader">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>no sleep</h3>
                    </div>
              </v-card-title>
                <div style="text-align: left">
                    <p>No but really though. With so many possibilities, and so many frameworks, there's always a new idea being jotted down, or sample scripts being written, characters being designed, or new mechanics being imagined.
            </p>
                </div>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>

         <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text currentProjectCard">
              <v-card-title primary-title>
                <div class="headline">
                    <h3>Phaserland</h3>
                    </div>
              </v-card-title>
                <div style="text-align: left">
                    <p>Right now I am on a deep deep dive into Phaser. I'll be doing tutorials, building small games to get more and more acquainted, and releasing my favorite resources up here! You'll find completed original games on the games page once they exist!
            </p>
                </div>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-layout>
    </v-container>
</template>

<style>

.currentProjectHeader {
    padding: 1em;
    margin: 2em;
    opacity: .8;
}

.currentProjectCard {
    padding: 1em;
    margin: 2em;
    opacity: .8;
}
</style>
