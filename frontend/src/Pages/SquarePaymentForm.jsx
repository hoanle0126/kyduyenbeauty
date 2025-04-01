import { useEffect, useState } from "react";
import axios from "axios";

const SquarePayment = () => {
  const [payments, setPayments] = useState(null);
  const [card, setCard] = useState(null);

  useEffect(() => {
    const loadSquare = async () => {
      if (!window.Square) {
        console.error("Square SDK chưa được tải.");
        return;
      }

      try {
        const paymentsInstance = window.Square.payments(
          "sq0idp-o6Soze5DETR4XEANHX94vw",
          "LZM6G8GHNN14P"
        );

        setPayments(paymentsInstance);

        const cardInstance = await paymentsInstance.card();
        await cardInstance.attach("#card-container");
        setCard(cardInstance);
      } catch (error) {
        console.error("Square Payments failed to load", error);
      }
    };

    loadSquare();
  }, []);

  const handlePayment = async () => {
    if (!card) return;

    try {
      const result = await card.tokenize();
      if (result.status === "OK") {
        const paymentData = {
          token: result.token,
          amount: 1000, // Giá trị cần thanh toán (đơn vị: cent)
          currency: "USD",
        };

        // Gửi token lên backend Laravel để xử lý thanh toán
        const response = await axios.post(
          "http://localhost:8000/api/payments",
          paymentData,
          {
            headers: {
              Authorization: `Bearer sandbox-sq0idb-3RhpLKhT9zjDjNkHg5y1_Q`, // Thêm Access Token
              "Content-Type": "application/json",
            },
          }
        );
        console.log("message", response.data);
      } else {
        alert("Tokenization failed");
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <div>
      <div id="card-container"></div>
    </div>
  );
};

export default SquarePayment;
