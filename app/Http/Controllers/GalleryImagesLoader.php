<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use App\GalleryImages;

class GalleryImagesLoader extends Controller
{
    const GALLERY_IMAGES_DIR = 'galleryImages';

    private $galleryImagesModel;

    public function __construct( GalleryImages $galleryImages )
    {
        $this->galleryImagesModel = $galleryImages;
    }

    public function showForm()
    {
        return view('galleryImagesForm', [ 'gallery_form_route' => route('load-images') , 'description' => 'Load images to gallery', 'title_button_load' => 'Load images', 'title_button_add_item' => '+ Add item' ]);
    }

    public function imagesLoad( Request $request ){

        \Log::info( $_POST );
		\Log::info( $request->input('tag') );
        \Log::info( $request->input('title') );
		\Log::info( $request->file() );

        $tags = $request->input('tag');
        $title = $request->input('title');
        $image_file_name = $request->file('file')->getClientOriginalName();
        Storage::putFileAs(self::GALLERY_IMAGES_DIR, new File( $request->file('file') ), $image_file_name );

        $this->galleryImagesModel->add( $image_file_name, $title, $tags );
    }
}