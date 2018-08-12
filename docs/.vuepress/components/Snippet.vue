<template>
  <article class="bg-white shadow rounded-lg overflow-hidden">
    <div class="overflow-hidden h-48 relative">
      <div class="h-full">
        <pre class="h-full">
          <code>{{ code }}</code>
        </pre>
      </div>
      <a :href="href" class="absolute pin shadow-lg"></a>
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
  props: ['href', 'code', 'title', 'description']
};
</script>
