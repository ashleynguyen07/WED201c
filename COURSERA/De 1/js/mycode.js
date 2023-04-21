// $(function () {
//     $("#pic1").on({
//         mouseenter: function () {
//             $(this).attr('src', 'images/Miquang02.jpg');
//         },
//         mouseleave: function () {
//             $(this).attr('src', 'images/miquang.jpg');
//         }
//     });

// });

// $(function () {
//     $("#pic2").on({
//         mouseenter: function () {
//             $(this).attr('src', 'images/spingroll02.jpg');
//         },
//         mouseleave: function () {
//             $(this).attr('src', 'images/spingroll.jpg');
//         }
//     });

// });

function ChangeImg(pic1, pic2, type, i) {
    type === "in" && i === 1 ? document.cardPic1.src = pic1 : type !== "in" && i === 1 ? document.cardPic1.src = pic2 : null;
    type === "in" && i === 2 ? document.cardPic2.src = pic1 : type !== "in" && i === 2 ? document.cardPic2.src = pic2 : null;
}