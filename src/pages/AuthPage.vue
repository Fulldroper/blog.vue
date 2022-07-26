<template>
  <div class="container">
    <div class="img">
      <img src="https://cdn.discordapp.com/attachments/539138991031844864/1000812550386106377/kimi-no-na-wa-gif-anime-Favim.com-6874885.gif" alt="">
    </div>
    <div class="body">
      <div v-if="type == 'auth' " >
        <div>
          <div class="large">Login to your Account</div>
          <div class="small">Immerse yourself in the world of blogs and curiosities</div>
        </div>
        <div class="integration">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="">
          <div>Continue with Google</div>
        </div>
        <div style="text-align: center;font-size: 12px;" class="small">
          or Sign in with Email
        </div>

        <div>
          <div class="small input-text">Email</div>
          <input @change="validate" class="input disable-select" style="margin-bottom:24px;" placeholder="username@email.com" type="email">
          <div class="small input-text" >Password</div>
          <input @change="validate" class="input disable-select" placeholder="Password" type="password">
          <div class="forgot" @click="changePage('/restore')">
            Forgot password?
          </div>
          <div class="btn" ref="btn">
            Sing In
          </div>
          <div class="create">
            <div>Not Registered Yet?</div>
            <div @click="changePage('/register')">Create an account</div>
          </div>
        </div>
      </div>

      <div v-else-if="type == 'restore'">
        <div>
          <div class="large">Forgot your password?</div>
          <div class="small">Please, enter your email address</div>
        </div>
        <div>
          <div class="small input-text">Email</div>
          <input @change="validate" class="input disable-select" style="margin-bottom:24px;" placeholder="username@email.com" type="email">
          <div class="btn" ref="btn">Continue</div>
          <div class="forgot">
            <div @click="changePage('/auth')">Go back to the sign in page</div>
          </div>
          
        </div>
      </div>

      <div v-else-if="type == 'register'">
        <div>
          <div class="large">Create your account</div>
          <div class="small">Enter the correct data</div>
        </div>
        <div class="integration">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="">
          <div>Continue with Google</div>
        </div>
        <div style="text-align: center;font-size: 12px;" class="small">
          or Sign in with Email
        </div>
        <div>
          <div class="small input-text">Username</div>
          <input @change="validate" class="input disable-select" style="margin-bottom:24px;" placeholder="username" type="text">
          <!-- <div class="small input-text">Phone</div>
          <input class="input disable-select" style="margin-bottom:24px;" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel"> -->
          <div class="small input-text">Email</div>
          <input @change="validate" class="input disable-select" style="margin-bottom:24px;" placeholder="username@email.com" type="email">
          <div class="small input-text">Password</div>
          <input @change="validate" class="input disable-select" style="margin-bottom:24px;" placeholder="Password" type="password">
          <div class="small input-text" >Repeat password</div>
          <input @change="validate" class="input disable-select" placeholder="Password" type="password">
          <div class="btn" ref="btn">
            Sing Up
          </div>
          <div class="forgot">
            <div @click="changePage('/auth')">Already have an account?</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlockedAccept: false
    }
  },
  props: {
    type: {
      default: "auth",
      type: String
    }
  },  
  methods: {
    changePage(val) {
      this.$emit("followpage", val)
    },
    isValidUsername(name){
      return true
    },
    toggleBlockEnter(bool){
      this.isBlockedAccept = bool
      bool ? this.$refs.btn.classList.remove('invalid-btn') : this.$refs.btn.classList.add('invalid-btn')
    },
    validate(e) {
      const el = e.target
      const validator = {
        "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "text": /^(?=[a-zA-Z0-9._]{8,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/
      }
      if (validator[el.type].test(el.value)) {
            el.classList.contains("invalid") && el.classList.remove("invalid")
            el.classList.add("valid")
            this.toggleBlockEnter(true)
          } else {
            el.classList.contains("valid") && el.classList.remove("valid")
            el.classList.add("invalid")
            this.toggleBlockEnter(false)
      }
      console.log(e.target.checkValidity());
    },
  }
}
</script>

<style scoped>
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
.invalid-btn {
  cursor: no-drop !important;
  opacity: 0.3;
}
.create {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 140px;
  color: #828282;
  font-size: 18px;
}
.create :last-child {
  color: #191349;
  cursor: pointer;
  margin-left: 10px;
}
.forgot {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #191349;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  font-family: nunito-sans,sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #525252;

}
.btn {
  background-color: #191349;
  padding: 13px;
  font-size: 18px;
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 32px;
}
.input {
  width: 420px;
  height: 42px;
  border: solid #DED2D9 1px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 3px;
}
input:invalid, .invalid {
  border: solid red 2px;
}
.valid {
  border: solid rgb(18, 168, 28) 2px;
}
.input-text {
  font-size: 14px !important;
}
.large {
  font-size: 36px;
}
.small {
  color: #828282;
  font-size: 16px;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 35%;
  padding: 15px;
  min-width: 472px;
}
.body > div > div {
  margin-bottom: 36px;
}
.integration {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.integration > div {
  color: #828282;
  font-size: 14px;
  margin-bottom: -3px;
}
.integration > img {
  width: 25px;
  height: 25px;
  margin-right: 13px;
}
.img > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.img {
  width: calc(100% - 35%);
  height: 100%;
  background-color: rgb(133, 133, 133);
  display: flex;
  justify-content: center;
  align-content: center;
}
@media screen and (max-width: 900px) {
  .body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 735px;
    border-radius: 10px;
  }
  .img {
    width: 100%;
  }
}
@media screen and (max-width: 526px) {
  .img {
    display: none;
  }
  .body {
    height: 100%;
    width: 100%;

    position: relative;
    min-width: 0 !important;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .input {
    width: 100%;
  }
}
</style>