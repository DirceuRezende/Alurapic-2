import Vue from 'vue';

Vue.directive('meu-transform', {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('dblclick', function() {
      /* let incremento = 0;
      let animate = false;

      if(binding.value) {
        incremento = binding.value.incremento;
        animate = binding.value.animate;
      }
      current+=incremento;
      if(animate) el.style.transition = `transform 0.5s`;
      el.style.transform = `rotate(${current}deg)`; */
      /* let incremento = binding.value || 90;

      if(binding.modifiers.reverse) {
        current-=incremento;
      } else {
        current+=incremento;
      }
      if(binding.modifiers.animate) el.style.transition = `transform 0.5s`;
      el.style.transform = `rotate(${current}deg)`; */
      let incremento = binding.value || 90;
      let efeito;
      if(!binding.arg || binding.arg == 'rotate') {
        if(binding.modifiers.reverse) {
          current-=incremento;
        } else {
          current+=incremento;
        }

        efeito = `rotate(${current}deg)`;
      } else if(binding.arg == "scale") {
        efeito = `scale(${incremento})`;
      }

      if(binding.modifiers.animate) el.style.transition = `transform 0.5s`;
      el.style.transform = efeito;
    })
  }
})
