<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import RecipeTotalRatings from '../components/RecipeTotalRatings.vue';
    import RecipePinAndNavButtons from '../components/RecipePinAndNavButtons.vue';
    import RecipeTools from '../components/RecipeTools.vue';
    import RecipeInfo from '../components/RecipeInfo.vue';
    import RecipeFAQ from '../components/RecipeFAQ.vue';
    import RecipeIngredients from '../components/RecipeIngredients.vue';
    import RecipePrepInfo from '../components/RecipePrepInfo.vue';
    import RecipeInstructions from '../components/RecipeInstructions.vue';
    import RecipeRating from '../components/RecipeRating.vue';
    import RecipePostDate from '../components/RecipePostDate.vue';
    import RecipeSendInbox from '../components/RecipeSendInbox.vue';
    
    // Crear una referencia reactiva para almacenar la receta
    const recipe = ref({});

    // Función para obtener la receta desde la API
    const fetchRecipe = async () => {
    try {
        const response = await axios.get('http://http://localhost/recipe_page_php/display-recipe.php'); // Cambia la URL a la correcta
        recipe.value = response.data[0]; // Asigna la primera receta al objeto "recipe"
    } catch (error) {
        console.error("Error fetching recipe: ", error);
    }
    };

    // Ejecutar la función cuando el componente sea montado
    onMounted(() => {
    fetchRecipe();
    });
</script>

<template>
    <article class="w-full lg:w-[70%] px-5 mb-12">
        <h2 class="uppercase text-center text-xl md:text-2xl xl:text-3xl font-medium">{{ recipe.title }} Recipe title all pretty</h2>
        <div class="flex justify-center my-4">
            <RecipeTotalRatings></RecipeTotalRatings>
        </div>
        <div class="flex justify-center space-x-3 mt-4 mb-2">
            <RecipePinAndNavButtons></RecipePinAndNavButtons>
        </div>
        <div class="my-8">
            <RecipeInfo></RecipeInfo>
        </div>
        <div class="border border-[#00284d] bg-[#00284d]/15 p-6 mb-5">
            <RecipeTools></RecipeTools>
        </div>
        <div class="border border-[#00284d]/70 bg-[#00284d]/15 p-6 mb-5">
            <RecipeFAQ></RecipeFAQ>
        </div>
        <div class="border border-[#00284d] mb-5">
            <div class="bg-[#00284d] text-white flex flex-col lg:flex-row lg:space-x-3 p-6">
                <RecipePrepInfo></RecipePrepInfo>
            </div>
            <div class="p-6">
                <RecipeIngredients></RecipeIngredients>
            </div>
            <div class="p-6">
                <RecipeInstructions></RecipeInstructions>
            </div>
        </div>
        <div class="text-white bg-[#00284d] p-6">
            <RecipeRating></RecipeRating>
        </div>
        <div class="my-6 text-center">
            <RecipePostDate></RecipePostDate>
        </div>
        <div class="text-white bg-[#00284d] text-center p-6">
            <RecipeSendInbox></RecipeSendInbox>
        </div>
    </article>
</template>