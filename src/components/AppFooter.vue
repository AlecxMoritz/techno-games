<template>
  <v-footer style="width: 100%;" height="auto" class="grey darken-3 pageFooter">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Alecx Moritz</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [ 'Home', 'Games', 'Sick Picks', 'Current Projects', 'Announcments' ]
  })
}
</script>
