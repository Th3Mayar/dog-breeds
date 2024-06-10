<template>
    <div>
        <Navbar /> 
        <main>
            <slot class="content"/>
        </main>
        <div class="design-footer">
            <Footer />
        </div>
    </div>
</template>

<style>
    @import '../styles/style.scss';

    body{
        background-color: rgb(188, 247, 201);
    }
    main{
        padding: 50px;
        display: flex;
        flex-direction: column;
    }
    .design-footer{
        padding: 20px;
        background-color: rgb(6, 37, 12);
        color: #fff;
        text-align: center;
        position: fixed;
        width: 100%;
        bottom: 0;
        border-top: 2px solid #fff;
    }
    h1{
        font-size: 20px;
        font-weight: bolder;
        color: rgb(24, 92, 39);
        margin-bottom: 20px;
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>