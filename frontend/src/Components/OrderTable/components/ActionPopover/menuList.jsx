import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../../../store/orders/action";

export const menuList = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return [
    {
      title: "Detail",
      icon: "solar:eye-outline",
      action: () => navigate("/admin/orders/" + id),
    },
    {
      title: "Delete",
      icon: "solar:trash-bin-trash-outline",
      action: () => dispatch(deleteOrder(id)),
    },
  ];
};
