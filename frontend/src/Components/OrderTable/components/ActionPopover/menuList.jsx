import { router } from "@inertiajs/react";

export const menuList = (props) => {
    const { selectedRowId } = props;
    return [
        {
            title: "Detail",
            icon: "solar:eye-outline",
            action: () => router.get(route("orders.show", selectedRowId)),
        },
        {
            title: "Delete",
            icon: "solar:trash-bin-trash-outline",
            action: () =>
                router.delete(route("orders.destroy", selectedRowId), {
                    onSuccess: handleClose,
                }),
        },
    ];
};
