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
                    <label class="basic_input_label">Name</label>
                   
                    <input type="text" placeholder="Enter Name">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Name</label>
                   
                    <input type="text" placeholder="Enter Name">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Name</label>
                   
                    <input type="text" placeholder="Enter Name">
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
                    
                        <select  @change="selectedLga=$event.target.value">
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
                    
                        <select>
                            <option class="option" value="">Lorem</option>
                            <option class="option"  value="">Lorem</option>
                            
                        </select>
                        <span class="custom_arrow">
                            <img src="/assets/images/arrow-bottom.svg">
                        </span>
                    </div>
                </div>
                
                <footer class="form_action">
                    <button @click="closeModal" class="btn_neutral">Cancel</button>
                    <button class="btn_green">Submit</button>
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
            selectedLga : '',
            lga : [],
            wards : [],
            selectedWard : ''
            
        }
    },
    computed : {
        shouldGetWards(){
            return this.selectedLga 
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
        }
        },

    methods : {
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
        }
    }
}
</script>