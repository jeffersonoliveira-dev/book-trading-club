<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li class="header__item">
          <a href="#" class="header__link">
            <transition name="slide-fade">
              <button class="header--btn" v-if="show" key="on" @click="show = false">
                <svg viewBox="0 0 24 24" class="header--icon">
                  <title>Close</title>
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  ></path>
                </svg>
              </button>
              <button class="header--btn" v-else key="off" @click="show = true">
                <svg viewBox="0 0 24 24" class="header--icon">
                  <title>Navigation Menu</title>
                  <path
                    d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                  ></path>
                </svg>
              </button>
            </transition>
          </a>
          <transition name="dropdown">
            <div class="header__dropdown-menu" v-bind:class="{ active: show }" v-if="show">
              <div class="menuBox">
                <div class="items">
                  <div class="item"><button v-on:click="getRoute('profile')" class="btn-floating"><i class="large material-icons">account_circle</i></button></div>
                  <div class="item"><button v-on:click="getRoute('books')" class="btn-floating"><i class="large material-icons">library_books</i></button></div>
                  <div class="item"><button v-on:click="getRoute('history')" class="btn-floating"><i class="large material-icons">history</i></button></div>
                  <div class="item"><button v-on:click="logout()" class="btn-floating"><i class="large material-icons">power_settings_new</i></button></div>
                </div>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    getRoute(route) {
      this.$router.push(route)
    },
    logout() {
      fetch('/user/logout', { method: "POST" })
      .then(() => {
      }).then(() =>   window.location.href = 'http://localhost:3000/')
    }
  }
};

// got vue functionality to dropdown menu
</script>

<style scoped>

.large {
  margin-top: -10px;
}

.menuBox {
  position: relative;
  color: black;
  display: flex
}


.items {
  display: flex;
  flex-wrap: wrap;

}
.items .item {
  flex: 1 0 100%;
  box-sizing: border-box;
  padding: 10px;
  display: inline;
  margin-left: 10px;
}


h1 {
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

hr {
  border: 0;
  height: 0;
  margin: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.header {
  padding: 2rem 5rem 2rem 5rem;
}
.header__nav {
  position: relative;
}
.header__navbar {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.header__item {
  padding: 1rem;
  position: relative;
  bottom: 10px;
}
.header__link .header--icon {
  color: gray;
}
.header__link .header--btn {
  top: 0;
  right: 0;
  position: absolute;
}
.header__link .header--btn:focus {
  outline: 0;
}
.header--icon {
  fill: currentcolor;
  width: 1.65rem;
  height: 1.65rem;
  display: inline-flex;
}
.header--btn {
  cursor: pointer;
  padding: 0;
  display: inline-block;
  border: 1px solid transparent;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header__link .header--icon[data-v-9bcc0be2] {
  color: white;
}

.header__dropdown-menu {
  position: absolute;
  top: 100%;
  bottom: 0;
  z-index: 1;
  right: 0;
  min-height: 300px;
  min-width: 130px;
  overflow-y: auto;
  padding: 2rem 2rem 2rem 0;
  margin-top: 1rem;
  border-radius: 8px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  -webkit-transform: translateX(31px);
  transform: translateX(31px);
}

.slide-fade-leave-active {
  -webkit-transform: translateX(-31px);
  transform: translateX(-31px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
}
</style>
