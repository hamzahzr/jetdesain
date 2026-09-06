<?php
$address='Jl. Green Joyoboyo No 6, Banjarmlati, Kec. Mojoroto, Kota Kediri, Jawa Timur 64119';
$email='jetcreativedesain@gmail.com';
$wa='6289521052099';
$ig='https://www.instagram.com/jetdesainkediri';
$tt='https://www.tiktok.com/@jet.desain.interior';
ob_start(function($html) use($address,$email,$wa,$ig,$tt){
  $html=str_replace('6281234567890',$wa,$html);
  $html=str_replace('hello@jetdesain.com',$email,$html);
  $html=str_replace('Jakarta • Indonesia','Kediri • Jawa Timur',$html);
  $html=str_replace('<p>Indonesia</p>','<p>'.$address.'</p>',$html);
  $html=str_replace('<span class="brandmark">JE</span>','<img class="brand-logo" src="/assets/jetdesain-logo.png" alt="JETDESAIN">',$html);
  $html=str_replace('</style>','.brand-logo{width:40px;height:40px;border-radius:13px;object-fit:cover;display:block;box-shadow:0 8px 20px rgba(7,85,217,.18)}.footer-social{display:flex;gap:12px;margin-top:10px}.footer-social a{font-size:10px!important;color:#aebed8!important}.footer-social a:hover{color:#fff!important}</style>',$html);
  $social='<div class="footer-social"><a href="'.$ig.'" target="_blank" rel="noopener">Instagram</a><a href="'.$tt.'" target="_blank" rel="noopener">TikTok</a></div>';
  $html=str_replace('<p>'.$address.'</p>','<p>'.$address.'</p>'.$social,$html);
  return $html;
});
?>