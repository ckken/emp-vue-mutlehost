<template>
<div>
  <h3>Project App</h3>
  <BaseContent />
  <hr>
  <P2Content />
</div>
</template>

<script>
//import Content from "@v2b/Content"
export default {
  components: {
    BaseContent:()=>import("base/Content"),
    P2Content:()=>import("p2/Content"),
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
