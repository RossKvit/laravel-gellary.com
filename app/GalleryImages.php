<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class GalleryImages extends Model
{
    public function getQB(): Builder
    {
        return self::query();

    }

    /**
     * @param string $image
     * @param string $title
     * @param string $tags
     */
    public function add( string $image, string $title, string $tags ){
        $this->getQB()->insert([
            ['title' => $title, 'tags' => $tags, 'image' => $image]
        ]);
    }
}
