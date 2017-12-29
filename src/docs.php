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

    <section class="certificates">
        <div class="certificates__title-wrapper">
            <h2 class="certificates__title wow fadeIn"><span class="certificates__title-bold">смеси metacrete прошли все испытания</span><br>
                и сертифицированы в ОАО “ниимосстрой”</h2>
        </div>
        <div class="certificates__inner">
            <div class="objects-galery" id="js-lightgallery">
                <a class="objects-galery__item-link wow fadeIn" href="images/certificates/cert1.jpg">
                    <div class="objects-galery__overlay"></div>
                    <img class="bjects-galery__image" src="./images/certificates/cert1.jpg"  alt="">

                </a>
                <a class="objects-galery__item-link wow fadeIn" data-wow-delay=".2s"  href="images/certificates/cert2.jpg">
                    <div class="objects-galery__overlay"></div>
                    <img class="objects-galery__image" src="./images/certificates/cert2.jpg" alt="">
                </a>
                <a class="objects-galery__item-link wow fadeIn" data-wow-delay=".4s"  href="images/certificates/cert3.jpg">
                    <div class="objects-galery__overlay"></div>
                    <img class="objects-galery__image" src="./images/certificates/cert3.jpg" alt="">
                </a>
                <a class="objects-galery__item-link wow fadeIn" data-wow-delay=".6s"  href="images/certificates/cert4.jpg" >
                    <div class="objects-galery__overlay"></div>
                    <img class="objects-galery__image" src="./images/certificates/cert4.jpg" alt="">
                </a>
            </div>
        </div>
    </section>
    <div class="saving__form">
        <form class="saving-form wow fadeInUp" action="succes.php" method="post">
            <label class="saving-form__title">Получите все документы</label>
            <p class="saving-form__spec-desc">Оставьте номер, мы вышлем все необходимые документы</p>
            <input class="saving-form__phone" type="text" name="phone" required="" placeholder="Введите ваш телефон">
            <p class="saving-form__call"><?= timeUtm();?></p>
            <button class="button-saving-form" type="submit">Получить Документы</button>
            <p class="saving-form__desc">Нажимая на кнопку, я даю <a href="soglashenie.pdf" target="_blank" class="saving-form__link">cогласие на обработку персональных данных</a></p>
            <input type="hidden" name="forma" value="Специальное предложение">
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