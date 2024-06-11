<template>
  <div class="content">
    <h1>Dog Breeds</h1>
    <div class="cards">
      <Card
        v-for="dog in dogs"
        :key="dog.id"
        :name="dog.name"
        :breeds="dog.breeds.map((breed) => breed.name).join(', ')"
        :image="dog.image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { dogApi } from "../../api/dog-api";

export default defineComponent({
  setup() {
    const dogs = ref([]);

    fetch(`${dogApi}/dogs`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dog breeds");
        }
        return response.json();
      })
      .then((data) => {
        dogs.value = data;
      })
      .catch((error) => {
        console.error("Error fetching dog breeds:", error);
      });

    return { dogs };
  },
});
</script>

<style scoped>
.cards {
  display: flex;
  gap: 50px;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 800px) {
  .cards {
    flex-direction: column;
  }
}
</style>
