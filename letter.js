// ========================================
// گرفتن عناصر صفحه
// ========================================

const envelope =
    document.getElementById(
        "envelope"
    );

const heartSeal =
    document.getElementById(
        "heartSeal"
    );


// ========================================
// باز کردن نامه
// ========================================

heartSeal.addEventListener(
    "click",
    () => {

        // باز کردن پاکت
        envelope.classList.add(
            "open"
        );

    }
);