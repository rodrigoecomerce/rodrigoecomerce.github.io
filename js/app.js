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

var navbar2 = Vue.component('navbar2', {
  template: `<div class="hero-head nav2">
			<header class="nav">
				<div class="container">
					<div class="nav-left">
						<a class="nav-item" href="../index.html"> <img
							src="https://rodrigoecomerce.github.io/images/bulma-white.png"
							alt="Logo">
						</a>
					</div>
					<span class="nav-toggle"> <span></span> <span></span> <span></span>
					</span>
					<div class="nav-right nav-menu">
						<a class="nav-item is-active"> Home </a> <a class="nav-item">
							Empresa </a> <a class="nav-item"> Serviços </a> <span
							class="nav-item"> <a
							class="button is-info is-outlined is-inverted"> <span
								class="icon"> <i class="fa fa-envelope-o"></i>
							</span> <span>Contato</span>
						</a>
						</span>
					</div>
				</div>
			</header>
		</div>
`
})

		
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
  navbar1,
    navbar2
  }
})

