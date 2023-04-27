<template>
    <!-- Header -->
   
    <header class="dashboard_header">
              <div style="cursor: pointer;" class="menu-icon" onclick="openSidebar()">
                  <span class="material-icons-outlined ">menu</span>
              </div>
              <h1>Aboh Mbaise LGA</h1>
              <small>Here you can create and manage all Polling Unit Agents under your Local Government</small>
          </header>
          <!-- End of Header -->
      
    <main class="main-container">
      <AddAgent v-if="showAgentModal" v-on:close-modal="closeAgentModal"/>
              <!-- Dashboard Card Section -->
              <div class="dashboard-cards">
                  <div class="dashboard-card">
                      <p>Total Number of Polling Unit Agents</p>
                      <span class="count">20</span>
                  </div>
                  <div class="dashboard-card">
                      <p>Total Number of Wards</p>
                      <span class="count">---</span>
                  </div>
                  <div class="dashboard-card">
                      <p>Total Number of Polling Units</p>
                      <span class="count">----</span>
                  </div>
              </div>
  
  
              <!-- Polling Search Section -->
              <section class="search_section">
                  <div class="search_form"> 
                      <div class="search_input">
                          <img src="/assets/images/search-icon.svg" />
                          <input placeholder="Polling Unit,LGA,Name,Ward" />
                      </div>
                      
                      <button @click.prevent="showAddAgent">
                         Add Agent
                         <img src="/assets/images/add.svg">
                      </button>
                     
                  </div>
                  
              </section>
  
              <!-- Bootstrap Table Begins -->
              <div class="table-responsive-md table_wrapper">
                  <table class="table">   
                      <thead class="table__head">
                          <tr>
                              <th>Name</th>
                              <th>LGA</th>
                              <th>Ward</th>
                              <th>Polling Unit</th>
                              <th>Actions</th>
                             
                            
                          </tr>
                      </thead>
                      <tbody class="table__body">
                          <tr>
                              <th scope="row" class="row__title">Andrew Peters</th>
                              <td>Aboh Mbaise</td>
                              <td>Enyiogugu</td>
                              <td>Eziala Hall</td>
                              <td class="action__column">
                                <a href=""> <img src="/assets/images/trash.svg" /></a>
                                <a href=""> <img src="/assets/images/edit.svg" /></a>
                                  
                              </td>
                          </tr>
                          <tr>
                              <th scope="row" class="row__title">Andrew Peters</th>
                              <td>Aboh Mbaise</td>
                              <td>Enyiogugu</td>
                              <td>Eziala Hall</td>
                              <td class="action__column">
                                <a href=""> <img src="/assets/images/trash.svg" /></a>
                                <a href=""> <img src="/assets/images/edit.svg" /></a>
                                  
                              </td>
                          </tr>
                          <tr>
                              <th scope="row" class="row__title">Andrew Peters</th>
                              <td>Aboh Mbaise</td>
                              <td>Enyiogugu</td>
                              <td>Eziala Hall</td>
                              <td class="action__column">
                              <a href=""> <img src="/assets/images/trash.svg" /></a>
                              <a href=""> <img src="/assets/images/edit.svg" /></a>
  
                              </td>
                          </tr>
                          
                      </tbody>
                  </table>
                    <!-- Bootstrap Table Ends -->
                </div>
          </main>
     
  </template>
  
  <script>
  import AddAgent from './AddAgent.vue';
  export default {
    name: 'AdminView',
    data(){
      return{
          showAgentModal : false
      }
    },
    components : {
      AddAgent
    },
    methods : {
      showAddAgent(){
          this.showAgentModal = true
      },
      closeAgentModal(){
          this.showAgentModal = false
      }
    }
  }
  </script>
  