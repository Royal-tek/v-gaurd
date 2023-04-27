<template>
            <!-- Sidebar -->
            <aside class="dashboard_sidebar">
            <div class="sidebar-title"> 
                <div class="sidebar-brand">
                    <h1>V-Guard</h1>

                </div>
                <span style="cursor: pointer;" class="material-icons-outlined cancel" onclick="closeSidebar()">close</span>
                <ul class="sidebar-list">
                    <li class="sidebar-list-item active">
                        <a href="#" >
                            <img src="/assets/images/user.svg" />
                            <span>Polling Unit Agent</span>
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="#">
                            <img src="/assets/images/textmessage.svg" />
                            <span>Feedback</span>
                        </a>
                    </li>
                </ul>
            </div> 
            <div class="sidebar-logout">
                <ul class="sidebar-list">
                    <li class="sidebar-list-item" @click="logout" style="cursor: pointer;">
                        <a  style="text-decoration: none; color: inherit;">
                            <img src="/assets/images/logout.svg" />
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </div> 
         
        </aside>
        <!-- Sidebar Ends -->
</template>

<script>
export default {
    name : 'SideBar',
    methods : {
        logout(){
            this.$store.commit('logout')
        }
    }
}
</script>
