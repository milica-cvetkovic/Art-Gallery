<template>
    <div>
        <h1>PA BRE</h1>
        <div v-for="offer of myOffers" :key="offer.artwork">
            <img v-bind:src="'paintings/' + offer.photo">
        </div>
    </div>
</template>

<script>
export default {
    name: "OffersView",
    data(){
        return{
            myOffers: []
        }
    },
    created(){
        let user = localStorage.getItem("user");
        let offers = localStorage.getItem("offers");
        let paintings = localStorage.getItem("paintings"); // ovde treba da se doda da se trazi iz svih tipova umetnina
        for (let i = 0; i < offers.length; i++){
            if (offers[i].username == user){
                this.myOffers.push(offers[i]);
                let artwork = paintings.find(element => element.name == offers[i].artwork);
                this.myOffers[this.myOffers.length - 1].photo = artwork.photo;
            }
        }

    }
}
</script>