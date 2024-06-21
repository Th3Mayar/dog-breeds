<template>
  <div class="content">
    <h1>Manage Dogs</h1>

    <form @submit.prevent="createDog">
      <label>Dog Name:</label>
      <input type="text" v-model="newDog.name" required />
      <label>Image URL:</label>
      <input type="text" v-model="newDog.image" required />
      <label>Breeds:</label>
      <multiselect
        v-model="selectedBreeds"
        :options="breedOptions"
        track-by="name"
        label="name"
        multiple
        required
      >
      </multiselect>
      <button type="submit">Create Dog</button>
    </form>

    <table class="dogs-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Breeds</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dog in dogs" :key="dog._id">
          <td><img :src="dog.image" alt="Dog" style="width: 100px" /></td>
          <td>{{ dog.name }}</td>
          <td>
            <ul>
              <li v-for="breed in dog.breeds" :key="breed._id">
                {{ breed.name }}
              </li>
            </ul>
          </td>
          <td>
            <button @click="deleteDog(dog._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiClient from "../../api/dog-api";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      dogs: [],
      breedOptions: [],
      selectedBreeds: [],
      newDog: {
        name: "",
        breeds: [],
        image: "",
      },
    };
  },
  async mounted() {
    await this.fetchDogs();
    await this.fetchBreedOptions();
  },
  methods: {
    async fetchDogs() {
      try {
        const response = await apiClient.get("/dogs", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.dogs = response.data;
        console.log("Dogs fetched successfully:", this.dogs);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    },
    async fetchBreedOptions() {
      try {
        const response = await apiClient.get("/breeds", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.breedOptions = response.data;
        console.log("Breed options fetched successfully:", this.breedOptions);
      } catch (error) {
        console.error("Error fetching breed options:", error);
      }
    },
    async createDog() {
      try {
        const breeds = this.selectedBreeds.map((breed) => ({
          name: breed.name,
        }));
        const newDogData = {
          name: this.newDog.name,
          breeds: breeds,
          image: this.newDog.image,
        };

        const response = await apiClient.post("/dogs", newDogData, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        console.log("Dog created successfully:", response.data);
        await this.fetchDogs();
        this.newDog = { name: "", breeds: [], image: "" };
        this.selectedBreeds = [];
      } catch (error) {
        console.error("Error creating dog:", error);
      }
    },
    async deleteDog(id) {
      try {
        const response = await apiClient.delete(`/dogs/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        console.log("Dog deleted successfully:", response.data);
        await this.fetchDogs();
      } catch (error) {
        console.error("Error deleting dog:", error);
      }
    },
  },
};
</script>

<style scoped>
.dogs-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.dogs-table th,
.dogs-table td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.dogs-table th {
  background-color: #f2f2f2;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.multiselect {
  width: 100%;
  margin-bottom: 10px;
}
</style>
