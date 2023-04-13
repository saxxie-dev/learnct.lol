<script lang="ts">
  import { jobMap } from '../data/books.ts';
  import { onMount } from 'svelte';

  let options = Object.keys(jobMap);

  let i = -1;
  const fn = () => {
    const oi = i;
    i = (i + 1) % options.length;
    if(oi > i){
      document
        .getElementById(`prevScroll-${options[oi]}`)
        ?.scrollIntoView({behavior: 'instant', inline: 'center'});
    }
    document
      .getElementById(`scrollPos-${options[i]}`)
      ?.scrollIntoView({behavior: 'smooth', inline: 'center'});
    setTimeout(fn, 3000);
  };

  $: currentJob = options[i];

  onMount(() => setTimeout(fn));

  const pluralize = (s: string) => {
    const finalLetter = s[s.length-1];
    if(finalLetter === "y") {
      return s.slice(0,s.length-1)+"ies";
    }
    if(finalLetter === "s") { return s+"es"; }
    return s+"s";
  }

  const baseJobStyle = `align-center transition-all flex-0 
      snap-always snap-center
      h-[1.7em] lg:h-[1.4em]
      whitespace-nowrap 
      cursor-pointer
      hover:dark:[text-shadow:_#e2e8f0_0px_0px_4px]
      hover:[text-shadow:_#292524_0px_0px_4px]
      hover:underline
      `;
  const activeJobStyle = "underline text-stone-800 dark:text-slate-200 decoration-2 md:decoration-4";
  const inactiveJobStyle = "decoration-1 md:decoration-2";
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

<div class="w-screen snap-x snap-mandatory flex gap-12 overflow-hidden myContainer
  dark:text-slate-400 text-stone-600 lg:leading-none" >
  {#each options as job}
    <div id={`prevScroll-${job}`} class={`
      ${baseJobStyle}
      ${job === currentJob ? activeJobStyle : inactiveJobStyle}`}>
      <a href={`/details#${job}`}>{pluralize(job)}</a></div>
  {/each}
  {#each options as job}
    <div id={`scrollPos-${job}`} class={`
        ${baseJobStyle}
        ${job === currentJob ? activeJobStyle : inactiveJobStyle}`}>
      <a 
        href={`/details#${job}`}
        title={jobMap[job].name}>{pluralize(job)}</a></div>
  {/each}
  {#each options as job}
    <div class={baseJobStyle + inactiveJobStyle}>
      <a href={`/details#${job}`}>{pluralize(job)}</a></div>
  {/each}
</div>