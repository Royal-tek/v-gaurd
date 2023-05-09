<template>
    <!-- Popup Wrapper Starts here -->
    <section class="pop_wrapper">
        <!-- PopUp box starts here -->
        <div class="popup_box">
            <header class="popup_header">
                <p>Add Agent</p>

                <a @click="closeModal" href="#"><img src="/assets/images/close-circle.svg"></a>
            </header>
            <div class="popup_form">
                <div class="popup_input basic_input">
                    <label class="basic_input_label">First Name</label>
                    
                    <input type="text" placeholder="Enter Firstname" v-model="firstname">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Last Name</label>
                    
                    <input type="text" placeholder="Enter Lastname" v-model="lastname">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Phone Number</label>
                    
                    <input type="text" placeholder="Enter Phone number" v-model="phone">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Email Address</label>
                   
                    <input type="text" placeholder="Enter Email Address" v-model="email">
                </div>
                <div class="select_input_wrapper">
                    <label class="basic_input_label">LGA</label>
                    <div class="popup_input select_input">
                    
                        <select @change="selectedLga=$event.target.value">
                            <option class="option" value="">LGA</option>
                            <option class="option"  v-for="(l, index) in lga" :key="index" :value="l">{{ l }}</option>
                        </select>
                        <span class="custom_arrow">
                            <img src="/assets/images/arrow-bottom.svg">
                        </span>
                    </div>
                </div>
                <div class="select_input_wrapper">
                    <label class="basic_input_label">Ward</label>
                    <div class="popup_input select_input">
                    
                        <select  @change="selectedWard=$event.target.value">
                            <option class="option" value="">Ward</option>
                            <option class="option" v-for="(ward, index) in wards" :key="index" :value="ward">{{ward}}</option>
                            
                        </select>
                        <span class="custom_arrow">
                            <img src="/assets/images/arrow-bottom.svg">
                        </span>
                    </div>
                </div>
                <div class="select_input_wrapper">
                    <label class="basic_input_label">Polling Unit</label>
                    <div class="popup_input select_input">
                    
                        <select @change="selectedPolling=$event.target.value">
                            <option class="option" value="">Polling Unit</option>
                            <option class="option" v-for="(polling, index) in pollings" :key="index" :value="polling">{{polling}}</option>
                            
                        </select>
                        <span class="custom_arrow">
                            <img src="/assets/images/arrow-bottom.svg">
                        </span>
                    </div>
                </div>

                <div class="popup_input basic_input">
                    <label class="basic_input_label">Password</label>
                    
                    <input type="password" placeholder="Enter Password" v-model="password">
                </div>
                
                <footer class="form_action">
                    <button @click="closeModal" class="btn_neutral">Cancel</button>
                    <button class="btn_green" @click="createAgent">Submit</button>
                </footer>     

            </div>
            
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name : 'AddAgent',
    data(){
        return{
            firstname : '',
            lastname : '',
            phone : '',
            email : '',
            password : '',
            selectedLga : '',
            lga : [],
            wards : [],
            pollings : [],
            selectedWard : '',
            selectedPolling : ''
            
        }
    },
    computed : {
        shouldGetWards(){
            return this.selectedLga 
        },
        getPollingUnits(){
            return this.selectedWard
        }
    },
    created(){
            this.getLga()
        },

    watch:{
        shouldGetWards: {
            immediate : true,
            handler : function(){
                this.getWard()
            }
        },
        getPollingUnits:{
            immediate : true,
            handler:function(){
                this.getPollingUnit()
            }
        }
        },

    methods : {
        async createAgent(){
            const fd = {
                firstName : this.firstname,
                lastName : this.lastname,
                phoneNumber : this.phone,
                email : this.email,
                ward : this.selectedWard,
                lga : this.selectedLga,
                pollingUnit : this.selectedPolling,
                password : this.password
            }
            try {
                const createAgent = await axios.post('https://v-guard.onrender.com/api/admin/unit/agent/create', fd, {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:'AGENT CREATED SUCCESSFULLY',
                    })
                this.closeModal()
                console.log(createAgent);
            } catch (error) {
                this.$swal({
                    icon:'error',
                    title: 'Failed',
                    // text:error.response.data.error,
                    })
                console.log(error);
            }
        },
        closeModal(){
            this.$emit('close-modal')
        },
        
        async getLga(){
            try {
                const lga = await axios.get('https://v-guard.onrender.com/api/admin/lga')
                this.lga = lga.data.data
                console.log(lga.data.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getWard(){
            try {
                
                const ward = await axios.get('https://v-guard.onrender.com/api/admin/lga/wards', {
                    params : {
                        lga : this.selectedLga
                    }
                })
                this.wards = ward.data.data
                console.log(ward.data.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getPollingUnit(){
            try {
                const pollingUnit = await axios.get('https://v-guard.onrender.com/api/admin/lga/get-ward-data',
                {
                    params : {
                        ward : this.selectedWard
                    }
                })
                this.pollings = pollingUnit.data.data
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>