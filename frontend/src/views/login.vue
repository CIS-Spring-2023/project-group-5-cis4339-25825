<template>
  <main>
    <form>
      <div class="row justify-content-center">
          <div class="col-md-4">
              <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
                Login</h1>
              <form @submit.prevent="store.login(username, password)" novalidate="true">
                  <div class="form-group">
                      <label>User name</label>
                      <input type="text" class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       v-model="username" placeholder="username" required>
                  </div>
                  <br>
                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       v-model="password" placeholder="password" required>
                  </div>

                <button class="bg-red-700 text-white rounded" type="submit">
                  Login
                </button>
          
              </form>
          </div>
        </div>
      </form>
    </main>
  </template>
  
  <script>
  import { useLoggedInUserStore } from "@/store/loggedinUser";
  
  export default {
    data: () => {
      return {
        username: "",
        password: "",
      };
    },
    setup() {
      const store = useLoggedInUserStore()
      return {
        // you can return the whole store instance to use it in the template
        store,
      }
    }
  };
  </script>