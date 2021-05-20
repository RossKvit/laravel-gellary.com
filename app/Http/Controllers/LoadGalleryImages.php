<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoadGalleryImages extends Controller
{
    public function showForm()
    {
        return view('formLoadGalleryImages', [ 'description' => 'Load images to gallery', 'title_button_load' => 'Load images', 'title_button_add_item' => '+ Add item' ]);
    }

    public function imagesLoad( Request $request ){

        \Log::info( $request->all() );
		\Log::info( $request->input('params') );

        if( isset($_FILES['file']) ){
            \Log::info($_FILES['file']);
        }
    }
}