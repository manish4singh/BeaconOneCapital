$(document).ready(function () {
  // Initialize content slider first
  $(".testimonial-cntn-slider").slick({
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    centerMode: true,
    infinite: true,
    arrows: false,
    asNavFor: ".testimonial-img-slick",
  });

  // Initialize image slider with custom arrow buttons
  $(".testimonial-img-slick").slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".testimonial-cntn-slider",
    infinite: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./assets/images/Group.png" alt="Previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./assets/images/Group (1).png" alt="Next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  });

  // Add classes for adjacent slides
  function updateSlideClasses() {
    $(".testimonial-img-slick .slick-center").next().addClass("sl-next");
    $(".testimonial-img-slick .slick-center").prev().addClass("sl-prev");
  }

  // Initial class assignment
  updateSlideClasses();

  // Update classes on before change
  $(".testimonial-img-slick").on("beforeChange", function () {
    $(this).find(".slick-center").next().removeClass("sl-next");
    $(this).find(".slick-center").prev().removeClass("sl-prev");
  });

  // Update classes after change
  $(".testimonial-img-slick").on("afterChange", function () {
    updateSlideClasses();
  });
});
