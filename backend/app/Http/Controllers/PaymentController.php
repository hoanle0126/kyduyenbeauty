<?php

namespace App\Http\Controllers;
use Square\Legacy\Exceptions\ApiException;
use Square\Legacy\Models\CreatePaymentRequest;
use Square\Legacy\Models\Money;

use Illuminate\Http\Request;
use Square\Legacy\SquareClient;

class PaymentController extends Controller
{
    public function processPayment(Request $request)
    {
        // Khởi tạo SquareClient với access token
        $client = new SquareClient([
            'accessToken' => 'EAAAl9wRsIFvYF7nmKFbnKitWn9NEJd9FPqtjhN9BzhZcTOTe979nEnv7vvTGaRz',
            'environment' => 'production',
        ]);

        // ✅ Lấy thông tin từ request
        $amount = (int) $request->input('amount'); // 💰 Chuyển thành số nguyên (cent)
        $currency = strtoupper($request->input('currency', 'USD')); // Mặc định USD
        $token = $request->input('token'); // Token từ frontend

        // if($amount){
        //     return response()->json([
        //         "amount"=>$amount
        //     ]);
        // }

        // Tạo đối tượng Money
        $money = new Money();
        $money->setAmount($amount);
        $money->setCurrency($currency);

        // if ($money) {
        //     return response()->json([
        //         "amount" => $money
        //     ]);
        // }

        // Tạo yêu cầu thanh toán
        $paymentRequest = new CreatePaymentRequest(
            $token,       // Source ID (token từ frontend)
            uniqid()     // ID duy nhất
        );
        $paymentRequest->setAmountMoney($money);

        try {
            // Gửi yêu cầu thanh toán đến Square
            $response = $client->getPaymentsApi()->createPayment($paymentRequest);
            // return response()->json($response->getResult());
            if ($response->isSuccess()) {
                return response()->json([
                    'status' => 'success',
                    'message' => 'Thanh toán thành công!',
                    'data' => $response->getResult()
                ], 200);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Thanh toán thất bại!',
                    'errors' => $response->getErrors()
                ], 400);
            }
        } catch (ApiException $e) {
            // Log lỗi
            \Log::error('Square API Error: ' . $e->getMessage());
            // Trả về thông báo lỗi chi tiết
            return response()->json([
                'error' => $e->getMessage(),
                'details' => $e->getResponseBody(),
            ], 500);
        }
    }
}