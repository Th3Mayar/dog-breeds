<template>
  <div class="content">
    <h1>Dog Breeds</h1>
    <div class="cards">
      <Card
        breed="Labrador"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
      <Card
        breed="Pug"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
      <Card
        breed="Bulldog"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
      <Card
        breed="Labrador"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
      <Card
        breed="Labrador"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
      <Card
        breed="Labrador"
        image="https://imgs.search.brave.com/imuegL19IjLSlEsacxf2w4teOkLLD_YTJUXGc9JNd4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzMxLzIwLzM1/LzM2MF9GXzYzMTIw/MzUxNF9TUVpDNFF4/aTVVbnVvR1hLWTNW/aEZBVFRnWXJSYXd2/SC5qcGc"
      />
    </div>
  </div>
</template>

<style scoped>
  .cards{
    display: flex;
    gap: 50px;
    align-items: center;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 800px) {
    .cards{
      flex-direction: column;
    }
  }
</style>
