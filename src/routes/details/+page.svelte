<script lang="ts">
  import { jobMap } from '../../data/books.ts';
  const buttonStyle = `text-center p-1 flex-grow
    hover:dark:bg-slate-900 hover:bg-stone-50 transition-all`
</script>
<section class="flex-grow flex flex-col items-center gap-4 font-sans p-2">
  <div class="w-full max-w-3xl py-8 px-8">
    <h1 class="text-4xl">
      Category Theory for <span class="underline">Everyone</span>
    </h1>
    <aside class="text-stone-700 dark:text-slate-400 py-8 text-lg">
      Category Theory is a 🔥<span class="text-orange-500">hot</span>🔥 new nonsense language for communicating across various fields of math, science, philosophy, and more. Here's how you can get in on the action
    </aside>
    <div class="text-lg dark:text-slate-300 text-stone-800">
      <p class="pb-8">
        Though there are tons of great <a class="underline cursor-pointer" href='https://amzn.to/3UygfVN'>general introductions</a> to category theory out there,
        the field is extremely diverse and interdisciplinary. You can - and should - bring your viewpoint and experience
        with you into the wild worlds of objects and morphisms.
      </p>
      <p class="pb-8">
        Whatever career or interests you have, there's a decent chance
        someone has already written about category theory in a way that resonates with your existing knowledge.
      </p>
      <p>
        This page is an extremely loosely curated list of these domain-specific <i>Category Theory for X</i> -style 
        books, papers, and presentations.
      </p>
    </div>
  </div>
  {#each Object.keys(jobMap) as job}
    <section class="
      text-left border
      w-full max-w-2xl
      bg-stone-50 border-stone-300
      dark:bg-slate-900 dark:border-slate-800 
      rounded-lg overflow-hidden">
      <div class="px-8 py-4">
        <h2 id={job} class="text-xl">
          <a href={jobMap[job].amznUrl ?? jobMap[job].pdfUrl}
            class="hover:underline">
            {jobMap[job].name}
          </a>
        </h2>
        
        <div class="dark:text-slate-400 text-stone-700 gap-8">
          <span>{jobMap[job].author}</span>
          {#if jobMap[job].stars}
            <a 
              class="hover:dark:bg-slate-800 hover:bg-stone-400 pr-4 pl-1 py-1 rounded"
              href={jobMap[job].grUrl}>
              ⭐{jobMap[job].stars}/5
            </a>
          {/if}
        </div>
      </div>
      <div class="px-8 pb-8 pt-0">
        <p class="pb-2">For a <b>{job}</b> looking to learn about Categories.</p>
        <p>{jobMap[job].comment ??""}</p>
      </div>
      <footer class="bg-stone-300 dark:bg-slate-800 divide-x
         dark:divide-slate-900 divide-stone-50 flex
         border-t cursor-pointer
          border-t-stone-300 dark:border-t-slate-800">
        {#if jobMap[job].amznUrl}
          <a href={jobMap[job].amznUrl} class={buttonStyle}>Find it on Amazon⏵</a>
        {/if}
        {#if jobMap[job].pdfUrl}
          <a href={jobMap[job].pdfUrl} class={buttonStyle}>Free PDF⏵</a>
        {/if}
    </footer>
    </section>
  {/each}
</section>


