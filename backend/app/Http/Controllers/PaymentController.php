<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Square\Exceptions\ApiException;
use Square\Models\CreatePaymentRequest;
use Square\Models\Money;
use Square\SquareClient;

class PaymentController extends Controller
{
    protected $client;

    public function __construct()
    {
        $this->client = new SquareClient([
            'accessToken' => config('services.square.access_token'),
            'environment' => config('services.square.environment'),
        ]);
    }

    public function processPayment(Request $request)
    {
        // Thực hiện thanh toán ở đây
        $paymentApi = $this->client->getPaymentsApi();

        $money = new Money();
        $money->setAmount($request->amount * 100);  // Số tiền cần thanh toán (đơn vị cent)
        $money->setCurrency('USD');

        $paymentRequest = new CreatePaymentRequest(
            $request->nonce,
            $money,
            env('SQUARE_LOCATION_ID')

        );

        try {
            $response = $paymentApi->createPayment($paymentRequest);
            return response()->json($response->getResult());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

}
