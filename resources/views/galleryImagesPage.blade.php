@extends('main')

@section('content')
    <div class="gallery-images-page" >

        <div class="gallery-images-page__desc">
        </div>

        <div class="gallery-images-page__gallery">
            @foreach ($imagesList as $images)
            <div class="gallery-images-page__gallery-item">
                <img class="gallery-images-page__gallery-item-img" src="{{ $images->image }}" alt="{{ $images->title }}">
                <span class="gallery-images-page__gallery-item-title">{{ $images->title }}</span>
                <div>
                    <span>{{ $images->tags }}</span>
                </div>
             </div>
            @endforeach
        </div>

    </div>
@endsection