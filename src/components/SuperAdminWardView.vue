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
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th scope="row" class="row__title">00086544</th>
                            <td>Aladinma Umueluem Town Hall</td>
                            <td>20</td>
                            <td>20</td>
                        </tr>
                      
                    
                     
                      
                    </tbody>
                </table>




            <!-- Table Ends Here -->
            </div>
              
        </main>
</template>

<script>
export default {
name : 'SuperAdminWardView'
}
</script>