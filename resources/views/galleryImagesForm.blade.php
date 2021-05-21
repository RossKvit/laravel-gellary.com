@extends('main')

@section('content')
    <div class="gallery-images" data-csrf-token="{{ csrf_token() }}" data-action="{{ $gallery_form_route }}">
        <div class="gallery-images__description">
            {{ $description }}

            <button class="gallery-images__forms-add-item">{{$title_button_add_item}}</button>
        </div>

        <form action="" class="gallery-images__form gallery-images__form_example">
            <input class="gallery-images__input-file" type="file">
            <input class="gallery-images__input-title" type="text">
            <div class="gallery-images__tags-list">
                <input class="gallery-images__input-tag" type="text">
            </div>
        </form>

        <div class="gallery-images__forms-list"></div>
        <button class="gallery-images__load-btn">{{$title_button_load}}</button >
    </div>
@endsection