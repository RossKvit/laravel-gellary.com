<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use App\GalleryImages;

class GalleryImagesPage extends Controller
{
    private $galleryImagesModel;

    public function __construct( GalleryImages $galleryImages )
    {
        $this->galleryImagesModel = $galleryImages;
    }

    public function show()
    {
        return view('galleryImagesPage', [ 'imagesList' => $this->galleryImagesModel->getQB()->get() ]);
    }

    public function imagesLoad( Request $request ){

    }
}