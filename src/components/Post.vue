<template>
  <div>
    <h3>PostsTitle</h3>
    <p>{{ title }}</p>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: "NoTitle!" },
    desc: String,
  },
};
</script>

<style>
</style>