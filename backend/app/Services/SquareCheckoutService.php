<?php

namespace App\Services;

use Square\SquareClient;
use Square\Exceptions\ApiException;
use Square\Models\CreateCheckoutRequest;
use Square\Models\Money;
use Square\Models\Order;
use Square\Models\OrderLineItem;

class SquareCheckoutService
{
    protected $client;

    public function __construct()
    {
        $this->client = new SquareClient([
            'accessToken' => env('SQUARE_ACCESS_TOKEN'),
            'environment' => env('SQUARE_ENVIRONMENT', 'sandbox'),
        ]);
    }

    public function createCheckout($orderId, $amount, $redirectUrl)
    {
        $checkoutApi = $this->client->getCheckoutApi();

        $money = new Money();
        $money->setAmount($amount * 100);
        $money->setCurrency('USD');

        $order = new Order(env('SQUARE_LOCATION_ID'));
        $order->setReferenceId($orderId);
        $order->setLineItems([
            new OrderLineItem('1', $money),
        ]);

        $body = new CreateCheckoutRequest(uniqid(), $order);
        $body->setRedirectUrl($redirectUrl);

        try {
            $response = $checkoutApi->createCheckout(env('SQUARE_LOCATION_ID'), $body);
            return $response->getResult();
        } catch (ApiException $e) {
            return $e->getMessage();
        }
    }
}
