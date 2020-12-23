<template>
<div>
<button>{{textVal||'BASE PROJECT'}}</button>
</div>
</template>

<<script>
export default {
  name:'Button',
  props:{
    textVal:String
  }
}
</script>