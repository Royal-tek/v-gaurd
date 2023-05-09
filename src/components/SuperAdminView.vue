<template>

                <!-- Header -->
                <header class="dashboard_header super_admin_header">
            <div class="dashboard_header_info">
                <div class="menu-icon" onclick="openSidebar()">
                    <span class="material-icons-outlined ">menu</span>
                </div>
                <h1>Dashboard</h1>
                <small>Here you can get an Overview of Imo’s Gubernatorial Election </small>
            </div>
            <div class="dashboard_header_input">
                <div class="input_search">
                    <img src="/assets/images/search-icon.svg" />
                </div>
                
                <input type="text" placeholder="Search for Polling Units , Ward, LGA, Users" />
            </div>
           
        </header>
        <!-- End of Header -->

          <main class="main-container">
            <!-- Dashboard Card Section -->
            <div class="super_cards_wrapper">
                <div class="super_admin_cards">
                    <div class="super-card">
                        <p>Number of Registered Parties</p>
                        <span class="count">20</span>
                    </div>
                    <div class="super-card">
                        <p>Total Number of Accredited Voters</p>
                        <span class="count">{{ stats.totalVoters }}</span>
                    </div>
                    <div class="super-card">
                        <p>Total Number of Valid Votes</p>
                        <span class="count">{{ stats.totalVotes }}</span>
                    </div>
                    <div class="super-card">
                        <p>Number of Void Votes</p>
                        <span class="count">{{ stats.totalVoidVotes }}</span>
                    </div>
                  
                </div>
            </div>
         

              <!-- LGA result and LGA list Session Starts Here     -->
              <section class="lga_wrapper">
                    <div class="lga_result">
                        <div class="lga_header">
                            <h3>Party's LGA Result</h3>
                            <p>Here you can view Imo State and Know which Party is wining which LGA </p>
                        </div>
                        <div class="lga_map">
                            <img src="/assets/images/map.svg" />
                        </div>
                        <div class="lga_parties">
                            <div class="lga_header">
                                <h3>Political Parties</h3>
                                <p>Here you can view Imo State and Know which Party is wining which LGA </p>
                            </div>
                        </div>

                        <section class="lga_party_cards">
                            
                            <div class="party_card" v-for="(party, index) in parties" :key="index">
                                <div class="party_info">
                                    <div class="party_user_image">
                                        <img src="/assets/images/party_user.svg" />
                                    </div>
                                    <div class="party_user_info">
                                        <h3 class="party_name">{{ party.party}}</h3>
                                        <p class="party_candidate">{{ party.candidate }}</p>
                                    </div>
                                </div>  
                                <div class="stats_info">
                                    <p class="stats_figure">{{ party.totalVotes }}</p>
                                    <p class="party_colour success"></p>
                                </div>
                            </div>
                        
                            
                            <div class="party_card">
                                <div class="party_info">
                                    <div class="party_user_image">
                                        <img src="/assets/images/party_user.svg" />
                                    </div>
                                    <div class="party_user_info">
                                        <h3 class="party_name">PDP</h3>
                                        <p class="party_candidate">Andrew Chukwuma</p>
                                    </div>
                                </div>  
                                <div class="stats_info">
                                    <p class="stats_figure">30,000</p>
                                    <p class="party_colour success"></p>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                    <div class="lga_list">
                        <div class="lga_header">
                            <h3>LGA List</h3>
                        </div>

                        <div class="list_of_lga">
                            <div class="row" >
                                <div class="col-6" style="height: 50px !important" v-for="(lga, index) in lgas" :key="index">
                                    <div class="row_content">
                                    <router-link :to="{ path: `/lga-view/${lga}`, query: { lga: lga}}" class="row_man">{{ lga }}</router-link>
                                    <!-- <router-link :to="`/lga-view/${lga}`" class="row_man" >{{ lga }}</router-link> -->
                                </div>
                                </div>
                                
                                
                            </div>
                         
                         
                        </div>
         
                    </div>
              </section>
              <!-- LGA result and LGA list Session Ends Here     -->

           

            
              
        </main>
     
  </template>
  
  <script>
  import axios from 'axios'
  import AddAgent from './AddAgent.vue';
  export default {
    name: 'SuperAdminView',
    data(){
      return{
          showAgentModal : false,
          lgas : [],
          parties : [],
          stats : {
            totalVoters : '',
            totalVoidVotes : '',
            totalVotes :''
          }
      }
    },
    components : {
      AddAgent
    },
    created(){
        this.getStats()
        this.getLga()
        this.getParties()
    },
    methods : {
        async getParties(){ 
            try {
                const parties = await axios.get('https://v-guard.onrender.com/api/admin/party',  {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                console.log(parties.data.data);
                this.parties = parties.data.data
            } catch (error) {
                console.log(error);
            }

        },
        async getStats(){
            try {
                const stats = await axios.get('https://v-guard.onrender.com/api/admin/stats',  {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                // console.log(stats.data.data);
                this.stats.totalVoidVotes = stats.data.data.totalVoidVotes
                this.stats.totalVoters = stats.data.data.totalVoters
                this.stats.totalVotes = stats.data.data.totalVotes
            } catch (error) {
                console.log(error);
            }
        },
        async getLga(){
            try {
                const lga = await axios.get('https://v-guard.onrender.com/api/admin/lga')
                this.lgas = lga.data.data
                // console.log(lga.data.data);
            } catch (error) {
                console.log(error);
            }
        },
      showAddAgent(){
          this.showAgentModal = true
      },
      closeAgentModal(){
          this.showAgentModal = false
      }
    }
  }
  </script>
  