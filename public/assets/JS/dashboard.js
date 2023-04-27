
// Sidebar Toggle

let sidebarOpen = false;
let sidebar = document.querySelector('.dashboard_sidebar');

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

let dropDown = document.querySelector('.dropdown');
let angelMenu = document.querySelector('.angel_down');
dropDown.addEventListener('click' , () =>{
   angelMenu.classList.toggle('angel_reset');
   dropDown.classList.toggle('expand');
})