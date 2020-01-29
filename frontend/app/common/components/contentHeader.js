angular.module('primeiraApp').component('contentHeader', {
<<<<<<< Updated upstream
    bindings: {
        name: '@',
        small: '@',
    },
    template: `
        <section class="content-header">
            <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
        </section>`
})
=======
   bindings: {
      name: '@',
      small: '@',
   },
   template: `
      <section class="content-header">
        <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
      </section>
   `
});
>>>>>>> Stashed changes
