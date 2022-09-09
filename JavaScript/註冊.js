$("#upload_img").change(function () {

    readURL(this);   // this代表<input id="upload_img">

});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#showImg").attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}