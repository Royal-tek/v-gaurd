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
            <h1><span class="dim_text">Aboh Mbaise</span>/Enyiogugu-01783792</h1>
            <small>Here you can get polling units from this ward</small>
        </div>
 
       
    </header>
    <!-- End of Header -->
<!-- End of Header -->

<!-- Main -->
<main class="main-container">
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
                            <th>Polling Unit Code</th>
                            <th>Polling Unit</th>
                            <th>
                                <span class="pointer_heading">
                                    No of Polling Unit Officers
                                    <img src="/assets/images/bold_pointer.svg" />
                                </span>
                            </th>
                            <th>
                                <span class="pointer_heading">
                                    Number of Votes
                                    <img src="/assets/images/bold_pointer.svg" />
                                </span>
                            </th>
                            
                            
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr v-for="(polling, index) in pollingUnits" :key="index">
                            <th scope="row" class="row__title">00086544</th>

                            <td><router-link style="color: black;" :to="{ path: `/polling-unit-detail-view/${polling}`, query : {lga :$route.query.lga, ward: $route.query.ward}}">{{ polling }}</router-link></td>
                            <!-- <td>{{ polling }}</td> -->
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
name : 'SuperAdminPollingUnitView',
data(){
    return {    
        pollingUnits : []
    }
},
created (){
    this.getPollingUnits()
},
methods : {
    
    async getPollingUnits(){
        try {
            const ward = this.$route.params.wardName
                const pollingUnit = await axios.get('https://v-guard.onrender.com/api/admin/lga/get-ward-data', {
                params : {
                ward : ward
                }
            })
            this.pollingUnits = pollingUnit.data.data
        console.log(pollingUnit);
        } catch (error) {
            console.log(error);
        }
    }
}
}
</script>