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

    <div class="contacts__wrapper">
        <div class="contacts__left">
            <h2 class="contacts__title">АДРЕС</h2>
            <p class="contacts__desc">111141, Российская Федерация, г. Москва, ул. Плеханова, д. 9, стр. 15, пом. 7</p>
        </div>
        <div class="contacts__right">
            <h2 class="contacts__title">КОНТАКТЫ</h2>
            <p class="contacts__desc"><strong>Телефон</strong> : <a class="contacts__links roistat-phone-tel js-phone-wrap" href="tel:+74996435694"><span class="roistat-phone">8 (499) 643-56-94</span></a><br>
                <strong>Email</strong> : <a class="email-link contacts__links js-email-link" href="mailto:sales4@metacrete.ru">sales@metacrete.ru</a></p>
        </div>
    </div>
    <section class="map wow fadeIn" id="js-contacts">
        <div class="map__form-block">
            <form class="map-form" action="succes.php" method="post">
                <label class="map-form__title">получить консультацию
                    бесплатно</label>
                <input class="map-form__phone" type="text" name="phone" required="" placeholder="Введите ваш телефон">
                <p class="map-form__call"><?= timeUtm();?></p>
                <button class="button-map-form" type="submit">Получить консультацию</button>
                <p class="map-form__desc">Нажимая на кнопку, я даю <a href="soglashenie.pdf" target="_blank" class="map-form__link">cогласие на обработку персональных данных</a></p>

                <input type="hidden" name="forma" value="Форма на карте">
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
        <div id="map" class="map__contacts-map"></div>
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