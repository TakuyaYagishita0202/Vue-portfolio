<template>
  <v-row class="mx-4">
    <v-col class="pa-2">
      <span class="font-weight-bold">{{ skill }}</span>
    </v-col>
    <v-col class="pa-2">
      <v-rating
        :length="6"
        readonly
        :value="value"
        full-icon="mdi-circle"
        empty-icon="mdi-circle"
        color="#FB5D63"
        size="16"
        background-color="#C4C4C4"
      >
      </v-rating>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
