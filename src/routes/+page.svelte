<script lang="ts">
  import FloatingSelect from '../components/FloatingSelect.svelte';
</script>

<section class="m-auto text-center flex-grow
  leading-loose md:leading-relaxed lg:leading-relaxed
  text-4xl md:text-6xl lg:text-8xl pt-12 lg:pt-6
  font-light
  dark:[text-shadow:_#94a3b8_0px_0px_4px]
  [text-shadow:_#57534e_0px_0px_4px]
  ">
  <span>
    Category Theory<br/>
    for <br/>
  </span>
  <FloatingSelect/>
  <div class="mt-4 leading-none text-lg md:text-xl font-mono
    dark:[text-shadow:_#334155_0px_0px_4px]
    [text-shadow:_##78716c_0px_0px_4px]">
    <a class=" text-stone-600 dark:text-slate-500
      hover:text-stone-700 hover:dark:text-slate-400 
      hover:underline cursor-pointer">
      and more⏵
    </a>
  </div>
</section>