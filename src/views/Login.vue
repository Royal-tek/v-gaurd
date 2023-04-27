<template>
    <section class="parent_wrapper">
        <!-- The Login Wrapper Starts -->
        <main class="login_wrapper">
            <!-- Login Carousel Section Starts -->
      
            <div class="login_carousel">
                <div class="parent_custom_carousel">
                    <div class="custom__carousel">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active first__carousel">
                                 <div class="carousel__text">
                                    <p>“There is a need for massive education on citizen's role in a democracy. Many seem to think it is to elect a perfect candidate and go home and sleep. That's why people blame instead of demanding”</p>
                                    <div class="carousel_text_author">
                                        <h3>Aisha Yesufu</h3>
                                        <p>Human Rights Activist</p>
                                    </div>
                                 </div>
                                </div>
                                <div class="carousel-item second__carousel">
                                    <div class="carousel__text">
                                        <p>“If democracy is to have breadth of meaning, it is necessary to adjust this inequity. It is not only moral, but it is also intelligent. We are wasting and degrading human life by clinging to archaic thinking”</p>
                                        <div class="carousel_text_author">
                                            <h3>Late Martin Luther King Jr</h3>
                                            <p>American Minister</p>
                                        </div>
                                    </div>
                                </div>
                               <div class="carousel-item third__carousel">
                                    <div class="carousel__text">
                                        <p>“This must be a world of democracy and respect for human rights, a world freed from the horrors of poverty, hunger, deprivation and ignorance, relieved of the threat and the scourge of civil wars and external aggression and unburdened of the great tragedy of millions forced to become refugees.”</p>
                                        <div class="carousel_text_author">
                                            <h3>Late Nelson Mandela</h3>
                                            <p>Former President of South Africa</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div class="button__controller">
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span><img src="/assets/images/prev.svg"></span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span><img src="/assets/images/next.svg"></span>
                                </a>
                            </div>
                       
                          
                          
                        </div>
                    </div>
                </div>
            
            
            <!-- Login Carousel Section Ends -->

            <!-- Main Login Section Starts -->
            <div class="login_section">
                <div class="login_section_wrapper">
                    <div class="login_description mb-5">
                        
                        <h3>Log In</h3>
                        <p>Enter your login details to have access to your dashboard.</p>
                    </div>
                    <form class="login_form">
                        <div class="login_form_input">
                            <label>Email</label>
                            <div class="input_wrapper">
                                <input type="text" placeholder="Enter Email" required v-model="email">
                            </div>
                        </div>
                        <div class="login_form_input">
                            <label>Password</label>
                            <div class="password_input">
                                <input type="password" placeholder="Enter Password" v-model="password">
                                <span><img src="/assets/images/eye.svg"></span>
                            </div>
                        </div>
                        <p v-if="getError" class="text-center bg-danger text-white w-100 p-3">{{ getErrorMsg }}</p>
                        <button :disabled="getDisabled" class="btn btn-info w-100" @click.prevent="login">Login</button>

                        <!-- <div class="login_form_input">
                            <div class="input_wrapper">
                                <input type="submit">
                                
                            </div>
                        </div> -->
                    </form>
                </div>
                

                
            </div>
        </main>
    </section>
</template>

<script>
// import axios from 'axios'
export default {
    name : 'Login',
    data(){
        return {
            email : '',
            password : ''
        }
    },
    computed:{
            getErrorMsg(){
                return this.$store.state.errorMsg
            },
            getError(){
                return this.$store.state.error
            },
            getDisabled(){
                return this.$store.state.disable
            },
    },
    methods : {
        login(){
            this.$store.commit('setDisabled', true)

            if(this.email == '' || this.password == ''){
                this.$store.commit('setError', true)
                this.$store.commit('setErrorMsg', 'No field can be left blank')
                setTimeout(()=>{
                    this.$store.commit('setError', false)
                    this.$store.commit('setDisabled', false)
                    this.$store.commit('setErrorMsg', '')
                },1000)
                return
            }
            this.$store.dispatch('login', {
                email : this.email,
                password : this.password
            })
        }
    }
}
</script>