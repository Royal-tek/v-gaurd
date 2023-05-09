<template>
    
    <!-- Header -->
    <header class="dashboard_header super_admin_header">
        <div class="dashboard_header_info">
            <div class="menu-icon" onclick="openSidebar()">
                <span class="material-icons-outlined ">menu</span>
            </div>
            <div class="back_button">
                <router-link to="/" style="text-decoration: none;"><img src="/assets/images/backarrow.svg"/> 
                Back</router-link>
            </div>
            <h1><span class="dim_text">{{ lga }} / {{ ward }} </span>/ {{ pollingUnit }}</h1>
            <small>Here you can get all the information on this polling unit</small>
        </div>
 
        
    </header>
    <!-- End of Header -->
<!-- End of Header -->

<!-- Main -->
<main class="main-container">
            <!-- Dashboard Card Section -->
            <section class="polling_info_wrapper">
                <div class="info_wrapper" v-if="pollingData">
                    <div class="dark_bg polling_info_card">
                        <p> <span class="polling_scope">LGA</span><span class="polling_content">{{ lga }}</span></p>
                        <p> <span class="polling_scope">Wards</span><span class="polling_content">{{ward}}</span></p>
                        <p> <span class="polling_scope">Polling Unit</span><span class="polling_content">{{ pollingUnit }}</span></p>
                        <p> <span class="polling_scope">Polling Unit Code</span><span class="polling_content">097568900</span></p>
                    </div>
                    <div class="multiple_cards">
                        <div class="polling_card" v-if="pollingData.votes">
                            <p class="polling_title">Total number of votes</p>
                            <span class="count">{{pollingData.votes.length}}</span>
                        </div>
                        <div class="polling_card">
                            <p class="polling_title">
                                Total number of void votes
                            </p>
                            <span class="count">{{ pollingData.totalVoidVotes }}</span>
                        </div>
                        <div class="polling_card">
                            <p class="polling_title">
                                No of Agents
                            </p>
                            <span class="count">20</span>
                        </div>
                        <div class="polling_card">
                            <p class="polling_title">Status</p>
                            <div class="polling_stated" v-if="pollingData.warning">
                                Bad
                            </div>
                            <div class="polling_state" v-else>
                                Good
                            </div>
                        </div>
                    </div>
                    <div class="evidence_card">
                        <p class="polling_title">Election Evidence</p>
                        <div class="evidence_section">
                            <div class="evidence">
                                <div class="image_title">
                                    Election_Evidence_Png
                                </div>
                                <div class="view_image">
                                    <img src="/assets/images/eyee.svg" />
                                    <span>View</span>
                                </div>
                            </div>
                            <div class="evidence">
                                <div class="image_title">
                                    Election_Evidence_Png
                                </div>
                                <div class="view_image">
                                    <img src="/assets/images/eyee.svg" />
                                    <span>View</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <h1>No data has been uploaded to this polling unit</h1>
                </div>

            </section>
            
            <PoliticalPartyDisplayAddon v-if="this.$store.state.addons.political"/>
            <FeedBackDisplayAddon v-if="this.$store.state.addons.feedback"/>
            <AgentDisplayAddon v-if="this.$store.state.addons.agent"/>
          
           
            
            
              
        </main>
  
</template>

<script>
import axios from 'axios'
import PoliticalPartyDisplayAddon from './PoliticalPartyDisplayAddon.vue'
import FeedBackDisplayAddon from './FeedBackDisplayAddon.vue';
import AgentDisplayAddon from './AgentDisplayAddon.vue';
export default {
name : 'SuperAdminPollingUnitDetailView',
components : {
    PoliticalPartyDisplayAddon, FeedBackDisplayAddon, AgentDisplayAddon
},
data(){
    return {
        pollingData : [],
        lga : '',
        ward : '',
        pollingUnit : ''
    }
},
created(){
    this.getPollingUnitData()
},
methods : {
    async getPollingUnitData(){
        try {
        const lga = this.$route.query.lga
        this.lga = lga
        const ward = this.$route.query.ward
        this.ward = ward
        const pollingUnit = this.$route.params.pollingUnit
        this.pollingUnit = pollingUnit
        const pollingData = await axios.get('https://v-guard.onrender.com/api/admin/unit/details',{
            params : {
                lga : lga,
                ward : ward,
                pollingUnit : pollingUnit
            }
        })
        this.pollingData = pollingData.data
        console.log(lga);
        console.log(ward);
        console.log(pollingUnit);
        console.log(pollingData);
        } catch (error) {
            console.log(error);
        }
    }
}

}
</script>