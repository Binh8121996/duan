<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2|max:255|unique:category,name'
        ];
    }

    public function messages(){
        return [
            'required' => 'Tên danh mục không được để trống',
            'unique'=>'Tên danh mục đã tồn tại',
            'min' => 'độ dài từ 2-255 ký tự',
            'max' => 'độ dài tối đa 255 ký tự',
        ];
    }
}
