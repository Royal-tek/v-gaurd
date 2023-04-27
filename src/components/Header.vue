        <template>
        <!-- Header -->
        <header class="dashboard_header super_admin_header">
            <div class="dashboard_header_info">
                <div class="menu-icon" onclick="openSidebar()">
                    <span class="material-icons-outlined ">menu</span>
                </div>
                <h1 v-if="superAdmin">Dashboard</h1>
                <h1 v-else>Aboh Mbaise LGA</h1>
                <small v-if="superAdmin">Here you can get an Overview of Imo’s Gubernatorial Election </small>
                <small v-else>Here you can get an Overview of Imo’s Gubernatorial Election </small>
            </div>
            <div class="dashboard_header_input">
                <div class="input_search">
                    <img src="/assets/images/search-icon.svg" />
                </div>
                
                <input type="text" placeholder="Search for Polling Units , Ward, LGA, Users" />
            </div>
           
        </header>
        <!-- End of Header -->
    </template>

        <script>
    export default {
    name: "Header",
    data() {
        return {
        superAdmin: false,
        };
    },
    created(){
        this.checkAdmin()
    },
    methods: {
        checkAdmin() {
        const checkRole = localStorage.getItem("role");
        if (checkRole === "Admin") {
            this.superAdmin = true;
        } else if (checkRole === "lgaAdmin") {
            this.superAdmin = false;
        } else {
            this.$store.commit("logout");
        }
        },
    },
    };
    </script>