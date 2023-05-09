<template>
        
    <nav class="party_display_navigation" style="text-decoration: none !important;">
    <a href="#" @click="showPolitical" :class="{'current': view =='political'}">Political Parties</a>
    <a href="#" @click="showAgent" :class="{'current': view =='agents'}">Agents</a>
    <a href="#" @click="showFeedback" :class="{'current': view =='feedback'}">Feedback</a>
    </nav>
    
</template>

<script>
export default {
name: "AddonHeader",
computed: {
    view() {
      const addons = this.$store.state.addons;
      if (addons.political) return 'political';
      if (addons.agent) return 'agents';
      if (addons.feedback) return 'feedback';
      return null;
    },
  },
methods : {
    showPolitical(){
        this.view = 'political'
        this.$store.state.addons.political = true
        this.$store.state.addons.feedback = false
        this.$store.state.addons.agent = false
    },
    showAgent(){
        this.view = 'agents'
        this.$store.state.addons.political = false
        this.$store.state.addons.feedback = false
        this.$store.state.addons.agent = true
    },
    showFeedback(){
        this.view = 'feedback'
        this.$store.state.addons.political = false
        this.$store.state.addons.feedback = true
        this.$store.state.addons.agent = false
    },
}
};
</script>

<style lang="scss" scoped>
.party_display_navigation a{
    text-decoration: none !important;
    
    &:hover{
        color: inherit;
    }

}
.current{
        color: #4C5361 !important;
        border-bottom: 2px solid  #4C5361;
    }
</style>