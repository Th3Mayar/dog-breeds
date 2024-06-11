<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="image" alt="Dog Image" />
        <h3>{{ name }}</h3>
      </div>
      <div class="flip-card-back">
        <h2>Family Breed</h2>
        <ul>
          <li>{{ breeds }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    breeds: {
      type: Array,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
});
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgb(24, 92, 39);;
  border-radius: 1rem;
  padding: 10px;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    bisque 60%,
    rgb(255, 231, 222) 88%,
    rgb(255, 211, 195) 40%,
  );
  color: rgb(24, 92, 39);
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(6, 61, 24) 30%,
    rgb(24, 92, 39) 88%,
    rgb(124, 255, 135) 40%,
    rgb(102, 252, 114) 78%
  );
  color: white;
  transform: rotateY(180deg);
  border: 1px solid #ffff;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50px;
  margin-bottom: 10px;
}

h2 {
  font-weight: bolder;
  margin-bottom: 10px;
}
</style>
