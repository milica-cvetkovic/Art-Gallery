<template>
    <section class="exibition-area section-gap" id="exibitions">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="menu-content pb-60 col-lg-10">
                    <h1 class="mb-10">
                        Najnovije ponude za umetnine
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="paintings/painting1.jpg" alt="">
                        <div class="card-body">
                            <a href="#"><h4>Umetnina 1</h4></a>
                            <p>
                                Opis umetnine 1
                            </p>
                        <h6 class="date">Mart, 2023</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="paintings/painting1.jpg" alt="">
                        <div class="card-body">
                            <a href="#"><h4>Umetnina 1</h4></a>
                            <p>
                                Opis umetnine 1
                            </p>
                        <h6 class="date">Mart, 2023</h6>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="paintings/painting1.jpg" alt="">
                        <div class="card-body">
                            <a href="#"><h4>Umetnina 1</h4></a>
                            <p>
                                Opis umetnine 1
                            </p>
                        <h6 class="date">Mart, 2023</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    .section-gap {
    padding: 120px 0;
    }

    .single-exibition .date {
        color: #222;
        font-weight: 300;
    }

    .single-exibition > img {
        width: 50px;
        height: 50px;
    }

</style>

<script>
export default {
    name: "NewestOffersView"
}
</script>