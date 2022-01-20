
const c = document.querySelector('.pagination')
const indexs = Array.from(document.querySelectorAll('.index'))
let cur = -1
indexs.forEach((index, i) => {
  index.addEventListener('click', (e) => {
    // clear
    c.className = 'pagination'
    void c.offsetWidth; // Reflow
    c.classList.add('open')
    c.classList.add(`i${i + 1}`)
    if (cur > i) {
      c.classList.add('flip')
    }
    cur = i
  })
})

function saveImg(slug){
  
  const userEmail = $('#js-checkUser').val();

  

  if(userEmail){
    let save = Number($(`#saveApi_${slug}`).text());

    setTimeout(function() {
      $('#saveModal-btn').click();
    }, 3000);

    $.post(`/api/home/save/${slug}`, {
        save: 1,
        userEmail: userEmail,
        meme: slug,
    }, function (data) {
        save++;
        $(`#saveApi_${slug}`).text(save);
        $(`#memeSaveBtn_${slug}`).text("saved");
        $(`#memeSaveBtn_${slug}`).removeClass('meme-save-btn').addClass('btn-secondary').addClass('disabled');
    }).fail(function(data){

    });
  }
  else{
    setTimeout(function() {
      $('#saveModal-btn').click();
    }, 10000);
    return;
  }
  
}

function viewImg(link){
  $("#fullWidthMeme").attr("src",link);
}