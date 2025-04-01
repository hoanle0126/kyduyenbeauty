<?php

namespace App\Http\Controllers;

use App\Mail\CustomMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class sendCustomMail extends Controller
{
    public function sendCustomMail(Request $request)
{
    $to = $request->input('email'); // Người nhận
    $subject = $request->input('subject'); // Chủ đề
    $data = [
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'message' => $request->input('message')
    ];

    Mail::to($to)->send(new CustomMail($data, $subject));

    return "Email đã gửi thành công!";
}
}
