<template>
  <article class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="overflow-hidden h-48 relative">
      <div class="h-full">
        <pre class="h-full m-0">
          <code>{{ code }}</code>
        </pre>
      </div>
      <a :href="href" class="absolute top-0 left-0 bottom-0 right-0"></a>
    </div>
    <div class="p-4">
      <h3>{{ title }}</h3>
      <p v-if="description != '' || description != null">{{ description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Snippet',
  props: ['href', 'code', 'title', 'description'],
};
</script>
