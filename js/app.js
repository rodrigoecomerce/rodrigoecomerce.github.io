var navbar1 = Vue.component('navbar1', {
  template: `<div class="hero-head hero-head1">
    <nav class="nav nav1">
  <div class="nav-right nav-menu">
            <span class="nav-item nav-item1">
              <a href="tel:34993009650">
                <span class="icon is-small">
                  <i class="fa fa-phone"></i>
                </span>
                <span>(34) 99300-9650</span>
              </a>
            </span>
  </div>
      </nav>
</div>`
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
  navbar1
  }
})

