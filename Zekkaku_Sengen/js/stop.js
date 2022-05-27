const form = $('#form');
$('.send').on('click', evt => {
    form.submit();
    form[0].reset();

    //任意の実行したい処理
    return false;
})
