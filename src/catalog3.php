<?php

require_once 'cpc.php';

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Metacrete - Смеси для торкретирования</title>
    <link rel="stylesheet" href="css/app.css">
    @@include('partial/common/head.html')
</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKKGPR8"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="l-page">
    <div class="l-page__inner header__wrapper">
        @@include('./partial/common/header.html')
    </div>

<section class="catalog">
    <div class="catalog__wrapper">
        <div class="catalog__first-block catalog__item wow fadeIn">
            <h3 class="catalog__block-title">Добавки для торкретбетона</h3>
           <div class="catalog__content js-catalog__content" id="question-1">
                <div class="catalog__galery-wrapper">
                    <div class="catalog__galery-item">
                        <img class="catalog__galery-img" src="images/torkretaddproduct/torkretaddproduct1-min.jpg" alt="product">
                        <p class="catalog__galery-title">METACRETE Addcem U 70</p>
                    </div>
                    <div class="catalog__galery-item">
                        <img class="catalog__galery-img" src="images/torkretaddproduct/torkretaddproduct2-min.jpg" alt="product">
                        <p class="catalog__galery-title">METACRETE Addcem U 75</p>
                    </div>
                    <div class="catalog__galery-item">
                        <img class="catalog__galery-img" src="images/torkretaddproduct/torkretaddproduct3-min.jpg" alt="product">
                        <p class="catalog__galery-title">METACRETE Addcem P 50</p>
                    </div>

                </div>
                <div class="cat-form__wrapper">
                    <form class="cat-form" action="succes.php" method="post">
                        <h3 class="cat-form__title">Оставьте ваши данные, мы подберем для вас подходящий состав</h3>
                        <div class="cat-form__will-call">
                            <!-- Перезвоним в течение 15 минут! -->
                            <?= timeUtm();?>
                        </div>
                        <input class="cat-form__phone" type="text" name="phone" required="" placeholder="Ваш номер телефона">
                        <button class="cat-form__button" type="submit">отправить</button>
                        <p class="cat-form__desc">Нажимая на кнопку, я даю <br><a href="soglashenie.pdf" target="_blank" class="cat-form__link">cогласие на обработку персональных данных</a></p>
                        <input type="hidden" name="forma" value="Обратный звонок">
                        <input type="hidden" name="order_type" value="2">
                        <input type="hidden" name="utm_source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>">
                        <input type="hidden" name="utm_medium" value="<?php echo isset($_GET['utm_medium']) ? $_GET['utm_medium'] : '' ;?>">
                        <input type="hidden" name="utm_campaign" value="<?php echo isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : '' ;?>">
                        <input type="hidden" name="utm_term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>">
                        <input type="hidden" name="utm_placement" value="<?php echo isset($_GET['utm_placement']) ? $_GET['utm_placement'] : '' ;?>">
                        <input type="hidden" name="utm_creative" value="<?php echo isset($_GET['utm_creative']) ? $_GET['utm_creative'] : '' ;?>">
                        <input type="hidden" name="utm_content" value="<?php echo isset($_GET['utm_content']) ? $_GET['utm_content'] : '' ;?>">
                        <input type="hidden" value="8838" name="time_spend"><input type="hidden" value="false" name="mobile">
                    </form>
                </div>


            </div>
        </div>
    </div>
</section>
    <div class="l-page__footer">
        @@include('./partial/common/footer.html')
    </div>
</div>
@@include('partial/common/modal.html')


<link rel="stylesheet" href="css/vendor.css">
<script src="https://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPbn32_WlBQp_zLSXAcotipuI8xFcenEQ" ></script>
<script  src="js/vendor.min.js"></script>
<script src="js/app.js"></script>
<script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TKKGPR8');
</script>

</body>
</html>