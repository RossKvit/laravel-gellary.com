class Gallery {

    constructor(){
        this.imagesFormsList = document.querySelector('.gallery-images__forms-list');
        this.imagesFormsListExample = document.querySelector('.gallery-images__form_example');
        this.galleryImagesList = [];

        this.addNewImageForm();
        this.initEventListeners();
    }

    initEventListeners() {
        let self = this;
        document.querySelector('.gallery-images__forms-add-item').addEventListener( 'click', function(e){
            self.addNewImageForm();
        });

        /*document.querySelectorAll('.dishes-page__item-order').forEach( function (el) {
            el.addEventListener( 'click', function(e){
                let dishId = e.target.getAttribute('data-dish-id'),
                    dishPrice = e.target.getAttribute('data-dish-price');

                self.addCartProduct( dishId, dishPrice );
            } );
        } );*/
    }

    addNewImageForm(){
        let self = this,
            currentForm = self.imagesFormsListExample.cloneNode(true);

        currentForm.classList.remove('gallery-images__form_example');
        self.imagesFormsList.appendChild( currentForm );
    }
}

export {Gallery};