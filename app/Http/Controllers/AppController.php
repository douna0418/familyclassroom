<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        return view('app'); // 'app' 是你的前端应用主视图
    }
}
