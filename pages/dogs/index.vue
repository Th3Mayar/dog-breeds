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

<script>
import apiClient from "../../api/dog-api";
// console.log(dogApi)
export default {
  setup() {
    const dogs = ref([]);

    onMounted(async () => {
      try {
        const response = await apiClient.get('/dogs');
        dogs.value = response.data;
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    });

    return { dogs };
  }
};
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
h1{
  font-weight: 800;
  background-image: url('https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto');
  background-size: 400% 400% ;
  animation: gradient 10s infinite;
  color: transparent;
  background-clip: text;
}
@keyframes gradient{
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}
</style>
