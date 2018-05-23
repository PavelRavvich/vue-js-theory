<template>
  <div class="container">
    <form class="pt-5" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">It's not Email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This Email alredy exists.</div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.required">Password is required</div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min lenght is {{$v.password.$params.minLength.min}}. Now password {{password.length}}
        </div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Confirm is invalid</div>
      </div>
      <button 
        :disabled="$v.$invalid"
        class="btn btn-success" 
        type="submit"
      >Submit</button>
    </form>
  </div>
</template>

<script>

import { required,  email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email);
      console.log(this.password);
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail (newEmail) {
        if (newEmail === '') return true;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@mail.ru';
            resolve(value);
          }, 1000)
        })
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs((vue) => vue.password)
    }
  }
}
</script>

<style>
</style>
