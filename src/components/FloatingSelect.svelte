<script lang="ts">
  import { jobMap } from '../data/books.ts';
  import { onMount } from 'svelte';

  let options = Object.keys(jobMap);

  let i = -1;
  const fn = () => {
    i = (i + 1) % options.length;
    const el = document.getElementById(`scrollPos-${options[i]}`);
    if(el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
    setTimeout(fn, 3000);
  };

  $: currentJob = options[i];

  onMount(fn);


</script>

<style>
.myContainer {
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.myContainer::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
</style>

<div class="w-screen snap-x snap-mandatory flex gap-12 overflow-hidden px-48 myContainer" on:scroll={console.log}>
  {#each options as job}
    <div id={`scrollPos-${job}`} class={`align-center transition-all flex-0 
      snap-always snap-center
      whitespace-nowrap lg:text-8xl ${job === currentJob ? "underline" : ""}`}>
      <a href={jobMap[job].amznUrl}>{job}s</a></div>
  {/each}
</div>