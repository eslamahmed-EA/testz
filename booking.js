document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('bookingForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx-p6RQDwVThH-kShw1u_fqGIXpVtxzwGQ5rEC4DRrhiowOQsMonbwZXWOcgRQciaAc/exec';
    
    const timestampInput = form.querySelector('input[name="timestamp"]');
    timestampInput.value = new Date().toISOString(); // تعيين الوقت الحالي

    form.addEventListener('submit', e => {
        e.preventDefault();

        // تحديث الوقت عند كل إرسال
        timestampInput.value = new Date().toISOString();

        const formData = new FormData(form);

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert('✅ تم تسجيل الحجز بنجاح!');
            form.reset();
            timestampInput.value = new Date().toISOString(); // تحديث الوقت بعد إعادة الضبط
        })
        .catch(error => {
            alert('❌ حصل خطأ: ' + error.message);
        });
    });
});
