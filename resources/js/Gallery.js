class Gallery {

    constructor(){
        this.imagesFormsList = document.querySelector('.gallery-images__forms-list');
        this.imagesFormsListExample = document.querySelector('.gallery-images__form_example');

        this.addNewImageForm();
        this.initEventListeners();
    }

    initEventListeners() {
        let self = this;

        document.querySelector('.gallery-images__forms-add-item').addEventListener( 'click', function(e){
            self.addNewImageForm();
        });
        
        if( document.querySelector('.gallery-images__load-btn') ){
            document.querySelector('.gallery-images__load-btn').addEventListener('click', function (e) {
                e.preventDefault();

                self.loadToServerImageFormsData();
            });
        }

        let fileReader = new FileReader();
    }

    addNewImageForm(){
        let self = this,
            currentForm = self.imagesFormsListExample.cloneNode(true);

        currentForm.classList.remove('gallery-images__form_example');
        self.imagesFormsList.appendChild( currentForm );
    }

    loadToServerImageFormsData(){
        let formDataList = [],
			self = this,
			fileReader = new FileReader();
		
        document.querySelectorAll('.gallery-images__form').forEach( function (form) {
            if(!form.classList.contains('gallery-images__form_example')){
				
				let imageFormData = new FormData();
				imageFormData.append('title', form.querySelector('.gallery-images__input-title').value);
				imageFormData.append('tag', form.querySelector('.gallery-images__input-tag').value);
				imageFormData.append('file', form.querySelector('.gallery-images__input-file').files[0]);

				self.loadImageFormToServer( imageFormData );

            }
        });

        return formDataList;
    }

    loadImageFormToServer( formData ){
        let self = this;

        // Check file selected or not
        if( formData.has('file') ){
            self.httpRequest( document.querySelector('.gallery-images').getAttribute('data-action'), function( httpRequest ){
                if ( httpRequest.status == 200 ) {
                    alert('Images loaded!');
                    //window.location.replace("/");
                } else {
                    alert('Sorry. Images loaning failed by unexpected error =(');
                }
            }, formData );
        }else{
            alert("Please select a file.");
        }
    }

    httpRequest( url, callback, params ) {
        let httpRequest = new XMLHttpRequest(),
			csrfToken = document.querySelector('.gallery-images').getAttribute('data-csrf-token');

        if( !csrfToken ){
            return;
        }

        httpRequest.onreadystatechange = function() {
            if ( httpRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
                callback( httpRequest );
            }
        };

		httpRequest.open("POST", url, true);	
        //httpRequest.setRequestHeader("Content-Type", "application/json"); // "application/json"
        httpRequest.setRequestHeader("X-CSRF-TOKEN", csrfToken);
		 
        httpRequest.send( params );
    }
}

export {Gallery};