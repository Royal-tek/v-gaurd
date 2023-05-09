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
                <h1>{{ selectedLga }}</h1>
                <small>Here you can get wards on this LGA</small>
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
                        <span class="count">---</span>
                    </div>
                    <div class="super-card">
                        <p>Total Number of Votes</p>
                        <span class="count">20</span>
                    </div>
                    <div class="super-card">
                        <p>Number of Void Votes</p>
                        <span class="count">20</span>
                    </div>
                  
                </div>
            </div>
         

            <!-- Search Section Starts Here -->
            <section class="search_section super_admin_search">
                <div class="search_form"> 
                    <div class="search_input">
                        <img src="/assets/images/search-icon.svg" />
                        <input placeholder="Polling Unit,LGA,Name,Ward" />
                    </div>
                    <button @click="exportDocument">
                       Export Excel
                       <img src="/assets/images/add.svg">
                    </button>
                   
                </div>
                
            </section>
            <!-- Search Section Ends Here -->
           
            <!-- Table Starts Here  -->
            <div class="table-responsive-md table_wrapper">
                <table class="table">   
                    <thead class="table__head">
                        <tr>
                            <th>Ward Code</th>
                            <th>Wards</th>
                            <th > <span class="pointer_heading">
                                No of Polling Unit
                                <img src="/assets/images/bold_pointer.svg" /></span></th>
                            <th>
                                <span class="pointer_heading">
                                    No of LGA Admin
                                    <img src="/assets/images/bold_pointer.svg" />
                                </span>
                            </th>
                            <th>
                                <span class="pointer_heading">
                                    No of Polling Unit Agent
                                    <img src="/assets/images/bold_pointer.svg" />
                                </span>
                            </th>
                            
                            
                        </tr>
                    </thead>
                    <tbody class="">
                        
                        <tr v-for="(ward, index) in wards" :key="index">
                            
                            <th scope="row" class="row__title">Enyiogugu</th>
                            <router-link style="color: black;" :to="{ path: `/polling-unit-view/${ward}`, query: { lga: $route.query.lga, ward: ward}}"><td>{{ ward }}</td></router-link>
                            <td>20</td>
                            <td>20</td>
                            <td>20</td>
                            
                        </tr>
                        

                    </tbody>
                </table>


            </div>

            <!-- Table Ends Here -->
            
              
        </main>
</template>

<script>
import axios from 'axios'
export default {
    name : 'SuperAdminLgaView',
    data(){
        return {
            wards : [],
            selectedLga : ''
        }
    },
    created(){
        
        this.getWard()
    },
    methods : {
        exportDocument(){
            window.print()
        },
        async getWard(){
            try {
                const lga = this.$route.params.lgaName
                this.selectedLga = lga
                console.log('lgatest',lga);
                const ward = await axios.get('https://v-guard.onrender.com/api/admin/lga/wards', {
                    params : {
                        lga : lga
                    }
                })
                this.wards = ward.data.data
                console.log(ward.data.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>