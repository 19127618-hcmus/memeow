// pagination

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

const curPage = Number($('#curPage').val());
const pages = Number($('#pages').val());
let pagination = [];

let f = curPage - 4;
if(f<1) f = 1;
let l = curPage + 4;
if(l>pages) l = pages;

if(f>1) $('#js-ulPagination').append('<li class="page-item disabled"><a class="page-link pagination-threeDot-btn">...</a></li>');

for(let i = f; i <= l; i++){
  let temp = undefined;
  if(i == curPage){
    temp = `<li class="page-item active"><a class="page-link" href="/${i}">${i}</a></li>`
  }
  else
    temp = `<li class="page-item"><a class="page-link" href="/${i}">${i}</a></li>`
    $('#js-ulPagination').append(temp);
}

if(l<pages) $('#js-ulPagination').append('<li class="page-item disabled"><a class="page-link pagination-threeDot-btn">...</a></li>');

// save image
function saveImg(slug){
  
  const userEmail = $('#js-checkUser').val();

  if(userEmail){
    let save = Number($(`#saveApi_${slug}`).text());

    setTimeout(function() {
      $('#saveModal-btn').click();
    }, 10000);

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
    return;
  }
  
}

// view image
function viewImg(link){
  $("#fullWidthMeme").attr("src",link);
}

// search
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#nav-search-tags" ).autocomplete({
    source: availableTags
  });
} );


$('#nav-search-btn').on('click', function (event) {

}
)